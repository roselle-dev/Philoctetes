// pages/barrage/barrage.js
var inter = null;
Page({
  data: {
    menuBottom: -214,
    textColor: '#FFF',
    textSize: 24,
    text: '点击文字设置您的弹幕',
    bottom: 50,
    limit: 100,
    speed: 20
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: ''
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#000000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  setUp: function () {
    var that = this;
    console.log(inter);
    if (inter != null) {
      clearInterval(inter);
    }
    var value = Math.abs(this.data.menuBottom) - 214;
    console.log("bottom值:" + value);
    that.setData({
      menuBottom: value
    })
  },
  back:function(){
    if (inter != null) {
      clearInterval(inter);
    }
    wx.navigateBack({
      delta: 1
    })
  },
  textIn: function (e) {
    var that = this;
    that.setData({
      text: e.detail.value
    })
  },
  colorIn: function (e) {
    var that = this;
    var reg = /^([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
    if (reg.test(e.detail.value)) {//符合颜色的表达式
      that.setData({
        textColor: "#" + e.detail.value
      })
    }
  },
  sizeChange: function (e) {
    var that = this;
    that.setData({
      textSize: e.detail.value
    })
  },
  colorOne: function () {
    var that = this;
    that.setData({
      textColor: "#FF6666"
    })
  },
  colorTwo: function () {
    var that = this;
    that.setData({
      textColor: "#FFFF66"
    })
  },
  colorThree: function () {
    var that = this;
    that.setData({
      textColor: "#99CCFF"
    })
  },
  colorFour: function () {
    var that = this;
    that.setData({
      textColor: "#99CC33"
    })
  },
  colorFive: function () {
    var that = this;
    that.setData({
      textColor: "#FF33CC"
    })
  },
  start: function () {
    var that = this;
    var callText = this.data.text;
    var fontSize = this.data.textSize;
    var speed = this.data.speed;
    var textlen = callText.length;
    var sHeight = 667;
    wx.getSystemInfo({
      success: function (res) {
        sHeight = res.screenHeight;
      }
    })
    var bottomDistance = (fontSize+20) / 10 * (textlen / 2 + 1);
    console.log("计算出来的距离为:" + bottomDistance);
    var value = Math.abs(this.data.menuBottom) - 214;
    that.setData({
      bottom: -bottomDistance,
      limit: bottomDistance,
      menuBottom: value
    })
    inter = setInterval(() => {
      var that = this;
      var speed = this.data.speed;
      var limit = this.data.limit;
      var now = this.data.bottom;
      console.log(now + "-" + limit);
      if (now <= limit + 100) {
        that.setData({
          bottom: now + speed,
          display: 'none'
        })
      } else {//超出范围，重置位置
        that.setData({
          bottom: -limit,
          display: 'none'
        })
      }
    }, 1000)
  }
})