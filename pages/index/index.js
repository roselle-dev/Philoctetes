//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '开始聊天',
    content: 'The greatest project you\'ll ever work on is you!',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.showToast({
      title: '萨瓦迪卡',
      image: '../../images/icons/smile.png',
      duration: 2000
    });
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '首页'
    })
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    var contents = new Array();
    contents[0] = "Fading is true while flowering is past";
    contents[1] = "The greatest project you\'ll ever work on is you!";
    contents[2] = "Eternity is not a distance but a decision";
    contents[3] = "When love is not madness, it is not love";
    contents[4] = "While there is life there is hope.";
    contents[5] = "Nothing for nothing.";
    contents[6] = "Do what you say,say what you do ";
    contents[7] = "All things come to those who wait.";
    contents[8] = "Never,never,never,never give up";
    contents[9] = "Nothing seek,nothing find.";
    var random = Math.floor(Math.random() * 10);
    that.setData({
      content: contents[random]
    })
  },
  buyTicket: function () {
    var that = this;
    console.log(this.data.userInfo.nickName + '点击按钮，开始聊天');
    wx.navigateTo({
      url: '../talk/talk',
    })
  }
})
