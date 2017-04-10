/**
 * Created by Administrator on 2017/2/26 0026.
 */

//分别获取界面中三块区域
var header = $('title');
var section = $('panel');
var copy = $('copy');

//获取屏幕的可用高度
var sh = window.screen.availHeight;
//计算并获取游戏面板的可用高度
var availMoveHeight = sh - 50 - 50 - 100;

//设置指定元素的高度
section.style.height = availMoveHeight+'px';
//获取屏幕的可用宽度
var sw = window.screen.availWidth;
//将三块区域的宽度同时设置为屏幕的可用宽度
section.style.width = header.style.width = copy.style.width = sw + 'px';

//封装通过元素id获取元素(jquery)
function $(id)
{
    return document.getElementById(id);
}

/**游戏设置部分---begin*/
var speed = 10;//角色移动速度
var direct = 'right';//角色移动方向 默认往右
var x = 5;  //初始x轴
var y = 5;  //初始y轴
var flag = 0;//初始角色图片位置
var heroH = 105;    //角色固有高度
var heroW = 100;    //角色固有宽度
var height = availMoveHeight;
var width = sw;
var mapWidth = 1750;    //地图宽度
var mapHeight = 1440;   //地图高度
var mapX = 0;           //地图默认显示的位置 X
var mapY = 0;           //地图默认显示的位置 Y
var attack_flag=0;      //攻击标识

/**游戏设置部分---end*/

var hero = $('role');//获取角色
var body = $('body');//获取角色身体部分

//初始化英雄的显示位置
hero.style.top = y + 'px';
hero.style.left = x + 'px';
//监控屏幕的按键按下事件
window.onkeydown=function(e){
    //获取当前被按下按键的按键码
    var code = e.keyCode;
    //判断是否进行人物移动
    if(code >=37 && code <=40){
        move(code);
    }
    //判断是否按下a键(忽略大小写)
    if(code == 97 || code == 65){
        attack();
    }
}
//监控屏幕的鼠标点击事件
section.onclick=function(e){
    //获取鼠标指针点击的位置
    var rx = e.clientX;
    var ry = e.clientY;
    moveByPos(rx,ry);
}
var xLen;//声明鼠标位置与角色位置x轴的距离
var yLen;//声明鼠标位置与角色位置y轴的距离
//人物跟随鼠标移动
function moveByPos(rx,ry)
{
    if(rx > x){
        direct = 'right';
        xLen = rx - x;  // x+
    }else if(rx < x){
        direct = 'left';
        xLen = rx - x;  // x-
    }else if(rx == x){
        if(ry > y){
            direct  = 'down';
            yLen = ry - y;//y+
        }else if(ry < y){
            direct = 'up';
            yLen = ry - y;//y-
        }
    }
    if(ry > y){
        direct  = 'down';
        yLen = ry - y;//y+
    }else if(ry < y){
        direct = 'up';
        yLen = ry - y;//y-
    }
    hero.style.left = x + xLen -50 + 'px';
    hero.style.top = y + yLen - 100 + 'px';
    body.src = 'imgs/move/'+direct+'/0.png';
}

//攻击
function attack()
{
    playSound('source/attack.wav');//播放音效
    anim_attack();//播放攻击动画
}
//攻击动画
var anim_attack=function(){
    var path = 'imgs/attack/'+direct+'/'+(attack_flag++)+'.png';

    body.src = path;
    if(attack_flag <= 4){
        setTimeout(anim_attack,200);
    }else{
        attack_flag = 0;
        //还原动作
        body.src = 'imgs/move/'+direct+'/0.png';
    }
}
//音效播放
function playSound(path){
    var player = document.createElement('audio');
    player.src = path;
    player.play();
}

//角色移动
function move(code)
{
    switch(code)
    {
        case 37:
            direct = 'left';
            x -= speed;
            break;
        case 38:
            direct = 'up';
            y -= speed;
            break;
        case 39:
            direct = 'right';
            x += speed;
            break;
        case 40:
            direct = 'down';
            y += speed;
            break;
    }
    //防止角色越界
    if(x < 5){
        refreshEnemy();
        x = 5;
        //人物不再左移（让地图右移）
        mapX += speed;
        if(mapX >= 0)
        {
            mapX = 0;
        }else{
            //防止地图越界(左边)
            section.style.backgroundPositionX = mapX + 'px';
            for(var i = 0; i < enemys.length; i++)
            {
                var e = enemys[i];
                var eLeft = e.style.left//获取当前怪物原来的left值
                eLeft = parseInt(eLeft.substring(0,eLeft.length-2));
                eLeft += speed;
                e.style.left = eLeft + 'px';
            }
        }
    }
    if(y < 5){
        refreshEnemy();
        y = 5;
        //人物不再上移(让地图下移)
        mapY += speed;
        if(mapY >= 0){
            mapY= 0;
        }else{
            section.style.backgroundPositionY = mapY + 'px';
            for(var i = 0; i < enemys.length; i++){
                var e = enemys[i];
                var eTop = e.style.top;//获取当前怪物与顶部距离
                eTop = parseInt(eTop.substring(0,eTop.length-2));
                eTop += speed;
                e.style.top = eTop + 'px';
            }
        }
    }
    if(y > (height - heroH)){
        y = height - heroH ;
        refreshEnemy();
        //人物不再下移(让地图上移)
        mapY -= speed;
        if(mapY < height - mapHeight){
            mapY = height - mapHeight;
        }else{
            section.style.backgroundPositionY = mapY + 'px';
            for(var i = 0; i < enemys.length; i++){
                var e = enemys[i];
                var eTop = e.style.top;//获取当前怪物与顶部距离
                eTop = parseInt(eTop.substring(0,eTop.length-2));
                eTop -= speed;
                e.style.top = eTop + 'px';
            }
        }
    }
    if(x > (width - heroW - 5)){
        refreshEnemy();
        //人物不再右移(让地图左移)
        x = width - heroW - 5;
        mapX -= speed;
        if(mapX < width - mapWidth){
            mapX = width - mapWidth;//防止地图越界(右边) 地图不再移动
        }else{
            section.style.backgroundPositionX = mapX + 'px';
            //获取所有怪物对象
            for(var i = 0; i < enemys.length; i++)
            {
                var e = enemys[i];
                var eLeft = e.style.left//获取当前怪物原来的left值
                eLeft = parseInt(eLeft.substring(0,eLeft.length-2));
                eLeft -= speed;
                e.style.left = eLeft + 'px';
            }
        }
    }
    //移动
    letsgo();
}

//更新怪物
function refreshEnemy(){
        enemys.reverse();
        var en = enemys.pop();  //从数组中移除一个怪物
        var en2 = enemys.pop();
        var en3 = enemys.pop();
        section.removeChild(en);   //将怪物从界面中删除
        section.removeChild(en2);
        section.removeChild(en3);
        enemys.push(genEnemy());    //重新生成一个并加入数组中
        enemys.push(genEnemy());
        enemys.push(genEnemy());
}

function letsgo(){
    //切换角色图片
    body.src = 'imgs/move/'+direct+'/'+(flag++ % 6)+'.png';
    hero.style.left = x + 'px';
    hero.style.top = y + 'px';
}

//产生怪物
var enemy_flag = 0;
var enemys = [];//声明数组，存储产生的怪物
//随机生成指定个数个怪物
for(var i = 0;i<10;i++)
{
    var e = genEnemy();
    //将怪物存入集合
    enemys.push(e);
}
//生成敌人并返回
function genEnemy(){
    var enemy = document.createElement('img');
    enemy.width = 100;
    enemy.height = 100;
    enemy.src = 'imgs/_attack/0.png';
    //随机生成一个位置(显示怪物)
    var x = parseInt(Math.random() * width);
    var y = parseInt(Math.random() * height);
    if(x < 5){x = 5}
    if(y < 5){y = 5}
    if(x > (width-100)){
        x = width - 100;
    }
    if(y > (height - 100)){
        y = height - 100;
    }
    section.appendChild(enemy);
    enemy.style.position='absolute';
    enemy.style.zIndex = 0;//设置层叠顺序
    enemy.style.top = y + 'px';
    enemy.style.left = x + 'px';
    //enemy_anim();
    return enemy;
}

function enemy_anim(){
    var path = 'imgs/_attack/'+(enemy_flag++ % 6)+'.png';
    enemy.src = path;
    ysetInterval(enem_anim,200);
}