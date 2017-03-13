// pages/joke/index.js
Page({
  data:{
    jokeList:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
      url: 'https://japi.juhe.cn/joke/content/text.from',
      data: {
        key:'242e8049e4a838a7b809970403809574',
        page:'1',
        pagesize:'20'
      },
      method: 'GET', 
      success: function(res){
        console.log(res.data);
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})