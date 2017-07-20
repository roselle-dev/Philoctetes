// pages/sudoku/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    p: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '数独'
    })
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

  },
  /**
   * 输入检查
   */
  check: function (event) {
    var that = this;
    var problem = this.data.p;
    var value = event.detail.value;
    var id = event.currentTarget.id;
    problem[Number(id)] = value;
    if (value != '1' && value != '2' && value != '3' && value != '4' && value != '5' && value != '6' && value != '7' && value != '8' && value != '9') {
      wx.showToast({
        title: '请输入1-9数字',
        image: '../../images/icons/alarm.png',
        duration: 2000
      });
      return "";
    } else {
      that.setData({
        p: problem
      })
      return value;
    }
  },
  /**
   * 生成答案
   */
  solve: function () {
    var that = this;
    var problem = that.data.p;
    console.log(problem);
    console.log(head);
    console.log(this.init(problem));
  },

  init: function (p) {
    if (p.length != 81) {
      return false;
    } else {
      var k = 0;
      for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
          map[i][j] = p[k++];
        }
      }
      return true;
    }
  }

})

var maxr = 9 * 9 * 9 + 10;
var maxc = 9 * 9 * 4 + 10;
var L = new Array(maxc + maxr * 5);
var R = new Array(maxc + maxr * 5);
var U = new Array(maxc + maxr * 5);
var D = new Array(maxc + maxr * 5);
var S = new Array(maxc);
var nRow = new Array(maxc + maxr * 5);
var nCol = new Array(maxc + maxr * 5);
var head = new Array(10);
for (var i = 0; i < 10; i++) {
  head[i] = new Array(10);
  for (var j = 0; j < 10; j++) {
    head[i][j] = new Array(10);
  }
}
var cnt;
var map = new Array(10);
for (var i = 0; i < 10; i++) {
  map[i] = new Array(10);
}