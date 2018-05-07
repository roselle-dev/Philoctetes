// pages/barrage/barrage.js
Page({
  data: {
    menuBottom:0,
    textColor:'#FFF',
    textSize:24,
    text:'点击文字设置您的弹幕',
    bottom:-1
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
  },
  textIn:function(e){
    var that = this;
    that.setData({
      text: e.detail.value
    })
  },
  colorIn:function(e){
    var that = this;
    var reg = /^([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
    if(reg.test(e.detail.value)){//符合颜色的表达式
      that.setData({
        textColor: "#"+e.detail.value
      })
    }
  },
  sizeChange:function(e){
    var that = this;
    that.setData({
      textSize: e.detail.value
    })
  },
  colorOne:function(){
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
  start:function(){
    this.interval = setInterval()
  }
})