// pages/about/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ds: 'https://thumbnail0.baidupcs.com/thumbnail/c9b0973096466e0f21049b65b821665c?fid=2036131095-250528-766731574654932&time=1514516400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-6DYchOcJIQG2SH6zkQ9ykPoQ3ck%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=8406564770577185065&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
    gzh: 'https://thumbnail0.baidupcs.com/thumbnail/e48e3455f411d7bd2efbaea805ad1c7e?fid=2036131095-250528-357127987570957&time=1514516400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-%2BOq2HvQ0LK9wFf%2BC47RcQRV04Ks%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=8406588449575104343&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video'
  },
  previewImage: function (e) {
    wx.previewImage({
      urls: ['https://thumbnail0.baidupcs.com/thumbnail/e48e3455f411d7bd2efbaea805ad1c7e?fid=2036131095-250528-357127987570957&time=1514516400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-%2BOq2HvQ0LK9wFf%2BC47RcQRV04Ks%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=8406588449575104343&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video']
      // 需要预览的图片http链接  使用split把字符串转数组。不然会报错  
    })
  },
  previewImage2: function (e) {
    wx.previewImage({
      urls: ["https://thumbnail0.baidupcs.com/thumbnail/c9b0973096466e0f21049b65b821665c?fid=2036131095-250528-766731574654932&time=1514516400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-6DYchOcJIQG2SH6zkQ9ykPoQ3ck%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=8406564770577185065&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video"]
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