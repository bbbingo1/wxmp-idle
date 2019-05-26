Page({
	properties: {
		dataprop:{
			type:Object
		}
	},
    data: {
      TabCur: 0,
			scrollLeft:0,
			navList:[{
				name:"附近",
			},{
					name:"推荐",
			},{
				name:"食品",
			},{
				name:"数码用品",
			},{
				name:"服饰",
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
			console.log(this.data.dataprop);
			this.setData({
				dataList: this.data.dataprop
			})
	},
    tabSelect(e) {
			console.log(this.properties);
			this.setData({
				dataList: this.properties.dataprop
			})
			console.log(this.data.dataList);
			console.log(e);
      this.setData({
        TabCur: e.currentTarget.dataset.id,
				scrollLeft: (e.currentTarget.dataset.id-1)*60,
				dataSet: this.data.dataList[this.data.navList[e.currentTarget.dataset.id]]
			})
		},
tapCard: function (event) {
	const cardId =  event.detail.card_id
	// code here.
	console.log(event);
},   
  })