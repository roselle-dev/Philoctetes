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
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }],
    numbers2: [{
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }],
    numbers3: [{
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }],
    numbers4: [{
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }],
    numbers5: [{
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }, {
      number: "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
      margin: 0
    }]
  },
  doIt: function () {
    var difference = this.data.end - this.data.start;
    console.log("difference:" + difference);
    var randomResult = 0
    for (var i = 0; i < this.data.resultNum; i++) {
      randomResult = Math.floor(Math.random() * (difference + 1)) + parseInt(this.data.start);
      this.setNumber(i, randomResult);
    }
  },
  setNumber(index, result) {
    console.log("处理的index：" + index + "随机数：" + result);
    var that = this;
    var data = this.data.numbers1;
    if (index == 0) {
      data = this.data.numbers1;
    } else if (index == 1) {
      data = this.data.numbers2;
    } else if (index == 2) {
      data = this.data.numbers3;
    } else if (index == 3) {
      data = this.data.numbers4;
    } else if (index == 4) {
      data = this.data.numbers5;
    }
    var resultStr = "" + result;
    if (resultStr.length != 6) {
      for (var i = resultStr.length; i < 6; i++) {
        resultStr = "0" + resultStr;
      }
    }
    console.log("结果" + index + "为：" + resultStr);
    var singleList = resultStr.split(""); //数字切分 得到每一位的数字
    for (var i = 0; i < singleList.length; i++) {
      var j=0;
      while (j++ < 100) {
        var k = Math.floor(Math.random() * 9);//数字的位置
        var marginRes = parseInt(singleList[i]) * -45 + k * -450;
        if (data[6 - singleList.length + i].margin == marginRes) {
          continue;
        }
        data[6 - singleList.length + i].margin = marginRes;
      }
    }
    if (index == 0) {
      that.setData({
        numbers1: data
      })
    } else if (index == 1) {
      that.setData({
        numbers2: data
      })
    } else if (index == 2) {
      that.setData({
        numbers3: data
      })
    } else if (index == 3) {
      that.setData({
        numbers4: data
      })
    } else if (index == 4) {
      that.setData({
        numbers5: data
      })
    }

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
    return {
      title: '给别人开个奖吧',
      path: 'pages/lottery/base',
      imageUrl: '/images/icons/777.png',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})