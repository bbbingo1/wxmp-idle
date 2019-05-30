//将wx.request封装为异步调用函数，避免回调地狱
class Request {
  constructor(parms) {
    this.withBaseURL = parms.withBaseURL
    this.baseURL = parms.baseURL
  }
  get(url, data) {
    return this.request('GET', url, data)
  }
  post(url, data) {
    return this.request('POST', url, data)
  }
  put(url, data) {
    return this.request('PUT', url, data)
  }
  request(method, url, data) {
    const vm = this
    return new Promise((resolve, reject) => {
      wx.request({
        url: vm.withBaseURL ? vm.baseURL + url : url,
        data,
        method,
        success(res) {
          resolve(res)
        },
        fail() {
          reject({
            msg: '请求失败',
            url: vm.withBaseURL ? vm.baseURL + url : url,
            method,
            data
          })
        }
      })
    })
  }
}

const request = new Request({
  baseURL: 'https://liyan6987.cn',
  withBaseURL: true
})

module.exports = request