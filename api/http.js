//检查是否授权绑定学号
function checkLogin() {
  wx.request({ //发送请求
    url: 'https://liyan6987.cn/auth/login', // 仅为示例，并非真实的接口地址
    method: 'post',
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    success(res) {
      console.log(res)
      if (res.data.success == true)
        return 1;
      else if (res.data.success == false) {
        return 0
      }
    }
  });
};

//登录接口
function login(account, password) {
  var result =1;
  wx.login({
    success: res => {
      var code = res.code;
      console.log(code)
      wx.request({
        url: 'https://liyan6987.cn/auth/login',
        data: {
          stu_num: account,
          password: password,
          code: code
        },
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success(res) {
          console.log(res)
          if (res.data.seccess == true) {
            wx.setStorageSync(status, 1)
            result = 1;
          } else if (res.data.success = false) {
            result = res.data;
          }
        }
      })
    }
  })
  return result;
};
//上传图片
function uploadImg() {

}


module.exports = {
  checkLogin,
  login
}