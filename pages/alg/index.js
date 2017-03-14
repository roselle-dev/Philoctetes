// pages/joke/index.js
Page({
  data: {
    col: 30,
    row: 40,
    maze: {},
    width: 50,
    height: 0
  },
  onLoad: function (options) {
    var that = this;
    var maze = new Array();
    var col = this.data.col;
    var row = this.data.row;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          width: res.windowWidth,
          height:res.windowHeight
        });
      }
    })

    for (var i = 0; i < col; i++) {
      maze[i] = new Array();
      for (var k = 0; k < row; k++) {
        maze[i][k] = {
          flag: 0,
          draw: 0,
          left: 1,
          right: 1,
          top: 1,
          bottom: 1
        }
      }
    };
    console.log(maze);
    that.setData({
      maze: maze
    });
  },
  drawMaze: function () {
    var maze = this.data.maze;
    var context = wx.createContext();
    for (var i = 0; i < maze.length; i++) {
      for (var j = 0; j < maze[i].length; j++) {
        if (maze[i][j].draw == 0) {
          context.strokeRect(j * 10, i * 10, 10, 10);
          maze[i][j].draw = 1;
          wx.drawCanvas({
            canvasId: 'maze',
            actions: context.getActions(),
            reserve: true
          })
          return;
        }
      }
    }
  },
  onReady: function () {
    this.drawMaze();
    this.interval = setInterval(this.drawMaze, 40);
  },
  create:function(){
    var that = this;
    var maze = this.data.maze;
    maze[0][0].draw=0;
    maze[0][1].draw=0;
    maze[0][2].draw=0;
    maze[0][3].draw=0;
    maze[0][4].draw=0;
    maze[0][5].draw=0;
    maze[0][6].draw=0;
    maze[0][7].draw=0;
    maze[0][8].draw=0;
    that.setData({
      maze: maze
    });
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})