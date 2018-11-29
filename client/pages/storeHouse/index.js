var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boxes: [
      1, 2, 3, 4, 5
    ],
    goods: [],
    fileList: [],
    indicatorDots: true,
    autoplay: true,
    interval: 10000,
    duration: 1000,
    info: {
      title: '小仓库的一角',
      content: '    书房暂时还没用起来 就先放这些东西了...'
    }
  },
  onLoad: function(options) {
    var that = this;
    const db = util.getDB('dev-abd8fb');
    console.log(db);
    let goods = [];
    let picList = new Array();
    db.collection('goods').limit(10).get().then(res => {
      goods = res.data;
      console.log(goods);
      that.setData({
        goods: goods,
      })
      for (let i = 0; i < goods.length; i++) {
        picList[i] = goods[i].picture;
      }
      wx.cloud.getTempFileURL({
        fileList: picList,
        success: res => {
          that.setData({
            fileList: res.fileList,
          })
        },
        fail: err => {
          console.log("error");
        }
      })
    })
  },
  indexChange: function(event) {
    var that = this;
    var newInfo = that.data.info;
    newInfo = {
      title: that.data.goods[event.detail.current].title,
      content: that.data.goods[event.detail.current].description,
    }
    that.setData({
      info: newInfo
    })
  }
})