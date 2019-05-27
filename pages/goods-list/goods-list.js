
Page({
 
    /**
     * 页面的初始数据
     */
    data: {
      dataList:[
        {
          goods_id:1,
          goods_title:'商品标题1',
          goods_img:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          goods_xiaoliang:'0',
          goods_price:'60'
        },{
          goods_id:1,
          goods_title:'商品标题2',
          goods_img:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          goods_xiaoliang:'0',
          goods_price:'70'
        }, {
          goods_id: 1,
          goods_title: '商品标题3',
          goods_img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          goods_xiaoliang: '0',
          goods_price: '80'
        }, {
          goods_id: 1,
          goods_title: '商品标题4',
          goods_img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          goods_xiaoliang: '0',
          goods_price: '90'
        }, {
          goods_id: 1,
          goods_title: '商品标题5',
          goods_img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          goods_xiaoliang: '0',
          goods_price: '110'
        }
      ],
      type:"",//获取到的商品类型
    },
    onLoad:function(options){
				var that = this;
				console.log(options.type);
        that.data.type = options.type;
        wx.request({    //发送请求
            url: 'https://liyan6987.cn/goods/get_goods_list', // 仅为示例，并非真实的接口地址
            type: 'get',
            data: {
              keyword: that.data.type,
              page: 1,
            },
            header: {
              'content-type': 'application/json', // 默认值
              'cookie':wx.getStorageSync("sessionid")//读取cookie
            },
            success(res) {
              console.log(res.data);

            }
          });
      }
  })