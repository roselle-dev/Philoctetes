//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
const colors = ['#FFD700', '#FFFF00', '#ADFF2F', '#008000', '#40E0D0', '#00BFFF', '#0000FF', '#9370DB', '#C71585','#800000', '#FF7F50', '#FFA500',];
//获取应用实例
var app = getApp()
Page({
  data: {
    triangles: [],
    times: 0,
    motto: '解解闷',
    content: 'The greatest project you\'ll ever work on is you!',
    userInfo: {},
    curtainTop: 0,
    labelTop: 100,
    spin: 0,
    array: [1, 2, 3, 4, 5, 6, 10, 12],
    index: 0,
  },
  bindViewTap: function() {
    try {
      var value = wx.getStorageSync('newWorld')
      if (value) {
        util.showFace('欢迎回来', '14');
        setTimeout(() => {
          wx.redirectTo({
            url: '../allInfo/allInfo'
          })
        }, 1000);
        return;
      }
    } catch (e) {
      util.showFace('遇到点问题', '18');
    }
    var that = this;
    var times = this.data.times;
    console.log("times:" + times);
    if (times == 0) {
      util.showFace('萨瓦迪卡', '11');
      that.setData({
        times: ++times
      })
    } else if (times == 1) {
      util.showFace('别点啦', '19');
      that.setData({
        times: ++times
      })
    } else if (times == 2) {
      util.showFace('求你别点啦', '18');
      that.setData({
        times: ++times
      })
    } else if (times == 3) {
      util.showFace('你知道后果吗！', '17');
      that.setData({
        times: ++times
      })
    } else if (times > 3) {
      util.showFace('打开新世界大门', '6');
      wx.setStorage({
        key: "newWorld",
        data: true
      })
      setTimeout(() => {
        wx.redirectTo({
          url: '../allInfo/allInfo'
        })
      }, 1000);
    }
  },
  labelTap: function() {
    let that = this;
    let newCurtainTop = Math.abs(that.data.curtainTop) - 100;
    let newlabelTop = 100;
    if (that.data.labelTop == -1) {
      newlabelTop = 100;
    } else {
      newlabelTop = -1
    }
    that.setData({
      curtainTop: newCurtainTop,
      labelTop: newlabelTop,
    })
  },
  closeTap: function() {
    var that = this;
    var newspin = that.data.spin;
    that.setData({
      spin: newspin + 180,
    })
    that.labelTap();
  },
  bindPickerChange: function(e) {
    console.log(e.detail.value);
    var that = this;
    let numarray = this.data.array;
    let newtriangles = this.data.triangles;
    //切的份数
    let pieces = numarray[e.detail.value];
    let count = 60 / pieces;
    for (let i = 0; i < pieces; i++) {
      for (let j = 0; j < count; j++) {
        newtriangles[i * count + j].color = colors[i];
      }
    }
    that.setData({
      index: e.detail.value,
      triangles: newtriangles,
    })
  },
  onShareAppMessage: function(res) {
    return {
      title: '一个有内涵的小程序',
      path: '/pages/index/index',
      imageUrl: '/images/pic/P.png',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },
  onLoad: function() {
    var that = this;
    var newtriangles = new Array();
    for (let i = 0; i < 60; i++) {
      newtriangles[i] = {
        id: i,
        rotate: i * 6,
        color: colors[0],
      }
      if (i == 59) {
        newtriangles[i] = {
          id: i,
          rotate: i * 6 - 6,
          color: colors[0],
        }
      }
    }
    that.setData({
      triangles: newtriangles
    })
    wx.cloud.callFunction({
      name: 'demo',
      data: {
        a: 1,
        b: 2,
      },
      success: function(res) {
        console.log(res.result) // 3
      },
      fail: console.error
    })
    wx.setNavigationBarTitle({
      title: '首页'
    })
    var contents = new Array();
    contents[0] = "Fading is true while flowering is past";
    contents[1] = "The greatest project you\'ll ever work on is you!";
    contents[2] = "Eternity is not a distance but a decision";
    contents[3] = "When love is not madness, it is not love";
    contents[4] = "While there is life there is hope.";
    contents[5] = "Nothing for nothing.";
    contents[6] = "Do what you say,say what you do ";
    contents[7] = "All things come to those who wait.";
    contents[8] = "Never,never,never,never give up";
    contents[9] = "Nothing seek,nothing find.";
    contents[10] = "The best thing to do first thing in the morning is go right back to sleep.";
    contents[11] = "People who say they’ll give 110% don’t understand how percentages work.";
    contents[12] = "The wheel turns, nothing is ever new.";
    contents[13] = "The best things in life are actually really expensive.";
    contents[14] = "There’s no such thing as waking up from a nightmare because the world is a nightmare.";
    contents[15] = "If you never believe in yourself, you’ll never let yourself down!";
    contents[16] = "If I’ve ever offended you I’m not sorry and it’s your fault.";
    contents[17] = "Monday hates you, too.";
    contents[18] = "Started from the bottom…still at the bottom.";
    contents[19] = "Happiness is temporary. Death is forever. Have a nice weekend.";
    contents[20] = "Pureness is not an attitude, it is one kind of satisfaction.";
    contents[21] = "Less matters less pain; less speech less offensiveness; less food less sickness; lessdesire less anxiety.";
    contents[22] = "Learn to Cherish!";
    contents[23] = "转角一般不会遇到爱，只会遇到乞丐。";
    contents[24] = "你以为只要长得漂亮就有男生喜欢？你以为只要有了钱漂亮妹子就自己贴上来了？你以为学霸就能找到好工作？我告诉你吧，这些都是真的！";
    contents[25] = "对今天解决不了的事情，也不要着急。因为明天也可能还是解决不了。";
    contents[26] = "当你觉得自己又丑又穷，一无是处时，别绝望，因为至少你的判断还是对的。";
    contents[27] = "年轻人嘛，现在没钱算什么，以后没钱的日子还多着呢。";
    contents[28] = "你总嫌有些人懒，说得好像你勤快了就真能干出什么大事儿一样。";
    contents[29] = "努力了这么久，但凡有点儿天赋，也该有些成功的迹象了。";
    contents[30] = "世上无难事只怕有钱人，物以类聚人以穷分。";
    contents[31] = "挣钱是一种能力，花钱是一种技术，我能力有限，技术却很高。";
    contents[32] = "只要你每天坚持自习，认真刻苦，态度端正，忍受孤独，最终的胜利肯定是属于那些考场上发挥好的人。";
    contents[33] = "上帝为你关上了一扇门，然后就去洗洗睡了。";
    contents[34] = "有些事不是努力就可以改变的，五十块的人民币设计的再好看，也没有一百块的招人喜欢。";
    contents[35] = "失恋的时候，许多年轻人以为整个世界都抛弃了自己，别傻了，世界根本就没需要过你。";
    contents[36] = "生活会让你苦上一阵子，等你适应以后，再让你苦上一辈子。";
    contents[37] = "除了有钱人，世上还有两种人：其一是省吃俭用买奢侈品装逼的，其二是省吃俭用也买不起奢侈品的。";
    contents[38] = "你并不是一无所有，你还有病啊！";
    contents[39] = "有些人感慨：自己岁数不小了，还没有成熟起来。其实你们已经成熟起来了，你们成熟起来就这样。";
    contents[40] = "今天一天过得不错吧？梦想是不是更远了？";
    contents[41] = "明明可以靠脸吃饭，你却要靠才华，这就是你跟明明的差距";
    contents[42] = "上帝给了你丑的外表跟低的智商，就是怕你不协调";
    contents[43] = "失败并不可怕，可怕的是你还相信这句话";
    contents[44] = "真正努力过的人，就会明白天赋的重要。";
    contents[45] = "有些人不是赢在了起跑线上，而是直接生在了终点。";
    contents[46] = "人作的程度不能超过自己的颜值。";
    contents[47] = "等忙完这一阵，就可以接着忙下一阵了。";
    contents[48] = "岁月是把杀猪刀，是针对那些好看的人，它对长得丑的人一点办法都没有。";
    contents[49] = "年轻的时候多吃些苦，这样老了吃苦才习惯。";
    contents[50] = "长得好看不能当饭吃，但是长得不好看真的会让人吃不下饭。";
    contents[51] = "盖茨休学创业成了世界富翁，但人家休的是哈佛大学。";
    contents[52] = "三十岁之前，过的很苦逼，要啥没啥，三十岁之后，之后，你就习惯了。";
    contents[53] = "失败是成功之母，但失败往往不孕不育。";
    contents[54] = "别人都有背景，而你只有背影。";
    contents[55] = "别再抱怨你此生找不到一个对的人，当初的数学选择题就四个，你也找不到对的答案啊！";
    contents[56] = "好人成佛需要九九八十一难，可是坏人只需要放下屠刀。";
    contents[57] = "没有你想不到，只有你做不到……";
    contents[58] = "有人说世上百分之九十九的事都能用钱解决，但他们没告诉你剩下的百分之一需要更多的钱。";
    contents[59] = "我没见过一个煤矿工人靠挖煤又快又多当上了煤老板。";
    contents[60] = "人都有幸福的权利，但少数人有幸福的能力。";
    contents[61] = "其实根本没有真正高冷的人，只不过人家暖的不是你。";
    contents[62] = "别动不动就把问题交给时间来证明，时间懒得理你这个烂摊子。";
    var random = Math.floor(Math.random() * 63);
    const db = util.getDB('dev-abd8fb');
    db.collection('sentences').where({
        flag: '1'
      })
      .get({
        success: function(res) {
          if (res.data.length > 0) {
            that.setData({
              content: res.data[0].text
            })
          }
        }
      })
    that.setData({
      content: contents[random]
    })
  },
  buyTicket: function() {
    wx.navigateTo({
      url: '../talk/talk'
    })
  },
  magicCube: function() {
    wx.navigateTo({
      url: '../cube/cube'
    })
  },
  opentest: function() {
    console.log("点击首页文字！");
  },
  storeHouse: function() {
    wx.navigateTo({
      url: '../storeHouse/index'
    })
  }
})