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
    }else{
      that.setData({
        p: problem
      })
      return value;
    }
  },
  /**
   * 生成答案
   */
  solve:function(){
    var that = this;
    var problem = that.data.p;
    console.log(problem);
  }
})