
// let Promise =require('es6-promise')
import Promise from 'es6-promise'
var enabledCache = false
var cache = {}

let request = (config) => {
  // wx.showNavigationBarLoading()
  return new Promise((resolve, reject) => {
    // let baseURL="https://apibeta.piaoniu.com"
    let baseURL = ""
    if (getApp().globalData.isBetaData) {
      baseURL = 'https://apibeta.piaoniu.com'
    }
    else {

      baseURL = 'https://api.piaoniu.com'
    }

    var method = (config.method || 'GET').toUpperCase()

    console.debug(method, config.url)
    if (enabledCache && method === 'GET' && cache[config.url]) {
      console.debug('GET', config.url, 'hit cache')
      resolve(cache[config.url])
      return
    }

    // var accountManager = require('./accountManager')
    var channel = wx.getStorageSync('channel') || ''
    var curCity=wx.getStorageSync('curCity')
    var location=wx.getStorageSync('location')
    // var pnid=accountManager.getPnid()

    wx.request({
      url: baseURL + config.url,
      data: config.data,
      method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: (res) => {

        if (+res.statusCode === 200) {
          if (enabledCache && method === 'GET') {
            cache[config.url] = res.data
          }
          resolve(res.data);
        } else {
          reject(res.data);
        }

        var statusCode = res.statusCode
        if (statusCode >= 200 && statusCode < 300) {
          resolve(res.data)
        } else if (statusCode == 401) {

          // accountManager.logout()
        } else {
          reject(res.data.indexOf('<') === -1 ? res.data : '服务器开小差了')
        }
      },
      header: {
        'X-Latitude':`${location.latitude||''}`,
        'X-Longitude':`${location.longitude||''}`,
        'cookie': `pnid=${pnid};channel=${channel};cityId=${curCity.cityId|| 1};dvid=${wx.getStorageSync('dvid')}`
      },
      fail: function (err) {
        wx.showToast({
          title: "您已进入无网络连接的异次元",
          icon: "none"
        })
        reject(err.errMsg)
      },
      complete:function () {
        // wx.hideNavigationBarLoading()
      }
    })
  })
}

['get', 'post', 'put', 'delete'].forEach((method) => {
  request[method] = (url, data, header) => {
    return request({
      method: method,
      url: url,
      data: data,
    })
  }
})

export default request
