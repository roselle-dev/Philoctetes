// pages/box/box.js
import * as echarts from '../../ec-canvas/echarts';
const app = getApp();
const RANKLIST_URL = 'https://api.shenjian.io/?appid=29cfcdcb5717cd582f75797c2a10fbe6';
//15种颜色
const COLORS = ['#FD6585', '#ABDCFF', '#FEB692', '#CE9FFC', '#32CCBC', '#F6416C', '#81FBB8', '#E2B0FF', '#F97794', 'FCCF31', '#F761A1', '#43CBFF', '#FFD26F', '#F6CEEC','#97ABFF'];

function setOption(chart, option) {
  chart.setOption(option);
}

Page({
  data: {
    ec: {
      lazyLoad: true
    },
    isLoaded: false,
    isDisposed: false,
    boxInfo: [],
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '实时票房数据'
    })
  },
  onReady: function() {
    // 获取组件
    this.ecComponent = this.selectComponent('#box-pie');
  },
  init: function() {
    var that = this;
    var movies = that.data.boxInfo;
    console.log('开始绘制表格');
    const option = {
      backgroundColor: "#EE9AE5",
      color: COLORS,
      series: [{
        label: {
          normal: {
            fontSize: 14
          }
        },
        type: 'pie',
        center: ['50%', '50%'],
        radius: [0, '60%'],
        data: [{
          value: 55,
          name: '北京'
        }, {
          value: 20,
          name: '武汉'
        }, {
          value: 10,
          name: '杭州'
        }, {
          value: 20,
          name: '广州'
        }, {
          value: 38,
          name: '上海'
        }, ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 2, 2, 0.3)'
          }
        }
      }]
    };
    this.ecComponent.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      setOption(chart, option);
      this.chart = chart;
      this.setData({
        isLoaded: true,
        isDisposed: false
      });
      return chart;
    });
  },
  onShow: function() {
    var that = this;
    wx.request({
      url: RANKLIST_URL,
      method: 'GET',
      data: {
        date: new Date().getTime(),
      },
      header: {
        'content-type': 'application/json',
      },
      success: function(res) {
        if (res.data.error_code == 0) {
          console.log('调用init方法');
          that.init();
          that.setData({
            boxInfo: res.data.data
          })
        }
      }
    })
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  }
})