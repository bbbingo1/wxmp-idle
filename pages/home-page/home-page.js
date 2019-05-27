// pages/home-page/home-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: {
      nearby: [],
      Recommend: [],
      food: [],
      Electronics: [],
      Clothes: [],
      mobiles: [],
      book: [],
      car: [],
      TabletPC: [],
      Game: [],
      HouseholdElectricAppliances: [],
      Toys: [],
      Outdoorsport: [],
      Ticketing: [],
      Computer: []
    },
    navList: [{
      name: "附近",
      Egname: "nearby"
    }, {
      name: "推荐",
      Egname: "Recommend"
    }, {
      name: "食品",
      Egname: "food"
    }, {
      name: "数码用品",
      Egname: "Electronics"
    }, {
      name: "服饰",
      Egname: "Clothes"
    }, {
      name: "手机",
      Egname: "mobiles"
    }, {
      name: "图书",
      Egname: "book"
    }, {
      name: "二手车",
      Egname: "car"
    }, {
      name: "平板电脑",
      Egname: "TabletPC"
    }, {
      name: "游戏交易",
      Egname: "Game"
    }, {
      name: "家用电器",
      Egname: "HouseholdElectricAppliances"
    }, {
      name: "玩具娱乐",
      Egname: "Toys"
    }, {
      name: "运动户外",
      Egname: "Outdoorsport"
    }, {
      name: "票务卡券",
      Egname: "Ticketing"
    }, {
      name: "电脑",
      Egname: ""
    }],
  },
  loadList: function (type, page) {   //加载首页瀑布流数据
    var that = this;
    var dataList2 = [];
    wx.request({    //发送请求
      url: 'https://liyan6987.cn/goods/get_goods_list', // 仅为示例，并非真实的接口地址
      type: 'get',
      data: {
        page: page,
        type: type,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        dataList2.push(res.data);
        for (let i = 0; i < res.data.goods.length; i++) {
          let item = {
            id: '1',
            content:
              '',
            backgroundColor: '#fff',
            time: 1533106010,
            likedCount: 0,
            liked: false,
            user: {
              avatar: "../../images/pig.jpg",
              username: '杨超越',
              userId: '1'
            },
            images: [
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558888395355&di=304731884badde12956a40953e49849b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180802%2F9a4f36a3935b437d8f08ca0819674f4c.jpeg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558888395355&di=304731884badde12956a40953e49849b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180802%2F9a4f36a3935b437d8f08ca0819674f4c.jpeg"
            ]
          };
          item.id = i + 1;
          item.content = res.data.goods[i].describe;
          item.user.username = res.data.goods[i].name;
          item.images = [];
          Object.keys(res.data.goods[i].picture).forEach(function (key) {
            item.images.push("https://liyan6987.cn/static/" + res.data.goods[i].picture[key]);
          })
          item.likedCount = res.data.goods[i].price;
          that.data.dataList[that.data.navList[type + 1].Egname].push(item);
        }
        that.setData({  //必须要这样设置一下dataList的变化才会传到子组去
          dataList: that.data.dataList
        })
      }

    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadList(1, 1);
    this.loadList(2, 1);
    this.loadList(3, 1);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 用户点击首页搜索
   */
  homeSearch: function () {
    wx.navigateTo({
      url: '/pages/Search/Search'
    })
  },
  /**
   * 用户点击瀑布流事件
   */
})