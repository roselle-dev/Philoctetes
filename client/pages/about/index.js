// pages/about/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ds: '../../images/pic/sq.png',
    gzh: '../../images/pic/code.jpg'
  },
  previewImage: function (e) {
    wx.previewImage({
      urls: ['https://img2.ph.126.net/rgwC2j8kDkFjIy9EYIA5sw==/2596888135152226982.jpg']
      // 需要预览的图片http链接  使用split把字符串转数组。不然会报错  
    })
  },
  previewImage2: function (e) {
    wx.previewImage({
      urls: ["http://img2.ph.126.net/6iU5xuxrsfAz_HmcmBTdkw==/1282962943866884198.png"]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '关于我'
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

  }
})