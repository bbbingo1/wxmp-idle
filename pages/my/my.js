import {
  getStorageSync,
  setStorageSync
} from '../../api/wechat'
import {
  checkLogin
} from '../../api/http'
var loginTip = require('../../template/login-tip/login-tip.js');

let app = getApp()

Page({

  data: {
    userInfo: {},
    email: 'tuji101@gmail.com',
    version: 'v1.0.0',
    libVersion: 'v2.6.6',
    copyright: 'PickledFish_Tuji101'
  },

    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      background_color: app.globalData.globalBGColor,
      bgRed: app.globalData.bgRed,
      bgGreen: app.globalData.bgGreen,
      bgBlue: app.globalData.bgBlue
    })
    let userInfo = getStorageSync('userInfo')
    if (userInfo.nickName) {
      this.setData({
        userInfo
      })
    } else {
      // 查看是否授权
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: res => {
                this.setData({
                  userInfo: res.userInfo
                })
              }
            })
          }
        }
      })
    }
  },

  onGotUserInfo: function(e) {
    let userInfo = e.detail.userInfo
    setStorageSync('userInfo', userInfo)
    this.setData({
      userInfo
    })
    let status = checkLogin();
    if (!status) {
      wx.navigateTo({
        url: '/pages/login/index',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
  //跳转
  getOrder: function(e) {
    // let status = checkLogin();
    // if (!status) {
    //   wx.navigateTo({
    //     url: '/pages/login/index',
    //     success: function(res) {},
    //     fail: function(res) {},
    //     complete: function(res) {},
    //   })
    // } else {
      wx.navigateTo({
        url: '/pages/order-list/index?type=' + e.currentTarget.dataset.type,
      })
    // }
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
    app.globalData.currentRouter = this.route
    console.log(app.globalData.currentRouter)
  },
})