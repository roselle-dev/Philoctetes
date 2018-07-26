// pages/storeHouse/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boxes: [
      1, 2, 3, 4, 5
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 10000,
    duration: 1000,
    info: {
      title: '小仓库的一角',
      content: '    书房暂时还没用起来 就先放这些东西了...都是国外的知名品牌。大致是水彩笔，橡皮泥，拼图，植绒画（类似神秘花园填色的），国际象棋，木板画，陶瓷杯子..可以通过闲鱼【roselle司】，或者公众号来了解详情。'
    }
  },
  indexChange: function(event) {
    console.log(event);
    var that = this;
    var newInfo = that.data.info;
    if (event.detail.current == 1) {
      newInfo={
        title: '植绒画',
        content: '    尺寸大概40cm*50cm的植绒画，自带画笔。两面都能进行填色~'
      }
    } else if (event.detail.current == 2){
      
    } else if (event.detail.current == 3) {
      
    } else if (event.detail.current == 4) {

    } else if (event.detail.current == 0) {

    }
    that.setData({
      info: newInfo
    })
  }
})