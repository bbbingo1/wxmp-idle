Page({
    data: {
      TabCur: 0,
			scrollLeft:0,
			navList:[{
				name:"附近",
			},{
					name:"推荐",
				},{
				name:"手机",
			},{
				name:"图书",
			},{
				name:"二手车",
			},{
				name:"平板电脑",
			},{
				name:"游戏交易",
			},{
				name:"家用电器",
			},{
				name:"玩具娱乐",
			},{
				name:"运动户外",
			},{
				name:"票务卡券",
			},{
				name:"电脑",
			}]
    },
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
    }
  })