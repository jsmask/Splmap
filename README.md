<h3>名称：sqlmap.js</h3>

<b>简介：这是利用ES5.1临时开发的一个批量加载数据，合成3种类型图片的功能（文字图片，正常图片，视频合成图）。</b>
</br>

<h4>开始使用:</h4>
var _btnimg = imgsrc;
var _loaddata = [_btnimg,imgsrc,imgsrc,imgsrc];
var _data=[{
&nbsp;&nbsp;&nbsp;&nbsp; 		type:"text",          //图片类型分为['text','img','video']
&nbsp;&nbsp;&nbsp;&nbsp; 		txt:"Hello World!"    //文字图片内容
},{
&nbsp;&nbsp;&nbsp;&nbsp; 		type:"img",
&nbsp;&nbsp;&nbsp;&nbsp; 		bgsrc:imgsrc,         //背景底图
&nbsp;&nbsp;&nbsp;&nbsp; 		anonymous: false      //是否跨域，默认为false
},{
&nbsp;&nbsp;&nbsp;&nbsp; 		type:"video",
&nbsp;&nbsp;&nbsp;&nbsp; 		bgsrc:imgsrc,
&nbsp;&nbsp;&nbsp;&nbsp; 		anonymous: false
}]
</br>
var sqlmap = new Sqlmap({
</br>
    &nbsp;&nbsp;&nbsp;&nbsp; 		
    &nbsp;&nbsp;&nbsp;&nbsp; 		
    &nbsp;&nbsp;&nbsp;&nbsp; 		loaddata: _loaddata,   //预加载的图片数组
		&nbsp;&nbsp;&nbsp;&nbsp; 		width: 120,    //生成图片宽，默认为120
		&nbsp;&nbsp;&nbsp;&nbsp; 		height: 120,   //生成图片高，默认为120
		&nbsp;&nbsp;&nbsp;&nbsp; 		data: _data,      //所传入的需要生成的数据信息
		&nbsp;&nbsp;&nbsp;&nbsp; 		clarity: .8,      //生成图片质量压缩程度，默认为.8
		&nbsp;&nbsp;&nbsp;&nbsp; 		format: 'image/jpeg',   //生成图片格式，默认image/jpeg
		&nbsp;&nbsp;&nbsp;&nbsp; 		btn: _btnimg,           //视频按钮图片路径
		&nbsp;&nbsp;&nbsp;&nbsp; 		btnwidth: 48,           //视频按钮宽度，默认为48
		&nbsp;&nbsp;&nbsp;&nbsp; 		backgroundColor: "#fff",  //背景色，默认为#fff
		&nbsp;&nbsp;&nbsp;&nbsp; 		fontsize: 18,           //文字大小，默认为18
		&nbsp;&nbsp;&nbsp;&nbsp; 		maxsize: 6,             //文字最大数量，默认为6，
		&nbsp;&nbsp;&nbsp;&nbsp; 		fontcolor: "#999",      //文字颜色，默认为#999
		&nbsp;&nbsp;&nbsp;&nbsp; 		isshow: false          //生成画布是否显示，默认false
</br>     
}，function(data){
</br>
console.log(data); &nbsp;&nbsp;&nbsp;&nbsp;//[base64,base64,base64]
</br>
})
</br>
