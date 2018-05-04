// pages/barrage/barrage.js
Page({
  data: {
    menuBottom:0,
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
  setUp:function(){
    var that = this;
    var value = Math.abs(this.data.menuBottom)-200;
    console.log("bottom值:"+value);
    that.setData({
      menuBottom: value
    })
  }
})