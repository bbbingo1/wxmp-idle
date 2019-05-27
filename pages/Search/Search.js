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
      inputVal: '',
      inputVal2:''
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
          console.log(that.data.tabData.inputVal2);
          wx.navigateTo({
            url:"/pages/goods-list/goods-list?type=" + that.data.tabData.inputVal2
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
