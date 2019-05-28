import {
  login
} from '../../api/http'
// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: null,
    password: null,
    checked: false
  },
  //表单更改
  adInputChange: function(e) {
    let that = this;
    // console.log(e)
    if (e.currentTarget.dataset.obj === "password") {
      that.setData({
        password: e.detail.value,
      })
    } else if (e.currentTarget.dataset.obj === "number") {
      that.setData({
        number: e.detail.value,
      })
    }
  },
  //勾选框更改
  checkboxChange(e) {
    if (e.detail.value == '') {
      this.setData({
        checked: false,
      })
    } else {
      this.setData({
        checked: true,
      })
    }
  },
  //登录
  signIn() {
    if (this.data.number && this.data.password && this.data.checked) {
      let result = login(this.data.number, this.data.password)
      console.log(result)
      if (result == 1) {
        wx.navigateBack({
          delta: 1
        })
      } else {
        wx.showToast({
          title: '请求失败',
          icon: 'none',
          duration: 2000
        })
      }
    } else {
      console.log(this.data.number, this.data.password, this.data.checked)
      wx.showToast({
        title: '输入错误',
        icon: 'none',
        duration: 2000
      })
    }
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