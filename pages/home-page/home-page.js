// pages/home-page/home-page.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        brick_option:{
            icon:{
                fill:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558804821537&di=8ee6235288fcda4f283e7c00b6559afd&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fcf3f35b88beb7236f6fcdb6a9c2f0729a0a1b4313911-ie3tVL_fw658',
                default:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558804716549&di=bb9510e646cd11277fc8cc4f57270af8&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F50%2F28%2F58164e4b6b130_610.jpg'
              }
        },
        dataList:{
            nearby:[],
            Recommend:[],
            food:[],
            Electronics:[],
            Clothes:[],
            mobiles:[],
            book:[],
            car:[],
            TabletPC:[],
            Game:[],
            HouseholdElectricAppliances:[],
            Toys:[],
            Outdoorsport:[],
            Ticketing:[],
            Computer:[]
        },  
        dataSet:[
            {
                id: '1',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                backgroundColor: '#34d058',
                time: 1533106010,
                likedCount: 0,
                liked: false,
                user: {
                  avatar: 'user_avatar_url',
                  username: 'Minya Chan',
                  userId: '1'
                },
                images: [
                   'pic_url', 'pic_url', 'pic_url'
                 ]
              },
              {
                id: '2',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                backgroundColor: '#34d058',
                time: 1533106010,
                likedCount: 0,
                liked: false,
                user: {
                  avatar: 'user_avatar_url',
                  username: 'Minya Chan',
                  userId: '1'
                },
                images: [
                   'pic_url', 'pic_url'
                 ]
              },
              {
                id: '1',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                backgroundColor: '#34d058',
                time: 1533106010,
                likedCount: 0,
                liked: false,
                user: {
                  avatar: 'user_avatar_url',
                  username: 'Minya Chan',
                  userId: '1'
                },
                images: [
                   'pic_url', 'pic_url', 'pic_url'
                 ]
              },
              {
                id: '1',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                backgroundColor: '#34d058',
                time: 1533106010,
                likedCount: 0,
                liked: false,
                user: {
                  avatar: 'user_avatar_url',
                  username: 'Minya Chan',
                  userId: '1'
                },
                images: [
                   'pic_url', 'pic_url', 'pic_url'
                 ]
              }
            ]
    },
    addList: function(data,index){
          for(let i = 0;i < data.length;i++){
            let item ={
                id: '1',
                content:
                  '',
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
    loadList: function(){   //加载首页瀑布流数据
        var dataList2 = [];
        wx.request({    //发送请求
            url: 'https://liyan6987.cn/goods/get_goods_list', // 仅为示例，并非真实的接口地址
            type:'get',
            data: {
              page: 0,
              type: '食品',
              keyword: '食品',
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res) {
              console.log(res.data);
              dataList2.push(res.data);
            }
        });
        wx.request({    //发送请求
            url: 'https://liyan6987.cn/goods/get_goods_list', // 仅为示例，并非真实的接口地址
            type:'get',
            data: {
              page: 0,
              type: '服饰',
              keyword: '服饰',
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res) {
              console.log(res.data)
              dataList2.push(res.data);
            }
        });

        wx.request({    //发送请求
            url: 'https://liyan6987.cn/goods/get_goods_list', // 仅为示例，并非真实的接口地址
            type:'get',
            data: {
              page: 0,
              type: '数码产品',
              keyword: '数码产品',
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res) {
              console.log(res.data);
              dataList2.push(res.data);
            }
        });
        this.addList(dataList2[0],0);
        this.addList(dataList2[0],1);
        this.addList(dataList2[0],2);
        this.addList(dataList2[2],3);
        this.addList(dataList2[1],4);

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadList();
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
    homeSearch: function(){
        wx.navigateTo({
            url: '/pages/Search/Search'
          })
    },
    /**
     * 用户点击瀑布流事件
     */
    tapCard: function (event) {
        const cardId =  event.detail.card_id
        // code here.
        console.log(event);
      },   
  })