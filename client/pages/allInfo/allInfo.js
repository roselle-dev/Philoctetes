var util = require('../../utils/util.js')
const locheight_F = 130;
Page({
  data: {
    vw: [100, 100, 100, 100, 100, 100, 100, 100],
    vh: [25, 25, 25, 25, 25, 25, 25, 25],
    flag: [false, false, false, false, false, false, false, false],
    bigTitle: {
      Title: 78,
      titleBorder: 3
    },
    locAttr: {
      locheight: 0,
      locBorder: 0
    },
    locationFlag: true,
    locInfo: {
      latitude: 0,
      longitude: 0,
      accuracy: 0,
      altitude: 0
    }
  },
  onLoad: function (options) {

  },
  touch: function (e) {
    console.log(e);
    var that = this;
    var target = e.currentTarget.id;
    var newVw = this.data.vw;
    var newVh = this.data.vh;
    var flags = this.data.flag;
    for (var i = 0; i < newVh.length; i++) {
      if (i == target - 1) {//当前按住的方块
        newVh[i] = 100;
        flags[i] = true;
      } else {
        newVh[i] = 0;
        flags[i] = false;
      }
    }
    console.log('touch');
    console.log(newVh);
    that.setData({
      vh: newVh,
      flag: flags,
      bigTitle: {
        Title: 0,
        titleBorder: 0
      }
    })
  },
  tap: function () {
    util.showFace('别点啦，没用的', '19');
  },
  getLoc: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res);
        that.setData({
          locationFlag: true,
          locInfo: {
            latitude: res.latitude,
            longitude: res.longitude,
            accuracy: res.accuracy,
            altitude: res.altitude
          },
          locAttr: {
            locheight: locheight_F,
            locBorder: 1
          }
        })
      }
    })
  },
  backInit: function () {
    var that = this;
    var newVh = this.data.vh;
    var flags = this.data.flag;
    for (var i = 0; i < newVh.length; i++) {
      newVh[i] = 25;
      flags[i] = false;
    }
    that.setData({
      vh: newVh,
      flag: flags,
      locAttr: {
        locheight: 0,
        locBorder: 0
      },
      bigTitle: {
        Title: 78,
        titleBorder: 3
      }
    })
  },
  showMap: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res);
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  toIndex: function () {
    console.log("回到首页");
    wx.switchTab({
      url: '../index/index'
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

  }
})