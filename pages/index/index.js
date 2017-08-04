//index.js
//获取应用实例
var app = getApp();
var util = require('../../utils/util.js'); 
const ctx = wx.createCanvasContext('myCanvas');
Page({
  data: {
    SystemWidth:0,
    SystemHeight:0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          'SystemWidth': res.windowWidth,
          'SystemHeight': res.windowHeight,
        });
      }
    })
    console.log(that.data);
    ctx.rect(0, 0, that.data.SystemWidth, that.data.SystemHeight);
    ctx.setFillStyle('#272727')
    ctx.fill();

    var sarcWidth = 15;
    var arcWidth = 35;
    var width3 = that.data.SystemWidth / 3;
    var height3 = 400 / 3;
    var widthFix = width3 / 2;
    var heightFix = height3 / 2;
    for (var i = 0; i <= 2; i++) {
      for (var j = 0; j <= 2; j++) {
        console.log(width3 * i + widthFix);
        ctx.beginPath()
        ctx.arc(width3 * i + widthFix, height3 * j + heightFix, sarcWidth, 0, 2 * Math.PI);
        ctx.setFillStyle('#cccccc')
        ctx.fill()

        ctx.beginPath()
        ctx.arc(width3 * i + widthFix, height3 * j + heightFix, arcWidth, 0, 2 * Math.PI)
        ctx.setStrokeStyle('#ffffff')
        ctx.stroke();
      }
    }


    ctx.draw()
  },
  touchMove: function (e) {
    console.log(e.touches[0]);
    ctx.beginPath()
    ctx.moveTo(10, 10);
    ctx.lineTo(110, 60)
    ctx.stroke()
    ctx.draw()
  }


})