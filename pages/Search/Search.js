import * as WxSearch from '../../wxSearch/wxSearch';
var app = require("../../wxSearch/wxSearch.js");


Component({
  data: {
    tabData: {
      searchList: [],
      tabs: ['院校优先', '专业优先', '更多筛选'],
      hotsSearch: ['苹果手机', '小米手机', '网红饭团', '润佳', '公主狗', '腊肠狗', '二手单车', '出租男友', '出租女友'], activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      searchIsHidden: true,
      searchAllShow: false,
      inputVal: ''
    }
  },
    onLoad: function (options) {
        //初始渲染-读取storage的历史记录
        wxSearch.init(this)
      },
      methods:{
        bindShowLog: function(e){
          var that = this
          WxSearch.bindShowLog(e,that);
        },
        bindHideLog: function(e){
          var that = this
          WxSearch.bindHideLog(e,that);
        },
        bindInputSchool: function(e){
          var that = this
          WxSearch.bindInputSchool(e,that);
        },
        bindSearchAllShow: function(e){
          var that = this
          WxSearch.bindSearchAllShow(e,that);
        },
        bindGoSearch:function(e){
          var that = this
          WxSearch.bindGoSearch(e,that);
          wx.request({    //发送请求
            url: 'https://liyan6987.cn/goods/get_goods_list', // 仅为示例，并非真实的接口地址
            type: 'get',
            data: {
              keyword: that.data.tabData.inputVal,
              page: 0,
            },
            header: {
              'content-type': 'application/json', // 默认值
              'cookie':wx.getStorageSync("sessionid")//读取cookie
            },
            success(res) {
              console.log(res.data);
              wx.navigateTo({
                url: "/pages/order-list/index"
              });
            }
          });
        },
        bindDelLog: function(e){
          var that = this
          WxSearch.bindDelLog(e,that);
        },
        bindSearchHidden: function(e){
          var that = this;
          WxSearch.bindSearchHidden(that);
        },
      },


})
