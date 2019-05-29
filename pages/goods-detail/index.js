// pages/goods-detail/index.js
import {
  addGoodsRelation
} from '../../api/http.js'

Page({

  data: {
    goods_id: null,
    // 商品详情
    detail: {
      imgs: ['/images/timg.gif'],
      title: "标题加载中..",
      price: "",
      goods_type: "", //['食物', '服饰', '图书', '生活用品', '办公用品', '玩具乐器', '数码用品', '其他'],
      describe: ""
    },
    // 卖家信息
    seller: {
      avatar: '/images/avatar.png',
      name: '',
      descripe: ""
    },
    //我想要它or移除收藏or编辑发布
    if_want: {
      text: "我想要它", //or "移除收藏" or“编辑发布”
      style: "beforewant" //or "wanted" or “editItem”
    },
    relation_id: null, //用户商品关系:0普通关系；1商品已卖出；2我发布的商品；3我收藏的商品
    indicatorDots: true, //指示点
    vertical: false, //横向
    autoplay: true, //自动播放
    circular: true, //衔接滑动
    interval: 3000, //自动播放间隔时间
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.data.goods_id = options.goods_id;
    wx.request({ //发送请求
      url: 'https://liyan6987.cn/goods/get_goods_detail',
      type: 'get',
      data: {
        goods_id: that.data.goods_id
      },
      header: {
        'content-type': 'application/json', // 默认值
        'cookie': wx.getStorageSync("sessionid") //读取cookie
      },
      success(res) {
        //商品类别
        switch (res.data.type) {
          case 1:
            that.data.detail.goods_type = "食品";
            break;
          case 2:
            that.data.detail.goods_type = "服饰";
            break;
          case 3:
            that.data.detail.goods_type = "图书";
            break;
          case 4:
            that.data.detail.goods_type = "生活用品";
            break;
          case 5:
            that.data.detail.goods_type = "办公用品";
            break;
          case 6:
            that.data.detail.goods_type = "玩具娱乐";
            break;
          case 7:
            that.data.detail.goods_type = "数码用品";
            break;
          case 8:
            that.data.detail.goods_type = "其他";
            break;
        }
        //商品联系
        switch (res.data.relation_id) {
          case 0:
            data = {
              text: "我想要它", //or "移除收藏" or“编辑发布”
              style: "beforewant" //or "wanted" or “editItem”
            };
            break;
          case 2:
            data = {
              text: "编辑发布",
              style: "editItem"
            };
            break;
          case 3:
            data = {
              text: "移除收藏",
              style: "wanted"
            };
            break;
        }
        that.data.detail.imgs = [];
        Object.keys(res.data.picture).forEach(function(key) {
          that.data.detail.imgs.push("https://liyan6987.cn/static/" + res.data.picture[key]);
        })
        that.data.detail.describe = res.data.describe;
        that.data.detail.title = res.data.name;
        that.data.detail.price = res.data.price;
        that.data.seller.name = res.data.poster.name;
        that.data.seller.descripe = res.data.poster.signature;
        that.data.relation_id = res.data.relation_id;
        let data;
        that.setData({
          detail: that.data.detail,
          seller: that.data.seller,
          goods_id: that.data.goods_id,
          if_want: data,
          relation_id: that.data.relation_id
        })

      }
    });
  },

  /**
   * 跳转聊天
   */
  tapChat: function() {
    wx.navigateTo({
      url: "/components/chat/chat"
    });
  },

  /**
   * 更换商品联系
   */
  tapTarget: function(e) {
    let that = this
    switch (e.currentTarget.dataset.target) {
      case 0:
        addGoodsRelation(that.data.goods_id, 3).then((res) => {
          that.setData({
            if_want: {
              text: "移除收藏", //or "移除收藏" or“编辑发布”
              style: "wanted" //or "wanted" or “editItem”
            },
            relation_id: 3
          });
          wx.showToast({
            title: "收藏成功",
            icon: 'success',
            duration: 1000,
            success: () => {}
          })
        }).catch(err=>{console.log(err)})
        break;
      case 2:
        // wx.navigateTo({
        //   url: '/pages/edit-detail/index',
        //   success: function(res) {},
        //   fail: function(res) {},
        //   complete: function(res) {},
        // })
        break;
      case 3:
        that.setData({
          if_want: {
            text: "我想要它", //or "移除收藏" or“编辑发布”
            style: "beforewant" //or "wanted" or “editItem”
          },
          relation_id: 0
        });
        break;
    }
  },

  /**
   * 图片预览
   */
  previewImg: function(e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var imgList = this.data.detail.imgs;
    wx.previewImage({
      //当前显示图片
      current: imgList[index],
      //所有图片
      urls: imgList
    })
  },
})