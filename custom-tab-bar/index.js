// Component({
//   data: {
//     selected: 2,
//     color: "#6e6d6b",
//     selectedColor: "#1aaba8",
//     list: [{
//         pagePath: "/pages/index/index",
//         iconPath: "/images/nav/home-off.png",
//         selectedIconPath: "/images/nav/home-on-b.png",
//         text: "首页"
//       },
//       {
//         pagePath: "/pages/add/add",
//         iconPath: "/images/nav/add-b.png",
//         selectedIconPath: "/images/nav/add-b.png",
//         text: "发布"
//       },
//       {
//         pagePath: "/pages/my/my",
//         iconPath: "/images/nav/my-off.png",
//         selectedIconPath: "/images/nav/my-on-b.png",
//         text: "我的"
//       }
//     ]
//   },
//   attached() {},
//   methods: {
//     switchTab(e) {
//       const data = e.currentTarget.dataset
//       const url = data.path
//       wx.switchTab({
//         url
//       })
//       this.setData({
//         selected: data.index
//       })
//       console.log(this.data.selected == data.index)
//     }
//   }
// })