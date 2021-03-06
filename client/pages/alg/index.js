var util = require('../../utils/util.js');
var gcol = 12;
var grow = 12;
var gmaze = {};
var gpath = {};
var gsolvePath = new Array();

Page({
  data: {
    width: 300,
    height: 0,
    hidden: true,
    canvasH: 500,
    button: false
  },
  saveToAlbum: function () {
    wx.showModal({
      title: '提示',
      content: '是否保存迷宫到相册',
      success: function (res) {
        if (res.confirm) {
          wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: (gcol - 2) * 10 + 4,
            height: (grow - 2) * 10 + 4,
            fileType: 'JPG',
            canvasId: 'maze',
            success: function (res) {
              console.log(res.tempFilePath);
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success(res) {
                  util.showFace('搞定', '8');
                }
              })
            }
          })
        } else if (res.cancel) {
          util.showFace('那你瞎点啥', '15');
        }
      }
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'Maze'
    })
    var that = this;
    var maze = new Array();
    var col = gcol;
    var row = grow;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        that.setData({
          width: res.windowWidth - 40,
          height: res.windowHeight,
          canvasH: res.windowHeight - 220
        });
      }
    })

    for (var i = 0; i < col; i++) {
      maze[i] = new Array();
      for (var k = 0; k < row; k++) {
        maze[i][k] = {
          flag: 0,
          draw: 1,
          left: 1,
          right: 1,
          top: 1,
          bottom: 1
        }
      }
    }
    //边界设墙
    for (var i = 0; i < col; i++) {
      maze[i][0].flag = 1;
      maze[i][row - 1].flag = 1;
    }
    for (var j = 0; j < row; j++) {
      maze[0][j].flag = 1;
      maze[col - 1][j].flag = 1;
    }
    maze[1][1].left = 0;
    maze[1][1].flag = 1;
    maze[col - 2][row - 2].right = 0;
    maze[col - 2][row - 2].flag = 0;
    gmaze = maze;
  },
  drawMaze: function () {
    var maze = gmaze;
    var that = this;
    var context = wx.createContext();
    for (var i = 1; i < maze.length - 1; i++) {
      for (var j = 1; j < maze[i].length - 1; j++) {
        if (maze[i][j].draw == 0) {
          if (maze[i][j].left == 1) {
            context.moveTo((i - 1) * 10 + 2, (j - 1) * 10 + 2);
            context.lineTo((i - 1) * 10 + 2, (j - 1) * 10 + 10 + 2);
            context.stroke();
          }
          if (maze[i][j].right == 1) {
            context.moveTo((i - 1) * 10 + 10 + 2, (j - 1) * 10 + 2);
            context.lineTo((i - 1) * 10 + 10 + 2, (j - 1) * 10 + 10 + 2);
            context.stroke();
          }
          if (maze[i][j].top == 1) {
            context.moveTo((i - 1) * 10 + 2, (j - 1) * 10 + 2);
            context.lineTo((i - 1) * 10 + 10 + 2, (j - 1) * 10 + 2);
            context.stroke();
          }
          if (maze[i][j].bottom == 1) {
            context.moveTo((i - 1) * 10 + 2, (j - 1) * 10 + 10 + 2);
            context.lineTo((i - 1) * 10 + 10 + 2, (j - 1) * 10 + 10 + 2);
            context.stroke();
          }
          maze[i][j].draw = 1;
          wx.drawCanvas({
            canvasId: 'maze',
            actions: context.getActions(),
            reserve: true
          })
          if (i == maze.length - 2 && j == maze[i].length - 2) {//画到最后一个
            that.setData({
              button: false
            })
          }
          return;
        }
      }
    }
  },
  onReady: function () {
    this.interval = setInterval(this.drawMaze, 40);
  },
  create: function () {
    var that = this;
    that.setData({
      button: true, //设置按钮不可以再按
      width: (gcol - 2) * 10 + 4,
      canvasH: (gcol - 2) * 10 + 4
    })
    var col = gcol;
    var row = grow;
    var maze = new Array();

    for (var i = 0; i < col; i++) {
      maze[i] = new Array();
      for (var k = 0; k < row; k++) {
        maze[i][k] = {
          flag: 0,
          draw: 1,
          left: 1,
          right: 1,
          top: 1,
          bottom: 1
        }
      }
    }
    //边界设墙
    for (var i = 0; i < col; i++) {
      maze[i][0].flag = 1;
      maze[i][row - 1].flag = 1;
    }
    for (var j = 0; j < row; j++) {
      maze[0][j].flag = 1;
      maze[col - 1][j].flag = 1;
    }
    maze[1][1].left = 0;
    maze[1][1].flag = 1;
    maze[col - 2][row - 2].right = 0;
    maze[col - 2][row - 2].flag = 0;
    gmaze = maze;
    var solvePath = new Array();
    for (var i = 1; i < maze.length - 1; i++) {
      for (var j = 1; j < maze[i].length - 1; j++) {
        maze[i][j].draw = 0;
        maze[i][j].left = 1;
        maze[i][j].right = 1;
        maze[i][j].top = 1;
        maze[i][j].bottom = 1;
        maze[i][j].flag = 0;
      }
    }
    maze[1][1].left = 0;
    maze[1][1].flag = 1;
    maze[col - 2][row - 2].right = 0;
    maze[col - 2][row - 2].flag = 0;
    var path = new Array();
    path.push({ x: 1, y: 1 });
    this.dug(path, maze);
    const ctx = wx.createCanvasContext('maze')
    ctx.clearRect(0, 0, 1500, 750);
    ctx.setFillStyle('white');
    ctx.fillRect(0, 0, 1500, 750);
    ctx.draw();
    gmaze = maze
  },
  //挖墙的核心方法
  dug: function (path, maze) {
    var that = this;
    var size = gcol;
    var random = Math.floor(Math.random() * 4);
    //next:当前节点
    var next = { x: path[path.length - 1].x, y: path[path.length - 1].y };
    if (next.x == (size - 2) && next.y == (size - 2)) {
      gsolvePath = path.slice();
    }
    if (maze[next.x][next.y + 1].flag == 1 && maze[next.x][next.y - 1].flag == 1 && maze[next.x + 1][next.y].flag == 1 && maze[next.x - 1][next.y].flag == 1) {
      if (path.length > 1) {
        path.pop();
        this.dug(path, maze);
      } else {
        return maze;
      }
    }
    if (random == 0) {//向上
      next.y = next.y - 1;
    } else if (random == 1) {//向右
      next.x = next.x + 1;
    } else if (random == 2) {//向下
      next.y = next.y + 1;
    } else if (random == 3) {//向左
      next.x = next.x - 1;
    }
    //next:下个节点
    if (maze[next.x][next.y].flag == 1) {
      this.dug(path, maze);
    } else {//下个节点未经过，开始挖墙
      maze[next.x][next.y].flag = 1;
      path.push({ x: next.x, y: next.y });
      if (random == 0) {//向上
        maze[next.x][next.y].bottom = 0;
        maze[next.x][next.y + 1].top = 0;
      } else if (random == 1) {//向右
        maze[next.x][next.y].left = 0;
        maze[next.x - 1][next.y].right = 0;
      } else if (random == 2) {//向下
        maze[next.x][next.y].top = 0;
        maze[next.x][next.y - 1].bottom = 0;
      } else if (random == 3) {//向左
        maze[next.x][next.y].right = 0;
        maze[next.x + 1][next.y].left = 0;
      }
      this.dug(path, maze);
    }
  },
  answer: function () {
    var solvePath = gsolvePath;
    if (solvePath == null || solvePath == 0 || solvePath.length < 1) {
      wx.showModal({
        title: '提示',
        content: '请先生成迷宫',
        success: function (res) {

        }
      })
    } else {
      var context = wx.createContext();
      for (var i = 0; i < solvePath.length; i++) {
        context.rect((solvePath[i].x - 1) * 10 + 5, (solvePath[i].y - 1) * 10 + 5, 3, 3);
        context.setFillStyle('red')
        context.fill();
      }
      wx.drawCanvas({
        canvasId: 'maze',
        actions: context.getActions(),
        reserve: true
      })
    }
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  setSize: function (event) {
    var value = event.detail.value;
    if (isNaN(value)) {
      util.showFace('请输入数字,OK?', '15');
      return "";
    } else {
      var size = parseInt(value);
      if (size <= 0) {
        util.showFace('你想搞事情?!', '17');
        return "";
      } else if (size > 40) {
        util.showFace('安全起见，不准', '11');
        return "";
      } else {
        gcol = size + 2;
        grow = size + 2;
      }
    }
  }
})