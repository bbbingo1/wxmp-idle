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
    picker: ['食物', '服饰', '图书', '生活用品', '办公用品', '玩具乐器', '数码用品', '其他'],
    loadModal: false,
    load_text: "正在上传信息"
  },
  //表单更改
  adInputChange: function (e) {
    let that = this;
    // console.log(e)
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
        descripe: e.detail.value,
      })
    }
  },
  //类型选择
  PickerChange(e) {
    // console.log(e);
    this.setData({
      type_index: Number(e.detail.value) + 1
    })
  },
  //添加图片
  selectImage: function () {
    let that = this;
    wx.chooseImage({
      success: function (res) {
        res.tempFilePaths.forEach(function (item) {
          that.data.imgs.push({
            img: item
          })
        })
        that.setData({
          imgList: that.data.imgs
        })
        // console.log(that.data.imgList)
      },
    })
  },
  // 删除图片
  deleteImg: function (e) {
    var imgList = this.data.imgList;
    var index = e.currentTarget.dataset.index;
    imgList.splice(index, 1);
    this.setData({
      imgList: imgList,
      imgs: imgList
    });
  },
  // 预览图片
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var imgList = this.data.imgList.map(function (item) {
      return item.img;
    });

    wx.previewImage({
      //当前显示图片
      current: imgList[index],
      //所有图片
      urls: imgList
    })
  },

  //发布提交
  submitForm() {
    wx.showLoading({
      title: '上传信息',
    })
    let that = this;
    let goods_name = that.data.title;
    let prices = that.data.price;
    let describe = that.data.descripe;
    let goods_type = that.data.type_index
    if (that.data.title && that.data.descripe && that.data.price && that.data.type_index) {
      wx.request({
        url: 'https://liyan6987.cn/goods/upload_imgs',
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          goods_name: goods_name,
          prices: prices,
          describe: describe,
          goods_type: goods_type
        },
        success(res) {
          console.log(res)
          //发送失败：未登录等原因
          if (res.data.status == false) {
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              image: '/images/close.png',
              duration: 2000,
            })
          }
          //发送商品信息成功
          else {
            //无图片
            if (that.data.imgList.length != 0) {
              wx.showToast({
                title: '缺少图片',
                icon: 'success',
                duration: 2000,
              })
            }
            //有图片
            else {
              wx.showLoading({
                title: '上传图片',
              })
              let url = 'https://liyan6987.cn/goods/publish_goods'
              let filePaths = that.data.imgList.map(function (key) {
                key.img
              });//图片路径数组
              let successUp = 0;//成功总数
              let failUp = 0;//失败总数
              let length = filePaths.length;//图片数目
              let index = 0;//正在上传的第几个
              wx.uploadFile({
                url: url,
                filePaths: filePaths[index],
                name: 'file',

              })
            }
          }
        },
        fail(res) {
          wx.showToast({
            title: "发布失败",
            icon: 'none',
            image: '/images/close.png',
            duration: 2000,
          })
        }

      })
    } else {
      wx.showToast({
        title: '输入错误',
        icon: 'none',
        image: '/images/close.png',
        duration: 2000,
      })
    }
    // let formData = new FormData();
    // let imgs = that.data.imgList.map(function (key) {
    //   key.img
    // });
    // formData.append("file", imgs);
    // formData.append("goods_name", that.data.title);
    // formData.append("prices", that.data.price);
    // formData.append("describe", that.data.descripe);
    // formData.append("goods_type", that.data.type_index);
    // wx.request({
    //   url: 'https://liyan6987.cn/auth/login',
    //   data: formData,
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded',
    // 'cookie':wx.getStorageSync("sessionid")//读取cookie 
    // },
    //   success(res) {
    //     wx.showToast({
    //       title: '发布成功',
    //       icon: 'success',
    //       duration: 2000,
    //       success:function(){

    //       }
    //     })
    //   }
    // })
  },
  //显示加载
  loadModal() {
    this.setData({
      loadModal: true
    })
    setTimeout(() => {
      this.setData({
        loadModal: false
      })
    }, 2000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})