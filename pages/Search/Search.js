import * as WxSearch from '../../wxSearch/wxSearch';
var app = require("../../wxSearch/wxSearch.js");


Component({
  data: {
    tabData: {
      searchList: getStorage('searchList'),
      tabs: ['院校优先', '专业优先', '更多筛选'],
      hotsSearch: ['数学与应用数学', '信息与计算科学', '网络工程', '应用化学', '应用化学', '计算机科学与技术', '数学与应用数学', '信息与计算科学', '网络工程'], activeIndex: 0,
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
          WxSearch.bindShowLog(that);
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
