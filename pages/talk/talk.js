// pages/talk/talk.js
Page({
  data: {
    face: '(=･ω･=)',
    message: '还没做~',
    clock: '',
    total_micro_second: 60*60 * 1000
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  /* 毫秒级倒计时 */
  countdown: function () {
    var that = this;
    var total_micro_second = that.data.total_micro_second;
    // 渲染倒计时时钟 
    that.setData({
      clock: this.dateformat(total_micro_second)
    });

    if (total_micro_second <= 60*60*1000-10000) {
      that.setData({
        face: '╮(╯▽╰)╭',
        message: '算你厉害！然而 真的没做.....',
        clock: "00:00:00"
      });
      // timeout则跳出递归
      return;
    }
    setTimeout(function () {
      // 放在最后--
      that.setData({
        total_micro_second: total_micro_second-10
      });
      that.countdown();
    }
      , 10)
  },

  // 时间格式化输出，如3:25:19 86。每10ms都会调用一次
  dateformat: function (micro_second) {
    // 秒数
    var second = Math.floor(micro_second / 1000);
    // 小时位
    var hr = Math.floor(second / 3600);
    // 分钟位
    var min = Math.floor((second - hr * 3600) / 60);
    // 秒位
    var sec = (second - hr * 3600 - min * 60);// equal to => var sec = second % 60;
    // 毫秒位，保留2位
    var micro_sec = Math.floor((micro_second % 1000) / 10);
    return hr + " : " + min + " : " + sec + "." + micro_sec;
  },
  onShow: function () {
    var that = this;
    var timeout1 = setTimeout(function () {
      that.setData({
        face: '╮(╯▽╰)╭',
        message: '真的没做啦'
      })
    }, 2000)
    var timeout2 = setTimeout(function () {
      that.setData({
        face: '(╯-_-)╯~╩╩',
        message: '这么说你是不信咯'
      })
    }, 5000)
    var timeout3 = setTimeout(function () {
      that.setData({
        face: '(*ﾟДﾟ*) ',
        message: '还不点后退？！'
      })
    }, 8000)
    var timeout4 = setTimeout(function () {
      that.setData({
        face: '_(:з」∠)_',
        message: '好吧 看在你这么诚心的份上'
      })
    }, 11000)
    var timeout5 = setTimeout(function () {
      that.setData({
        face: 'o(*≥▽≤)ツ┏━┓',
        message: '我看你能不能等这么久'
      })
    }, 13000)
    var timeout6 = setTimeout(this.countdown, 13000)
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})