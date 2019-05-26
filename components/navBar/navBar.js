Component({
	properties: {
		dataprop:{
			type:Object,
			observer: function(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
				// 通常 newVal 就是新设置的数据， oldVal 是旧数据
				this.setData({
					dataList: this.properties.dataprop,
					dataSet: this.data.dataList['nearby'] //初始化页面的列表
				})
     }
		}
	},
    data: {
      TabCur: 0,
			scrollLeft:0,
			navList:[{
        name:"附近",
        Egname:"nearby"
    },{
        name:"推荐",
        Egname:"Recommend"
    },{
        name:"食品",
        Egname:"food"
    },{
        name:"数码用品",
        Egname:"Electronics"
    },{
        name:"服饰",
        Egname:"Clothes"
    },{
        name:"手机",
        Egname:"mobiles"
    },{
        name:"图书",
        Egname:"book"
    },{
        name:"二手车",
        Egname:"car"
    },{
        name:"平板电脑",
        Egname:"TabletPC"
    },{
        name:"游戏交易",
        Egname:"Game"
    },{
        name:"家用电器",
        Egname:"HouseholdElectricAppliances"
    },{
        name:"玩具娱乐",
        Egname:"Toys"
    },{
        name:"运动户外",
        Egname:"Outdoorsport"
    },{
        name:"票务卡券",
        Egname:"Ticketing"
    },{
        name:"电脑",
        Egname:""
    }],
			brick_option:{
				backgroundColor:'#000',
				fontColor:'#333',
				icon:{
						fill:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558804821537&di=8ee6235288fcda4f283e7c00b6559afd&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fcf3f35b88beb7236f6fcdb6a9c2f0729a0a1b4313911-ie3tVL_fw658',
						default:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558849679034&di=55382fff9d2259fd206e6250f34407d2&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F17%2F04%2F14%2F39f94def7f06c8d438deff42a846ce27.jpg',
				}
		},
		dataList:{
				nearby:[],
				Recommend:[],
				food:[],
				Electronics:[],
				Clothes:[],
				mobiles:[],
				book:[],
				car:[],
				TabletPC:[],
				Game:[],
				HouseholdElectricAppliances:[],
				Toys:[],
				Outdoorsport:[],
				Ticketing:[],
				Computer:[]
		},  
		dataSet:[
				{
						id: '1',
						content:
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
						backgroundColor: '#fff',
						time: 1533106010,
						likedCount: 0,
						liked: false,
						user: {
							username: 'Minya Chan',
							userId: '1'
						},
						images: [
							 '../../images/pig.jpg'
						 ]
					},
					{
						id: '2',
						content:
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
						backgroundColor: '#fff',
						time: 1533106010,
						likedCount: 0,
						liked: false,
						user: {
							username: 'Minya Chan',
							userId: '1'
						},
						images: [
							 '../../images/pig.jpg'
						 ]
					},
					{
						id: '1',
						content:
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
						backgroundColor: '#fff',
						time: 1533106010,
						likedCount: 0,
						liked: false,
						user: {
							username: 'Minya Chan',
							userId: '1'
						},
						images: [
							 '../../images/pig.jpg'
						 ]
					},
					{
						id: '1',
						content:
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
						backgroundColor: '#fff',
						time: 1533106010,
						likedCount: 0,
						liked: false,
						user: {
							username: 'Minya Chan',
							userId: '1'
						},
						images: [
							 'pic_url', 'pic_url', 'pic_url'
						 ]
					}
				]
		},
		    /**
     * 生命周期函数--监听页面加载
     */
    ready: function (options) {
	},
	methods:{
		tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
				scrollLeft: (e.currentTarget.dataset.id-1)*60,
				dataSet: this.data.dataList[this.data.navList[e.currentTarget.dataset.id].Egname]
			})
		},
		tapCard: function (event) {
			const cardId =  event.detail.card_id
			console.log(event);
			// code here.
			var that =  this;
			console.log(that.data.dataSet)
			wx.navigateTo({
				url: "/pages/goods-detail/index?goods_id=" + that.data.dataSet[event.detail.card_id - 1].id
			  });
		},   
	},
  })