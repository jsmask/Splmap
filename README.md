<h3>名称：sqlmap.js</h3>

<b>简介：这是利用ES5.1临时开发的一个批量加载数据，合成3种类型图片的功能（文字图片，正常图片，视频合成图）。</b>
</br>

<h4>开始使用:</h4>
var _btnimg = imgsrc;
</br>
var _loaddata = [_btnimg,imgsrc,imgsrc,imgsrc];
</br>
var _data=[{
</br>
&nbsp;&nbsp;&nbsp;&nbsp; 		type:"text",          //图片类型分为['text','img','video']
</br>
&nbsp;&nbsp;&nbsp;&nbsp; 		txt:"Hello World!"    //文字图片内容
</br>
},{
</br>
&nbsp;&nbsp;&nbsp;&nbsp; 		type:"img",
</br>
&nbsp;&nbsp;&nbsp;&nbsp; 		bgsrc:imgsrc,         //背景底图
</br>
&nbsp;&nbsp;&nbsp;&nbsp; 		anonymous: false      //是否跨域，默认为false
</br>
},{
</br>
&nbsp;&nbsp;&nbsp;&nbsp; 		type:"video",
</br>
&nbsp;&nbsp;&nbsp;&nbsp; 		bgsrc:imgsrc,
</br>
&nbsp;&nbsp;&nbsp;&nbsp; 		anonymous: false
</br>
}]
</br>
var sqlmap = new Sqlmap({
</br>	
    &nbsp;&nbsp;&nbsp;&nbsp; 		loaddata: _loaddata,   //预加载的图片数组
    </br>
		&nbsp;&nbsp;&nbsp;&nbsp; 		width: 120,    //生成图片宽，默认为120
		</br>
		&nbsp;&nbsp;&nbsp;&nbsp; 		height: 120,   //生成图片高，默认为120
		</br>
		&nbsp;&nbsp;&nbsp;&nbsp; 		data: _data,      //所传入的需要生成的数据信息
		</br>
		&nbsp;&nbsp;&nbsp;&nbsp; 		clarity: .8,      //生成图片质量压缩程度，默认为.8
		</br>
		&nbsp;&nbsp;&nbsp;&nbsp; 		format: 'image/jpeg',   //生成图片格式，默认image/jpeg
		</br>
		&nbsp;&nbsp;&nbsp;&nbsp; 		btn: _btnimg,           //视频按钮图片路径
		</br>
		&nbsp;&nbsp;&nbsp;&nbsp; 		btnwidth: 48,           //视频按钮宽度，默认为48
		</br>
		&nbsp;&nbsp;&nbsp;&nbsp; 		backgroundColor: "#fff",  //背景色，默认为#fff
		</br>
		&nbsp;&nbsp;&nbsp;&nbsp; 		fontsize: 18,           //文字大小，默认为18
		</br>
		&nbsp;&nbsp;&nbsp;&nbsp; 		maxsize: 6,             //文字最大数量，默认为6，
		</br>
		&nbsp;&nbsp;&nbsp;&nbsp; 		fontcolor: "#999",      //文字颜色，默认为#999
		</br>
		&nbsp;&nbsp;&nbsp;&nbsp; 		isshow: false          //生成画布是否显示，默认false
</br>     
&nbsp;&nbsp 	}，function(data){
</br>
&nbsp;&nbsp;&nbsp;&nbsp; 		console.log(data); &nbsp;&nbsp;&nbsp;&nbsp;//[base64,base64,base64]
</br>
})
</br>
<h4>预览图片:</h4>
<img src="https://github.com/jsmask/Splmap/blob/master/exhibition.png" />

