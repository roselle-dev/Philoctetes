//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '解解闷',
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
  onShareAppMessage: function (res) {
    return {
      title: '一个有内涵的小程序',
      path: '/pages/index/index',
      imageUrl: '/images/pic/P.png',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '首页'
    })
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      console.log(userInfo);
      that.setData({
        userInfo: userInfo
      })
    })
    wx.request({
      url: config.service.host + "/weapp/everyday",
      success: function (result) {
        var list = result.data.data;
        console.log(list);
        if (list.length > 0) {
          var sentence = list[0].text;
          that.setData({
            content: sentence
          })
        }
      },
      fail: function (err) {
        that.setData({
          content: "Nothing seek,nothing find."
        })
      }
    })
    // var contents = new Array();
    // contents[0] = "Fading is true while flowering is past";
    // contents[1] = "The greatest project you\'ll ever work on is you!";
    // contents[2] = "Eternity is not a distance but a decision";
    // contents[3] = "When love is not madness, it is not love";
    // contents[4] = "While there is life there is hope.";
    // contents[5] = "Nothing for nothing.";
    // contents[6] = "Do what you say,say what you do ";
    // contents[7] = "All things come to those who wait.";
    // contents[8] = "Never,never,never,never give up";
    // contents[9] = "Nothing seek,nothing find.";
    // var random = Math.floor(Math.random() * 10);
    // that.setData({
    //   content: contents[random]
    // })
  },
  buyTicket: function () {
    wx.navigateTo({
      url: '../talk/talk'
    })
  },
  opentest: function () {
    // var that = this;
    // wx.request({
    //   url: config.service.host+"/weapp/everyday",
    //   success:function(result){
    //     console.log(result);
    //   },
    //   fail:function(err){
    //     that.setData({
    //       content: "Nothing seek,nothing find."
    //     })
    //   }
    // })
    // wx.navigateTo({
    //   url: '../demo/index'
    // })
  }
})
