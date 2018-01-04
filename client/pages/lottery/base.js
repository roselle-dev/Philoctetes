// pages/lottery/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    primarySize: 'default',
    disabled: false,
    resultNum: 1,
    start: 0,
    end: 999999,
    numbers1: [{
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }],
    numbers2: [{
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }],
    numbers3: [{
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }],
    numbers4: [{
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }],
    numbers5: [{
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }, {
      number: "0123456789",
      margin: 0
    }]
  },
  doIt: function () {
    var oneTurn = "1234567890";
    var numbers1 = this.data.numbers1;
    var that = this;
    that.setData({
      number1: number1 + oneTurn + oneTurn,
      margin1: -180 + (-450)
    })
  },
  radioChange: function (e) {
    var that = this;
    that.setData({
      resultNum: e.detail.value
    })
  },
  startNum: function (e) {
    var that = this;
    var startNum = e.detail.value;
    var flag = isNaN(startNum);
    if (flag) { //输入并不是数字
      wx.showToast({
        title: '请输入数字',
        image: '../../images/icons/alarm.png',
        duration: 2000
      });
      return this.data.start;
    } else if (startNum % 1 != 0) {
      wx.showToast({
        title: '抽奖哪来小数点！',
        image: '../../images/icons/angry.png',
        duration: 2000
      });
      return this.data.start;
    } else {
      that.setData({
        start: startNum
      })
    }
  },
  endNum: function (e) {
    var that = this;
    var endNum = e.detail.value;
    var flag = isNaN(endNum);
    if (flag) { //输入并不是数字
      wx.showToast({
        title: '请输入数字',
        image: '../../images/icons/alarm.png',
        duration: 2000
      });
      return this.data.end;
    } else if (endNum % 1 != 0) {
      wx.showToast({
        title: '抽奖哪来小数点！',
        image: '../../images/icons/angry.png',
        duration: 2000
      });
      return this.data.end;
    } else {
      that.setData({
        end: endNum
      })
    }
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