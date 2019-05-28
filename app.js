1//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        let that = this;
        // 发送 res.code 到后台换取 openId, sessionKey, unionId、
        var code = res.code;
        that.globalData.js_code = code;
        wx.setStorageSync('js_code', code)
        //登录请求回来之后,读取res的header的cookie
        //这里的sessionid随便写的,就是个唯一标识
        let header = {
          'content-type': 'application/x-www-form-urlencoded',
          'cookie': wx.getStorageSync("sessionid")//读取cookie
        };
        wx.request({
          url: 'https://liyan6987.cn/auth/code_to_info',
          data: { code: code },
          method: 'post',
          header: header,
          success(res) {
            wx.setStorageSync("sessionid", res.header["Set-Cookie"])
            // console.log(res)
            if (res.data.status == true) {
              that.globalData.user = res.data.user
              // console.log(that.globalData.user)
              wx.setStorageSync('openid', res.data.user.openid)
            }
            else if (res.data.status == false) {
              wx.navigateTo({
                url: '/pages/login/index',
                success: function (res) { },
                fail: function (res) { },
                complete: function (res) { },
              })
            }
          }
        })
        // var appId = "wx79915908529d16ad"
        // var secret = ""
        // console.log(code)
        // wx.request({
        //   url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
        //   data: {},
        //   header: {
        //     'content-type': 'json'
        //   },
        //   success: function(res) {
        //     var openid = res //返回openid
        //     console.log('openid为' + openid);
        //   }
        // })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

  },
  globalData: {
    userInfo: null,
    user: null,
    openId: null,
    studentId: null,
    js_code: null,
    globalBGColor: '#0BDDB8 ',
    bgRed: 11,
    bgGreen: 221,
    bgBlue: 185,
  }
})