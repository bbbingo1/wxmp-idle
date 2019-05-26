// pages/add-detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [
      // {
      //   img: "/images/idea.png"
      // },
      // {
      //   img: "/images/Rush.png"
      // },
      // {
      //   img: "/images/Rush.png"
      // },
      // {
      //   img: "/images/Rush.png"
      // }
    ],
    imgs: [],
    title: "",
    descripe: '',
    price: '',
    type_index: 8,
    picker: ['数码产品', '服饰', '图书', '生活用品', '办公用品', '玩具乐器', '校内服务', '其他'],
  },
  //表单更改
  adInputChange: function(e) {
    let that = this;
    console.log(e)
    if (e.currentTarget.dataset.obj === "title") {
      that.setData({
        title: e.detail.value,
      })
    } else if (e.currentTarget.dataset.obj === "price") {
      that.setData({
        price: e.detail.value,
      })
    } else if (e.currentTarget.dataset.obj === "descripe") {
      that.setData({
        price: e.detail.value,
      })
    }
  },
  //类型选择
  PickerChange(e) {
    console.log(e);
    this.setData({
      type_index: e.detail.value
    })
  },
  //添加图片
  selectImage: function() {
    let that = this;
    wx.chooseImage({
      success: function(res) {
        res.tempFilePaths.forEach(function(item) {
          that.data.imgs.push({
            img: item
          })
        })
        that.setData({
          imgList: that.data.imgs
        })
        console.log(that.data.imgList)
      },
    })
  },
  // 删除图片
  deleteImg: function(e) {
    var imgList = this.data.imgList;
    var index = e.currentTarget.dataset.index;
    imgList.splice(index, 1);
    this.setData({
      imgList: imgList,
      imgs: imgList
    });
  },
  // 预览图片
  previewImg: function(e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var imgList = this.data.imgList.map(function(item) {
      return item.img;
    });

    wx.previewImage({
      //当前显示图片
      current: imgList[index],
      //所有图片
      urls: imgList
    })
  },

  submitForm() {
    // let 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})