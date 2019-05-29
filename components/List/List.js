Component({
    data: {
        iconList: [{
          icon: 'read',
          color: 'red',
          badge: 120,
          name: '图书'
        }, {
          icon: 'mobilefill',
          color: 'orange',
          badge: 1,
          name: '数码产品'
        }, {
          icon: 'game',
          color: 'yellow',
          badge: 0,
          name: '玩具乐器'
        },{
          icon: 'shopfill',
          color: 'mauve',
          badge: 0,
          name: '生活用品'
        }, {
          icon: 'noticefill',
          color: 'olive',
          badge: 22,
          name: '通知'
        }, {
          icon: 'upstagefill',
          color: 'cyan',
          badge: 0,
          name: '排行榜'
        }, {
          icon: 'redpacket_fill',
          color: 'blue',
          badge: 0,
          name: '返现'
        }, {
          icon: 'discoverfill',
          color: 'purple',
          badge: 0,
          name: '发现'
        }, {
          icon: 'questionfill',
          color: 'mauve',
          badge: 0,
          name: '帮助'
        }, {
          icon: 'commandfill',
          color: 'purple',
          badge: 0,
          name: '问答'
        }],
        gridCol:4,
        skin: false
      },
      methods:{
        GoSearch:function(e){
          console.log(e);
          var that = this;
          var index = e.currentTarget.dataset.idx
          var truIndex = 1  //真正要传过去的type编号
          console.log(index);
          switch(that.data.iconList[index].name){
            case "生活用品":truIndex = 4;break;
            case "图书":truIndex = 1;break;
            case "玩具乐器":truIndex = 6;break;
            case "数码产品":truIndex = 7;break;
            default:truIndex = 1;break;
          }
          wx.navigateTo({
            url:"/pages/goods-list/goods-list?type=" + truIndex + "&page=" + 0 
          });
        }
      }
})