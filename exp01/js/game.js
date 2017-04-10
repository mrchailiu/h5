//获取屏幕的可显示宽度
var w = window.screen.availWidth;
var h = window.screen.availHeight;

//将遮罩层的宽高设置为屏幕宽高(占满屏幕)
$('wrap').style.width=w+'px';
$('wrap').style.height=h+'px';

//获取容器并设置宽高，背景
var ct = document.querySelector('.container');
ct.style.width=w+'px';
ct.style.height=h/2 + 'px';
ct.style.backgroundColor='#ff6700';

//设置地图容器的基本信息
var map = $('map');
map.width = w;
map.height = h/2;
var mapCtx = map.getContext('2d');//获取绘图环境
var bg = new Image();//创建图片对象
bg.src='img/bg.png';//设置图片的路径
//当图片被加载时绘制到画布中
bg.onload=function(){
	mapCtx.drawImage(bg,0,0,w,h/2);
}

var role = $('role');	//获取绘英雄的画布
var heroImg = new Image(); //创建图片
heroImg.src='img/h0.png';

var roleCtx = role.getContext('2d');
//创建英雄对象(json格式)
var hero = {
	speed:20,		//移动速度
	x:0,			//绘制的坐标x
	y:180,			//绘制坐标y
	width:0,		//英雄图片宽度
	height:0,		//英雄图片高度
	dir:'right',	//移动方向
	img:heroImg		//渲染图片
};
//把英雄绘制画布中
hero.img.onload=function(){
	//在图片被加载后设置画布的宽高(将人物画布的宽度，高度设置的与背景保持一致)
	role.width = map.width;
	role.height = map.height;
	roleCtx.drawImage(hero.img,hero.x,hero.y);
}

var helpFlag = false;//初始未显示帮助菜单
//添加事件监听（当键盘按键被按下时触发事件）
addEventListener('keydown',function(e){
	//获取被按下按键的按键码
	var code = e.keyCode;
	switch(code){
		case 37:
			hero.dir = 'left';
			hero.x -= hero.speed;
			redraw();
			break;
		case 39:
			hero.dir = 'right';
			hero.x += hero.speed;
			redraw();
			break;
		case 65:
			//攻击
			playAudio('music/attack.wav');
			attack();
			break;
		case 88:
			openHelp();
			break;
	}
	
});
//呼出帮助菜单
function openHelp()
{
	if(!helpFlag){
		$('wrap').style.display = 'block';
		document.querySelector('.help').style.display = 'block';
		helpFlag = true;//标记为开启
	}
}

//获取到关闭按钮并添加点击事件
document.querySelector('.btn').onclick=function(){
	if(helpFlag){
		$('wrap').style.display = 'none';
		document.querySelector('.help').style.display = 'none';
		helpFlag = false;//标记为关闭
	}
}

var initAttack = 0;//初始攻击动画值
function attack()
{
	if(hero.dir == 'left')
	{
		hero.img.src = 'img/attack/a1-L'+initAttack+'.png';
	}else{
		hero.img.src = 'img/attack/a1-R'+initAttack+'.png';
	}
	initAttack++;
	//判断攻击动画是否播放完成
	if(initAttack > 5){
		initAttack = 0;
	}else{
		setTimeout(attack,100);//重复调用当前函数，以实现动画特效
	}
}

var initMove = 0;//声明初始显示移动图片的值
function redraw()
{
	if(hero.dir == 'left'){
		hero.img.src = 'img/h_L'+(initMove++ % 8)+'.png';
	}else{
		hero.img.src = 'img/h'+(initMove++ % 8)+'.png';
	}
	
	//当人物移动到屏幕最右边，还原位置到左侧
	if(hero.x > w){
		resetLeft();
	}
	//当人物移动到屏幕最左边，还原位置到右侧
	if(hero.x < -243){
		resetRight();
	}
}
//当人物移动到最右边时重置位置到左边
function resetLeft(){
	hero.x = -243;
	changeMap();
}
//当人物移动到最左边时重置人物位置到最右边
function resetRight()
{
	hero.x = w;
	changeMap();
}

var mapFlag = 0;
var changeMap = function()
{
	if(mapFlag == 0)
	{
		mapFlag = 1;
		bg.src='img/bg2.png'
	}else{
		mapFlag = 0;
		bg.src='img/bg.png';
	}
}

//创建多媒体对象
var player = document.createElement('audio');
player.src = 'music/bgmusic.mp3'; //设置播放器资源
player.loop = -1;	//设置循环次数（-1无限循环）
player.play();	//播放

//封装工具函数。通过id获取元素对象
function $(id){
	return document.getElementById(id);
}
//音效播放器
function playAudio(path)
{
	var audio = document.createElement('audio');
	audio.src = path;
	audio.play();
}
