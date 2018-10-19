// pages/alone/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'maze',
    scrollTop: 10
  },
  toMaze: function () {
    wx.navigateTo({
      url: '../alg/index'
    })
  },
  toSudoku: function () {
    wx.navigateTo({
      url: '../sudoku/index'
    })
  },
  toBoxList:function(){
    wx.navigateTo({
      url: '../box/box'
    })
  }
})