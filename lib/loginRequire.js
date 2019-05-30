function turnToLogin(mes) {
  if (mes == 'login required') {
    wx.navigateTo({
      url: '/pages/login/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
}
module.exports = turnToLogin