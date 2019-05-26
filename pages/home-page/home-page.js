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
  },
  addList: function(data, index) {
    for (let i = 0; i < data.length; i++) {
      let item = {
        id: '1',
        content: '',
        backgroundColor: '#34d058',
        time: 1533106010,
        likedCount: 0,
        liked: false,
        user: {
          avatar: '',
          username: '',
          userId: '1'
        },
        images: [

        ]
      };
      item.id = i + 1;
      item.content = data[i].property.name;
      item.user.username = data[i].poster.name;
      item.images.push(data[i].main_img);
      item.likedCount = data[i].prices;
      this.dataList[index].push(item);
    }
  },
  loadList: function() { //加载首页瀑布流数据
    var dataList2 = [];
<<<<<<< HEAD
    wx.request({ //发送请求
      url: 'https://liyan6987.cn/goods/get_goods_list', // 仅为示例，并非真实的接口地址
      type: 'get',
      data: {
        type: 1,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        dataList2.push(res.data);
      }
=======
    wx.request({    //发送请求
            url: 'https://liyan6987.cn/goods/get_goods_list', // 仅为示例，并非真实的接口地址
            type:'get',
            data: {
                page:page,
                type: type,
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                console.log(res.data);
                dataList2.push(res.data);
                for(let i = 0;i < res.data.goods.length;i++){
                    let item ={
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
                                 "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558888395355&di=304731884badde12956a40953e49849b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180802%2F9a4f36a3935b437d8f08ca0819674f4c.jpeg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558888395355&di=304731884badde12956a40953e49849b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180802%2F9a4f36a3935b437d8f08ca0819674f4c.jpeg"
                             ]
                        };
                        item.id = i + 1;
                        item.content = res.data.goods[i].describe;
                         item.user.username = res.data.goods[i].name; 
                        item.images = [];
                        Object.keys( res.data.goods[i].picture).forEach(function(key){
                            item.images.push("https://liyan6987.cn/static/" + res.data.goods[i].picture[key]);
                        })
                        item.likedCount = res.data.goods[i].price;
                    that.data.dataList[that.data.navList[type + 1].Egname].push(item);
                }
                that.setData({  //必须要这样设置一下dataList的变化才会传到子组去
                    dataList:that.data.dataList
                  })
            }
            
>>>>>>> a62881328fbc0fcb347ea0ff490b3285283fb141
    });
    wx.request({ //发送请求
      url: 'https://liyan6987.cn/goods/get_goods_list', // 仅为示例，并非真实的接口地址
      type: 'get',
      data: {
        type: 1,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        dataList2.push(res.data);
      }
    });

    wx.request({ //发送请求
      url: 'https://liyan6987.cn/goods/get_goods_list', // 仅为示例，并非真实的接口地址
      type: 'get',
      data: {
        type: 2,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        dataList2.push(res.data);
      }
    });
    this.addList(dataList2[0], 0);
    this.addList(dataList2[0], 1);
    this.addList(dataList2[0], 2);
    this.addList(dataList2[2], 3);
    this.addList(dataList2[1], 4);

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadList();
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

  },
  /**
   * 用户点击首页搜索
   */
  homeSearch: function() {
    wx.navigateTo({
      url: '/pages/Search/Search'
    })
  },
  /**
   * 用户点击瀑布流事件
   */
})
