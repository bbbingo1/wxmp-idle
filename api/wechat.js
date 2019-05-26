var app = getApp();

function getStorageSync(key) {
  return wx.getStorageSync(key)
}

function setStorageSync(key, value) {
  wx.setStorageSync(key, value)
}

function getCode() {
  // 登录
  wx.login({
    success: res => {
      let that = this;
      // 发送 res.code 到后台换取 openId, sessionKey, unionId、
      var code = res.code;
      return code
      // app.globalData.js_code = code;
      // wx.setStorageSync('js_code', code)
    }
  })
}

module.exports = {
  getStorageSync,
  setStorageSync,
  getCode
}