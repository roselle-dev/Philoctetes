// pages/box/box.js
import * as echarts from '../../ec-canvas/echarts';
const app = getApp();
const RANKLIST_URL = 'https://api.shenjian.io/?appid=29cfcdcb5717cd582f75797c2a10fbe6';

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
    boxInfo:[],
  },
  onLoad: function (options) {
 
  },
  onReady: function () {
    // 获取组件
    this.ecComponent = this.selectComponent('#box-pie');
  },
  init: function () {
    console.log('开始绘制表格');
    const option = {
      backgroundColor: "#ffffff",
      color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
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
        },
        ],
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
      setOption(chart,option);
      this.chart = chart;
      this.setData({
        isLoaded: true,
        isDisposed: false
      });
      return chart;
    });
  },
  onShow: function () {
    var that = this;
    wx.request({
      url: RANKLIST_URL,
      method: 'GET',
      data: {
        sortType: '1',
        date: new Date().getTime()
      },
      header: {
        'content-type': 'application/json',
      },
      success: function (res) {
        if (res.data.error_code == 0) {
          console.log('调用init方法');
          that.init();
          that.setDate({
            boxInfo: res.data.data
          })
        }
      }
    })
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  }
})