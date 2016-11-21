//app.js
App({
  // onLaunch: function () {
  //   //调用API从本地缓存中获取数据
  //   var logs = wx.getStorageSync('logs') || []
  //   logs.unshift(Date.now())
  //   wx.setStorageSync('logs', logs)
  // },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo: null,
    foodList: [
      {
        id: 1,
        title: "黑胡椒意酱面",
        cost: 45,
        desc: "进口意大利通心粉制作，搭配有机番茄秘制酱汁。",
        icon: "https://fuss10.elemecdn.com/8/05/0b0f3719bf1c9c1673ed69e262888jpeg.jpeg",
        num: 0
      },
      {
        id: 2,
        title: "吉士意大利虾仁面",
        cost: 40,
        desc: "进口意大利通心粉制作，搭配进口地中海大虾仁。",
        icon: "https://fuss10.elemecdn.com/4/df/ff64bc5b06893a12aafb1e94f8b31jpeg.jpeg",
        num: 0
      },
      {
        id: 3,
        title: "牛排意大利面",
        cost: 38,
        desc: "进口意大利通心粉制作，搭配新鲜酱汁牛排和甜糯玉米。",
        icon: "https://fuss10.elemecdn.com/3/42/70aae8406958d22657c5772e2412ejpeg.jpeg",
        num: 0
      },
      {
        id: 4,
        title: "香炸鸡翅",
        cost: 12,
        desc: "有机食品，绿色农场放心肉源",
        icon: "https://fuss10.elemecdn.com/e/0e/df4f9d07b191d34ceddc3fedd88dcjpeg.jpeg",
        num: 0
      },
      {
        id: 5,
        title: "一品寿司",
        cost: 22,
        desc: "百分百手工，百分百口味，来自东海岸的问候。",
        icon: "https://fuss10.elemecdn.com/8/53/353cf146fc9cab79479efcfb6e88ajpeg.jpeg",
        num: 0
      },
      {
        id: 6,
        title: "水果拼盘",
        cost: 16,
        desc: "新鲜时蔬，源自生活的百味奇珍。",
        icon: "https://fuss10.elemecdn.com/0/b9/42b68495a09ec2e501ec3eaa36c6ejpeg.jpeg",
        num: 0
      },
      {
        id: 7,
        title: "巧手三明治",
        cost: 22,
        desc: "好吃不贵，明治选择。",
        icon: "https://fuss10.elemecdn.com/a/fe/0d647946855f76e9dcdfbedfcad61jpeg.jpeg",
        num: 0
      },
      {
        id: 8,
        title: "培根焗饭",
        cost: 26,
        desc: "好吃不解释，真的不解释。",
        icon: "https://fuss10.elemecdn.com/9/de/30676686cf98d88961eb69f1f3083jpeg.jpeg",
        num: 0
      }

    ]
    
  }
})