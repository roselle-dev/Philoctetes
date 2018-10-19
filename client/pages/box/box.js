// pages/box/box.js
import * as echarts from '../../ec-canvas/echarts';
const app = getApp();
const RANKLIST_URL = 'https://api.shenjian.io/?appid=29cfcdcb5717cd582f75797c2a10fbe6';
//15种颜色
const COLORS = ['#426ab3', '#deab8a', '#a3cf62', '#afb4db', '#f47a55', '#dec674', '#afdfe4', '#d3d7d4', '#f3715c', '#dbce8f', '#00a6ac', '#2a5caa'];

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
    boxInfo: []
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
    console.log(movies);
    var pieData = [];
    var legendData = [];
    for(let i=0;i<movies.length;i++){
      pieData[i]={
        value:parseFloat(movies[i].boxPer),
        name: movies[i].MovieName,
      };
      legendData[i] = movies[i].MovieName;
    }
    console.log(pieData);
    console.log('开始绘制表格');
    const option = {
      backgroundColor: "#FFFFFF",
      color: COLORS,
      legend: {
        orient: 'horizontal',
        x: 'left',
        data: legendData
      },
      series: [{
        startAngle:60,
        label: {
          normal: {
            fontSize: 14
          }
        },
        type: 'pie',
        center: ['50%', '50%'],
        radius: [0, '50%'],
        data: pieData,
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            label: {
              show: true,
              position: 'outer'
            },
            labelLine: {
              show: true
            },
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
          that.setData({
            boxInfo: res.data.data
          });
          that.init();
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