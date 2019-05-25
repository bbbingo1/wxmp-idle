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
        dataSet:[
            {
                id: '1',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
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
                backgroundColor: '#AF7AC5',
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
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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
    }   
  })