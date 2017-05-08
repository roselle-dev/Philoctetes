// pages/talk/talk.js
Page({
  data:{
    face:'(=･ω･=)',
    message:'还没做~',
    clock:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    var that = this;
    var timeout = setTimeout(function(){
      that.setData({
        face:'╮(╯▽╰)╭',
        message:'真的没做啦'
      })
    },2000)
    var timeout = setTimeout(function(){
      that.setData({
        face:'(╯-_-)╯~╩╩',
        message:'这么说你是不信咯'
      })
    },5000)
    var timeout = setTimeout(function(){
      that.setData({
        face:'(*ﾟДﾟ*) ',
        message:'还不点后退？！'
      })
    },8000)
    var timeout = setTimeout(function(){
      that.setData({
        face:'_(:з」∠)_',
        message:'好吧 看在你这么诚心的份上'
      })
    },110000)
    var timeout = setTimeout(function(){
      that.setData({
        face:'(థ౪థ)',
        message:'我看你能不能等这么久'
      })
    },12000)
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})