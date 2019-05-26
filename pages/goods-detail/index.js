// pages/goods-detail/index.js
Page({

  // index/details.js
 
  /**
   * 页面的初始数据
   */
  data: {
    is_shoucang:0,
    goods_info: { goods_id: 1, goods_title: "商品标题1", goods_price: '100', goods_yunfei: 0, goods_kucun: 100, goods_xiaoliang: 1, content:'商品介绍详情商品介绍详情商品介绍详情商品介绍详情商品介绍详情商品介绍详情商品介绍详情'},
    goods_img: [
      {'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'},
      {'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg' },
      {'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg' },
      {'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg' },
      ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    pjDataList: [{ headpic: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', author: '张三', add_time: '2018-06-01', content:'好评好评，真实太好了!'},
      { headpic: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', author: '张三', add_time: '2018-06-01', content: '好评好评，真实太好了!' }
    ],//评价数据
  },
 
 
  previewImage: function (e) {
    var current = e.target.dataset.src;
    var href = this.data.imghref;
    var goodsimg = this.data.goods_img;
    var imglist = [];
    for (var i = 0; i < goodsimg.length; i++) {
      imglist[i] = href + goodsimg[i].img
    }
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: imglist// 需要预览的图片http链接列表  
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var goods_id = options.goods_id;
    wx.request({    //发送请求
      url: 'https://liyan6987.cn/goods/get_goods_detail', // 仅为示例，并非真实的接口地址
      type:'get',
      data: {
        goods_id: goods_id
      },
      header: {
          'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        that.data.detail.imgs = res.data.goods.imgs;
        that.data.detail.describe = res.data.goods.describe;
        that.data.detail.title = res.data.goods.name;
        switch(res.data.goods.type){
          case 1:that.data.detail.goods_type = "食品";break;
          case 2:that.data.detail.goods_type = "数码产品";break;
        }
        that.data.detail.price = res.data.goods.prices;
        that.data.detail.name = res.data.poster.name;
      }
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    // 商品详情
    detail: {
      imgs: ['/images/swiper1.jpg', '/images/swiper2.jpg', '/images/swiper3.jpg'],
      title: "润＋+豪华汽车2013款 1.8TSI豪华型-个人二手+海贼王珍藏版手办",
      price: "11004",
      goods_type: "二手车",
      describe: "大三男车主，上下课代步用车，1.8t豪华型，车速最高可达*km/h，8成新，发动机变速箱良好"
    },
    // 卖家信息
    seller:{
      avatar:'/images/avatar.png',
      name:'彭于晏',
      descripe:"大三计算机网络工程4班"
    },
    //我想要它or移除收藏
    if_want:{
      text:"我想要它",//or "移除收藏"
      style:"beforewant"//or "wanted"
    },
    indicatorDots: true, //指示点
    vertical: false, //横向
    autoplay: true, //自动播放
    circular: true, //衔接滑动
    interval: 3000, //自动播放间隔时间
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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