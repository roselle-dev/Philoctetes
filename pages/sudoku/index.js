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
    wx.showToast({
      title: '到底啦!!!',
      image: '../../images/icons/smile.png',
      duration: 2000
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  example: function () {
    var that = this;
    var problem = [9, 1,"", 4,"" ,"", "", "", 3,"", 2, 7, "", "", "", "", "", "", "", "", 3, "", 1, "", "", 6, 8, 7, "", "", "", 4, 3,
      6, 1, 9, 3, 9, 5, 8, 6, 1, 4, 2, 7, 1, 6, 4, 2, 7, "", "", "", 5, 5, 4, "", "", 9, "", 3, "", "", "", "", "", "", "",
      "", 1, 5, "", 8, "", "", "", "", 4, "", 9, 2];
    that.setData({
      p: problem
    })

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
    if (value != '1' && value != '2' && value != '3' && value != '4' && value != '5' && value != '6' && value != '7' && value != '8' && value != '9' && value != '') {
      wx.showToast({
        title: '请输入1-9数字',
        image: '../../images/icons/alarm.png',
        duration: 2000
      });
      return "";
    } else {
      that.setData({
        p: problem
      })
      return value;
    }
  },
  /**
   * 生成答案
   */
  solve: function () {
    console.log("调用solve方法!");
    var that = this;
    var problem = that.data.p;
    for (var i = 0; i < problem.length; i++) { //将输入数据转化，未填写的添0；填写的转为数字
      if (problem[i] == "") {
        problem[i] = 0;
      } else {
        problem[i] = Number(problem[i]);
      }
    }


    while (true) {
      if (!this.init(problem)) {
        wx.showToast({
          title: '初始化问题失败啦',
          image: '../../images/icons/alarm.png',
          duration: 2000
        });
      }
      console.log("初始化问题成功");
      for (var i = 0; i <= 81 * 4; i++) {
        S[i] = 0;
        L[i] = i - 1;
        R[i] = i + 1;
        U[i] = i;
        D[i] = i;
        nCol[i] = 0;
      }
      L[0] = 81 * 4;
      R[81 * 4] = 0;
      cnt = 81 * 4;
      for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
          if (map[i][j] != 0) {
            var k = map[i][j];
            for (var u = 1; u <= 4; u++) {
              L[cnt + u] = cnt + u - 1;
              R[cnt + u] = cnt + u + 1;
              nRow[cnt + u] = 100 * i + 10 * j + k;
            }
            L[cnt + 1] = cnt + 4;
            R[cnt + 4] = cnt + 1;
            head[i][j][k] = cnt + 1;
            this.Ins_node((i - 1) * 9 + j, cnt + 1);// （c,cnt），第c格有一个数字
            this.Ins_node(81 + (i - 1) * 9 + k, cnt + 2);// 第x行有y，如82，则91-81=10，第2行有1
            this.Ins_node(81 * 2 + (j - 1) * 9 + k, cnt + 3);// 第x列有y，如172,172-162=10，第2列有1
            this.Ins_node(81 * 3 + (this.subgrid(i, j) - 1) * 9 + k, cnt + 4);// 第x宫有y。
            cnt += 4;
          } else {
            for (var k = 1; k <= 9; k++) {
              for (var u = 1; u <= 4; u++) {
                L[cnt + u] = cnt + u - 1;
                R[cnt + u] = cnt + u + 1;
                nRow[cnt + u] = 100 * i + 10 * j + k;
              }
              L[cnt + 1] = cnt + 4;
              R[cnt + 4] = cnt + 1;
              head[i][j][k] = cnt + 1;
              this.Ins_node((i - 1) * 9 + j, cnt + 1);
              this.Ins_node(81 + (i - 1) * 9 + k, cnt + 2);
              this.Ins_node(81 * 2 + (j - 1) * 9 + k, cnt + 3);
              this.Ins_node(81 * 3 + (this.subgrid(i, j) - 1) * 9 + k, cnt + 4);
              cnt += 4;
            }
          }
        }
      }
      console.log("创建链表成功");
      var k = 0;
      for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
          console.log("map[i][j]:"+map[i][j]+"-k:"+k+"-i:"+i+"-j:"+j);
          if (map[i][j] != 0) {
            k++;
            this.Remove(nCol[head[i][j][map[i][j]]]);
            for (var u = R[head[i][j][map[i][j]]]; u != head[i][j][map[i][j]]; u = R[u]) {
              console.log("u:" + u + "-head:" + head[i][j][map[i][j]]);
              this.Remove(nCol[u]);
            }
          }
        }
      }
      var flag = this.dfs(k + 1);
      if (flag) {
        console.log("solved!");
        var index=0;
        for(var i=1;i<10;i++){
          for(var j=1;j<10;j++){
            problem[index]=map[i][j];
            index++;
          }
        }
        that.setData({
          p: problem
        })
        wx.showToast({
          title: '答案出来啦！',
          icon: 'success',
          duration: 2000
        })
        break;
      }else{
        wx.showToast({
          title: '你肯定写错了！',
          image: '../../images/icons/alarm.png',
          duration: 2000
        });
        for(var i=0;i<problem.length;i++){
          problem[i]="";
        }
        that.setData({
          p: problem
        })
        break;
      }
    }
  },
  /**
   * 初始化
   */
  init: function (p) {
    console.log("调用init方法");
    if (p.length != 81) {
      return false;
    } else {
      var k = 0;
      for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
          map[i][j] = p[k++];
        }
      }
      return true;
    }
  },
  /**
	 * 计算map[i][j]为第几宫:1 2 3 4 5 6 7 8 9
	 * 
	 * @param i
	 * @param j
	 * @return
	 */
  subgrid: function (i, j) {
    i--;
    j--;
    var g = (parseInt(i / 3)) * 3 + (parseInt(j / 3) + 1);
    return g;
  },
  /**
   * 加入链表
	 * @param c
	 * @param cnt:当前节点
	 */
  Ins_node: function (c, cnt) {
    U[D[c]] = cnt;
    D[cnt] = D[c];
    U[cnt] = c;
    D[c] = cnt;
    S[c]++;
    nCol[cnt] = c;
  },
  /**
   * 选中节点后的移除操作（移除所在行，及所在行元素列重复的行）
   */
  Remove: function (c) {
    console.log("remove"+c);
    L[R[c]] = L[c];
    R[L[c]] = R[c];
    for (var i = D[c]; i != c; i = D[i]) {
      for (var j = R[i]; j != i; j = R[j]) {
        U[D[j]] = U[j];
        D[U[j]] = D[j];
        S[nCol[j]]--;
      }
    }
  },
  /**
   * 恢复节点（因它删除的节点也一并恢复）
   */
  resume: function (c) {
    console.log("resume:"+c);
    for (var i = U[c]; i != c; i = U[i]) {
      for (var j = L[i]; j != i; j = L[j]) {
        U[D[j]] = D[U[j]] = j;
        S[nCol[j]]++;
      }
    }
    L[R[c]] = R[L[c]] = c;
  },
  /**
   * 核心方法 dancing links
   */
  dfs: function (k) {
    if(k==breakflag){
      return false;
    }else{
      breakflag=k;
    }
    console.log("dfs"+k);
    if (k > 81) {
      return true;
    }
    var c = 999999;
    var minnum = 999999;
    for (var i = R[0]; i != 0; i = R[i]) {
      if (S[i] == 0) {
        return false;
      }
      if (S[i] < minnum) {
        minnum = S[i];
        c = i;
      }
    }
    this.Remove(c);
    for (var i = D[c]; i != c; i = D[i]) {
      var temp = nRow[i];
      map[parseInt(temp / 100)][(parseInt(temp / 10)) % 10] = temp % 10;
      for (var j = R[i]; j != i; j = R[j]) {
        this.Remove(nCol[j]);
      }
      if (this.dfs(k + 1)) {
        return true;
      }
      for (var j = L[i]; j != i; j = L[j]) {
        this.resume(nCol[j]);
      }
    }
    this.resume(c);
    return false;
  }

})

var maxr = 9 * 9 * 9 + 10;
var maxc = 9 * 9 * 4 + 10;
var L = new Array(maxc + maxr * 5);
var R = new Array(maxc + maxr * 5);
var U = new Array(maxc + maxr * 5);
var D = new Array(maxc + maxr * 5);
var S = new Array(maxc);
var nRow = new Array(maxc + maxr * 5);
var nCol = new Array(maxc + maxr * 5);
var head = new Array(10);
for (var i = 0; i < 10; i++) {
  head[i] = new Array(10);
  for (var j = 0; j < 10; j++) {
    head[i][j] = new Array(10);
  }
}
var cnt;
var map = new Array(10);
for (var i = 0; i < 10; i++) {
  map[i] = new Array(10);
}
var breakflag = 999999;