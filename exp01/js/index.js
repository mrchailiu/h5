/*
	JS:JavaScript是一门弱类型语言(任何数据类型在使用时无需定义或者使用var声明，在运行时可以动态修改数据类型)，同时也是
	一门脚本语言(无法独立运行)，需要基于html页面运行(nodejs除外)
*/
//alert('hello javascript')
//获取画布对象
var canvas = document.getElementById('canvas1');
//获取绘图环境
var ctx = canvas.getContext('2d');

//设置笔触的基本样式
ctx.strokeStyle = '#fff'; //设置笔触颜色
ctx.lineWidth = 5;//设置线条宽度

//绘制一条线段
ctx.moveTo(10,10);//设置起始绘制的坐标点、
ctx.lineTo(100,10);//设置线条的终点
ctx.stroke();//绘制

ctx.beginPath();
ctx.arc(100,50,40,0,360);
ctx.stroke();
ctx.closePath();
