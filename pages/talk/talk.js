// pages/talk/talk.js
var app = getApp();
var inputmsg = '';
var intId = null;
var allmsg = {
  index: 0,
  msgs: [{
    type: 1, //1:机器人回复,0:用户输入
    content: "> 连接成功",
    printlength: 0
  }, {
    type: 1,
    content: "> 你好 我童年时吃了毒苹果 每天总共只能讲300句话 后面的就听不到啦...",
    printlength: 0
  }]
};
Page({
  data: {
    toView: 'black',
    face: '(=･ω･=)',
    message: '还没做~',
    clock: '',
    total_micro_second: 60 * 60 * 1000,
    talkflag: false,
    msgList: [],
    printMsg: "",
    inputValue: ""
  },
  getAnswer: function () {
    var answer = "啊啊啊 你说什么呀？？？";
    allmsg.msgs[allmsg.msgs.length] = {
      type: 1,
      content: "> " + answer,
      printlength: 0
    }
  },
  send: function () {
    var that = this;
    allmsg.msgs[allmsg.msgs.length] = {
      type: 0,
      content: "< " + inputmsg,
      printlength: 0
    }
    this.getAnswer();
    intId = setInterval(() => {
      console.log("执行intervel");
      console.log(allmsg);
      console.log(this.data.msgList);
      if (allmsg.index < allmsg.msgs.length) {//有新的内容需要显示
        var templist = this.data.msgList;
        if (allmsg.msgs[allmsg.index].printlength == 0) {//新的一句
          allmsg.msgs[allmsg.index].printlength += 1;
          templist[templist.length] = {
            content: allmsg.msgs[allmsg.index].content.substring(0, allmsg.msgs[allmsg.index].printlength)
          }
        } else {//某一句打印中
          allmsg.msgs[allmsg.index].printlength += 1;
          templist[templist.length - 1].content = allmsg.msgs[allmsg.index].content.substring(0, allmsg.msgs[allmsg.index].printlength);
        }
        that.setData({
          msgList: templist,
          toView: 'black'
        });
        if (allmsg.msgs[allmsg.index].printlength == allmsg.msgs[allmsg.index].content.length) {//一句打印完了
          allmsg.index++;
        }
      } else {//全部完成
        clearInterval(intId);
      }
    }, 100);
  },
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          screenWidth: res.windowWidth,
          screenHeight: res.windowHeight
        });
      }
    })
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    var that = this;
    // 页面渲染完成
    if (intId != null) {
      clearInterval(intId);
    }
    //初始化allmsg，否则会被缓存 而page不会缓存导致越界
    allmsg = {
      index: 0,
      msgs: [{
        type: 1, //1:机器人回复,0:用户输入
        content: "> 连接成功",
        printlength: 0
      }, {
        type: 1,
        content: "> 你好 我童年时吃了毒苹果 每天总共只能讲300句话 后面的就听不到啦...",
        printlength: 0
      }]
    };
    intId = setInterval(() => {
      console.log("执行intervel");
      console.log(allmsg);
      console.log(this.data.msgList);
      if (allmsg.index < allmsg.msgs.length) {//有新的内容需要显示
        var templist = this.data.msgList;
        if (allmsg.msgs[allmsg.index].printlength == 0) {//新的一句
          allmsg.msgs[allmsg.index].printlength += 1;
          templist[templist.length] = {
            content: allmsg.msgs[allmsg.index].content.substring(0, allmsg.msgs[allmsg.index].printlength)
          }
        } else {//某一句打印中
          allmsg.msgs[allmsg.index].printlength += 1;
          templist[templist.length - 1].content = allmsg.msgs[allmsg.index].content.substring(0, allmsg.msgs[allmsg.index].printlength);
        }
        that.setData({
          msgList: templist,
          toView: 'black'
        });
        if (allmsg.msgs[allmsg.index].printlength == allmsg.msgs[allmsg.index].content.length) {//一句打印完了
          allmsg.index++;
        }
      } else {//全部完成
        clearInterval(intId);
      }
    }, 100);
  },
  /* 毫秒级倒计时 */
  countdown: function () {
    var that = this;
    var total_micro_second = that.data.total_micro_second;
    // 渲染倒计时时钟 
    that.setData({
      clock: this.dateformat(total_micro_second)
    });

    if (total_micro_second <= 60 * 60 * 1000 - 1000) {
      that.setData({
        face: '╮(╯▽╰)╭',
        message: '算你厉害！蛋酥 就是不跟你聊~',
        clock: "00:00:00",
        talkflag: true
      });
      //将用户名称存入缓存，下次如果一致则不再显示倒计时
      app.getUserInfo(function (userInfo) {
        wx.setStorage({
          key: "user",
          data: userInfo.nickName
        })
      })

      // timeout则跳出递归
      return;
    }
    setTimeout(function () {
      // 放在最后--
      that.setData({
        total_micro_second: total_micro_second - 10
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
    var loginName = "";
    var timeflag = true;
    app.getUserInfo(function (userInfo) {
      loginName = userInfo.nickName;
    })
    var storageName = wx.getStorageSync('user');
    console.log("loginname:" + loginName);
    console.log("sname" + storageName);
    if (storageName != null && storageName == loginName) {
      console.log("第二次登陆");
      timeflag = false;
      that.setData({
        talkflag: true
      });
    }
    if (timeflag) {
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
    } else {
      //进入真正聊天画面
    }
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  bindKeyInput: function (e) {
    inputmsg = e.detail.value
  }
})