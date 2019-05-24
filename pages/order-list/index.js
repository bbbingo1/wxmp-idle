// pages/order-list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, //预设当前项的值
    statusType: ["我发布的", "我卖出的", "我买到的", "我想要的"],
    winHeight: "", //窗口高度
    scrollLeft: 0, //tab标题的滚动条位置
    orderList: [
      [ //假数据
        {
          img: "/images/idea.png",
          name: "润＋+耳机3元一条便宜10元4条大甩卖",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
        {
          img: "/images/idea.png",
          name: "润＋+耳机3元一条便宜10元4条大甩卖",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
        {
          img: "/images/idea.png",
          name: "润＋+耳机3元一条便宜10元4条大甩卖",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
        {
          img: "/images/idea.png",
          name: "润＋+耳机3元一条便宜10元4条大甩卖",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
        {
          img: "/images/idea.png",
          name: "润＋+耳机3元一条便宜10元4条大甩卖",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
        {
          img: "/images/idea.png",
          name: "润＋+耳机3元一条便宜10元4条大甩卖",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
      ],
      [ //假数据
        {
          img: "/images/idea.png",
          name: "润＋+耳机3元一条便宜10元4条大甩卖",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
        {
          img: "/images/idea.png",
          name: "润＋+耳机3元一条便宜10元4条大甩卖",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
        {
          img: "/images/idea.png",
          name: "润＋+耳机3元一条便宜10元4条大甩卖",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
      ],
      [],
      [ //假数据
        {
          img: "/images/idea.png",
          name: "梨研最新最潮ipad带pencilcare保护套全套一条龙服务只要998",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
        {
          img: "/images/idea.png",
          name: "梨研最新最潮ipad带pencilcare保护套全套一条龙服务只要998",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
        {
          img: "/images/idea.png",
          name: "梨研最新最潮ipad带pencilcare保护套全套一条龙服务只要998",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
        {
          img: "/images/idea.png",
          name: "梨研最新最潮ipad带pencilcare保护套全套一条龙服务只要998",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
        {
          img: "/images/idea.png",
          name: "梨研最新最潮ipad带pencilcare保护套全套一条龙服务只要998",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
        {
          img: "/images/idea.png",
          name: "梨研最新最潮ipad带pencilcare保护套全套一条龙服务只要998",
          tag: "知名情感博主",
          cherish: 404,
          watch: 1314
        },
      ]
    ],

  },

  // 滚动切换标签样式
  switchTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },

  // 点击标题切换当前页时改变样式
  swichNav: function(e) {
    var cur = e.target.dataset.index;
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //页面跳转
    if (options && options.type) {
      this.setData({
        currentTab: options.type
      });
    }
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function(res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 100; //计算swiper的高度
        that.setData({
          winHeight: calc
        });
      }
    });
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