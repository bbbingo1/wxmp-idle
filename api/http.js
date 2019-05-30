// const lib = require('../lib/request')
//检查是否授权绑定学号
function checkLogin() {
  wx.request({ //发送请求
    url: 'https://liyan6987.cn/auth/login', // 仅为示例，并非真实的接口地址
    method: 'post',
    header: {
      'content-type': 'application/x-www-form-urlencoded', // 默认值
      'cookie': wx.getStorageSync("sessionid") //读取cookie
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

/**
 * 登录学号
 * @param {number} account
 * @param {string} password  //1:卖出;2:发布;3:喜欢
 */
function login(account, password) {
  var result = 1;
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
          'content-type': 'application/x-www-form-urlencoded', // 默认值
          // 'cookie':wx.getStorageSync("sessionid")//读取cookie
        },
        success(res) {
          wx.setStorageSync("sessionid", res.header["Set-Cookie"])
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

/**
 * 添加到喜欢、卖出、发布
 * @param {string} id
 * @param {number} relation  //1:卖出;2:发布;3:喜欢
 */
function addGoodsRelation(id, relation) {
  var promise = new Promise((resolve, reject) => {
    var that = this;
    wx.request({
      url: 'https://liyan6987.cn/user/add_goods_relation',
      data: {
        goods_id: id,
        relation_id: relation, //添加到喜欢
      },
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        'cookie': wx.getStorageSync("sessionid") //读取cookie
      },
      success(res) {
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      },
      fail(err) {
        reject(err);
      }
    })
  })
  return promise;
}


module.exports = {
  checkLogin,
  login,
  addGoodsRelation
}