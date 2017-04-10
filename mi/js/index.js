var lks = document.querySelectorAll('.easy ul li a');
for(var i = 0;i<lks.length;i++)
{
	lks[i].onmouseover=function(){
		var img = this.getElementsByTagName('img')[0];
		var sp = this.getElementsByTagName('span')[0];
		var path = img.src;
		var base = path.substring(0,path.lastIndexOf('/')+1);
		var fname = path.substring(path.lastIndexOf('/')+1).split('\.')[0];
		fname = fname.substring(0,fname.length-1)+'2.png';
		img.src = base+fname;
		sp.style.color='#fff';
	}
	lks[i].onmouseout=function(){
		var img = this.getElementsByTagName('img')[0];
		var sp = this.getElementsByTagName('span')[0];
		var path = img.src;
		var base = path.substring(0,path.lastIndexOf('/')+1);
		var fname = path.substring(path.lastIndexOf('/')+1).split('\.')[0];
		fname = fname.substring(0,fname.length-1)+'1.png';
		img.src = base+fname;
		sp.style.color='#b0b0b0';
	}
}