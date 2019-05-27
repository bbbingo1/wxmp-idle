// pages/goods-detail/index.js
Page({

  // index/details.js

  /**
   * 页面的初始数据
   */
  data: {
    goods_id:null,
    // 商品详情
    detail: {
      imgs: ['/images/swiper1.jpg', '/images/swiper2.jpg', '/images/swiper3.jpg'],
      title: "润＋+豪华汽车2013款 1.8TSI豪华型-个人二手+海贼王珍藏版手办",
      price: "11004",
      goods_type: "二手车",
      describe: "大三男车主，上下课代步用车，1.8t豪华型，车速最高可达*km/h，8成新，发动机变速箱良好"
    },
    // 卖家信息
    seller: {
      avatar: '/images/avatar.png',
      name: '彭星星',
      descripe: "16级计算机网络工程4班"
    },
    //我想要它or移除收藏or编辑发布
    if_want: {
      text: "我想要它", //or "移除收藏" or“编辑发布”
      style: "beforewant" //or "wanted" or “editItem”
    },
    relation_id:null,//用户商品关系:0普通关系；1商品已卖出；2我发布的商品；3我收藏的商品
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
    that.goods_id = options.goods_id;
    wx.request({ //发送请求
      url: 'https://liyan6987.cn/goods/get_goods_detail', // 仅为示例，并非真实的接口地址
      type: 'get',
      data: {
        goods_id: that.goods_id
      },
      header: {
        'content-type': 'application/json', // 默认值
        'cookie':wx.getStorageSync("sessionid")//读取cookie
      },
      success(res) {
        console.log(res.data);
        that.data.detail.imgs = [];
        Object.keys(res.data.picture).forEach(function(key) {
          that.data.detail.imgs.push("https://liyan6987.cn/static/" + res.data.picture[key]);
        })

        that.data.detail.describe = res.data.describe;
        that.data.detail.title = res.data.name;
        /*         switch(res.data.type){
                  case 1:that.data.detail.goods_type = "食品";break;
                  case 2:that.data.detail.goods_type = "数码产品";break;
                } */
        that.data.detail.goods_type = res.data.type;
        that.data.detail.price = res.data.price;
        that.data.seller.name = res.data.poster.name; 
        that.data.seller.signature = res.data.poster.signature; 
        that.data.seller.relation_id = res.data.poster.relation_id; 
        let data;
        switch (res.data.poster.relation_id) {
          case 0: data = {
            text: "我想要它", //or "移除收藏" or“编辑发布”
            style: "beforewant" //or "wanted" or “editItem”
          };
          case 2: data = {
            text: "编辑发布",
            style: "editItem"
          };
          case 3: data = {
            text: "移除收藏",
            style: "wanted"
          };
        }
        that.setData({
          detail: that.data.detail,
          seller: that.data.seller,
          if_want:data
        })

      }
    });
  },
  tapChat: function() {
    wx.navigateTo({
      url: "/components/chat/chat"
    });
  },
  tapTarget:function(e){
    console.log(e)
    let that = this
    let data;
    switch (e.currentTarget.dataset.target){
      case 0: 
        this.setData({
          if_want: {
            text: "移除收藏", //or "移除收藏" or“编辑发布”
            style: "wanted" //or "wanted" or “editItem”
          },
          relation_id:3
        });
        wx.request({
          url: 'https://liyan6987.cn/add_goods',
          data: {
            goods_id: that.goods_id,
            relation_id: 1,
          },
          method: 'post',
          header: {
            'content-type': 'application/x-www-form-urlencoded', // 默认值
            'cookie':wx.getStorageSync("sessionid")//读取cookie
          },
          success(res) {
          }
        })
      case 2: 
      // wx.navigateTo({
      //   url: '/pages/edit-detail/index',
      //   success: function(res) {},
      //   fail: function(res) {},
      //   complete: function(res) {},
      // })
      case 3: 
        this.setData({
          if_want: {
            text: "我想要它", //or "移除收藏" or“编辑发布”
            style: "beforewant" //or "wanted" or “editItem”
          },
          relation_id: 1
        });
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})