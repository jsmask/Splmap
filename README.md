## 名称：sqlmap.js
<b>简介：这是利用ES5.1临时开发的一个批量加载数据，合成3种类型图片的功能（文字图片，正常图片，视频合成图）。</b>

## 开始使用:
```html
var _btnimg = imgsrc;
var _loaddata = [_btnimg,imgsrc,imgsrc,imgsrc];
var _data=[{
type:"text",          //图片类型分为['text','img','video']
txt:"Hello World!"    //文字图片内容
</br>
},{
type:"img",
bgsrc:imgsrc,        //背景底图
anonymous: false     //是否跨域，默认为false
},{
	type:"video",
	bgsrc:imgsrc,
	anonymous: false
}]
var sqlmap = new Sqlmap({
</br>	
        loaddata: _loaddata,   //预加载的图片数组
	width: 120,    //生成图片宽，默认为120
	height: 120,   //生成图片高，默认为120
	data: _data,      //所传入的需要生成的数据信息
	clarity: .8,      //生成图片质量压缩程度，默认为.8
	format: 'image/jpeg',   //生成图片格式，默认image/jpeg
	btn: _btnimg,          //视频按钮图片路径
	btnwidth: 48,          //视频按钮宽度，默认为48
	backgroundColor: "#fff",   //背景色，默认为#fff
	fontsize: 18,           //文字大小，默认为18
	maxsize: 6,             //文字最大数量，默认为6，
	fontcolor: "#999",      //文字颜色，默认为#999
	isshow: false          //生成画布是否显示，默认false
 },function(data){
   console.log(data); &nbsp;&nbsp;&nbsp;&nbsp;//[base64,base64,base64]
})
```
## 预览图片:
<img src="https://github.com/jsmask/Splmap/blob/master/exhibition.png" />

