//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '开始聊天',
    helloword: 'The greatest project you\'ll ever work on is you!',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
  },
  buyTicket: function () {
    var that = this;
    console.log(this.data.userInfo.nickName + '点击按钮，开始聊天');
    wx.navigateTo({
      url: '../talk/talk',
    })
  }
})
