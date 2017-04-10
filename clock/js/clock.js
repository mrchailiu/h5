/**
 * Created by Administrator on 2017/3/4 0004.
 */
//获取画布
var canvas = document.getElementById('clock');
var ctx = canvas.getContext('2d');//获取2d绘图环境
draw();
function draw(){

    ctx.clearRect(0,0,400,400);

    ctx.beginPath();
    ctx.arc(200,200,150,0,2*Math.PI,false);
    ctx.strokeStyle='#ffffff';
    ctx.lineWidth=5;
    ctx.fillStyle='#f0f0f0';
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.lineWidth=5;
    ctx.strokeStyle='#000000';
    ctx.fillStyle='#000000';

    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    hour = hour > 12 ?hour-12:hour;
    hour = hour + minutes/60;

    for(var i = 0;i<12;i++){
        ctx.save();
        ctx.beginPath();
        ctx.translate(200,200);
        ctx.rotate(i*30*Math.PI/180);
        ctx.moveTo(0,-150);
        ctx.lineTo(0,-135);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }

    ctx.lineWidth=2;
    for(var i = 0;i<60;i++){
        ctx.save();
        ctx.beginPath();
        ctx.translate(200,200);
        ctx.rotate(i*6*Math.PI/180);
        ctx.moveTo(0,-150);
        ctx.lineTo(0,-145);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth=5;
    ctx.translate(200,200);
    ctx.rotate(hour * 30 * Math.PI/180);
    ctx.moveTo(0,15);
    ctx.lineTo(0,-100);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth=3;
    ctx.translate(200,200);
    ctx.rotate(minutes * 6 * Math.PI/180);
    ctx.moveTo(0,15);
    ctx.lineTo(0,-115);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth=1;
    ctx.strokeStyle='#ff0000';
    ctx.translate(200,200);
    ctx.rotate(seconds * 6 * Math.PI/180);
    ctx.moveTo(0,15);
    ctx.lineTo(0,-125);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    ctx.beginPath();
    ctx.fillStyle='#000000';
    ctx.strokeStyle='#ff0000';
    ctx.arc(200,200,5,0,360,false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
//每隔1秒钟重绘界面
setInterval(draw,1000);