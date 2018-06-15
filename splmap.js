(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) : (global.Splmap = factory());
}(this, (function() {

	var isIE = document.documentMode;

	var defaultConfig = {
		loaddata: [],
		width: 120,
		height: 120,
		data: [],
		clarity: .8,
		format: 'image/jpeg',
		btn: "",
		btnwidth: 48,
		backgroundColor: "#fff",
		fontsize: 15,
		maxsize: 6,
		fontcolor: "#999",
		isshow: false,
		anonymous: false
	};

	var _extends = Object.assign || function(target) {
		for(var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for(var key in source) {
				if(Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	};

	function imgLoad(src, callback) {
		var img = new Image();
		img.onload = function() {
			callback && callback()
		}
		img.onerror = function() {
			callback && callback()
		}
		img.src = src.toString();
	}

	function bulkLoad(arr, callback) {
		var _obj = arr || [];
		if(Object.prototype.toString.call(_obj) !== '[object Array]')
			_obj = [_obj.toString()];
		var _rate = 0;
		var _max = _obj.length;
		for(var item in _obj) {
			imgLoad(_obj[item], function() {
				_rate++;
				if(_rate >= _max) callback && callback();
			})
		}
	}

	function createCanvas() {
		var canvas = document.createElement("canvas");
		canvas.setAttribute('width', _w);
		canvas.setAttribute('height', _h);
		if(!_isshow) canvas.setAttribute('style', "display:none");
		document.body.appendChild(canvas);
		return canvas;
	}

	function clearCanvas() {
		ctx.clearRect(0, 0, _w, _h);
	}

	function createPic(fmt, cty) {
		return c.toDataURL(fmt, cty);
	}

	var dataPack = function(option) {
		var _data = option.data;
		var _arr = [];
		this._w = option.width;
		this._h = option.height;
		this._isshow = option.isshow;
		this._anonymous = option.anonymous;
		this._bgColor = option.backgroundColor;
		this.c = createCanvas.call(this);
		this.ctx = c.getContext("2d");

		for(var i = 0; i < _data.length; i++) {
			var _type = _data[i]["type"];
			clearCanvas.call(this);
			ctx.width = _w;
			ctx.height = _h;
			ctx.fillStyle = _bgColor;
			ctx.fillRect(0, 0, _w, _h);

			switch(_type) {
				case "text":
					drawWord.call(this, _data[i].txt, option.fontsize, option.fontcolor, option.maxsize);
					break;
				case "img":
					drawPic.call(this, _data[i].bgsrc);
					break;
				case "video":
					drawVideo.call(this, _data[i].bgsrc, option.btn, option.btnwidth);
					break;
				default:
					break;
			}
			_arr.push(createPic.call(this, option.format, option.clarity))
		}
		return _arr;
	}

	function drawWord(txt, size, color, max) {
		ctx.save()
		ctx.fillStyle = color
		ctx.font = size + "px Georgia";
		ctx.textAlign = "center";
		ctx.fillText(txt.substring(0, max)+'...', _w / 2, _h / 2);
		ctx.restore()
	}

	function drawPic(src) {
		var img = new Image();
		if(_anonymous) img.setAttribute('crossorigin', 'anonymous');
		img.src = src;
		if(img.complete) {
			loadDrawImg.call(this, img);
		} else {
			img.onload = function() {
				loadDrawImg.call(this, img);
			}.call(this)
			img.src = src;
		}
	}

	function loadDrawImg(img) {
		var _v = img.naturalWidth / img.naturalHeight;
		if(!_v) {
			console.error("Failure of information synthesis:" + img.src);
			return false;
		}
		if(_v > 1) {
			img.height = _h;
			img.width = _w * _v;
		} else {
			img.width = _w;
			img.height = _h / _v;
		}
		var _x = (_w - img.width) / 2;
		var _y = (_h - img.height) / 2;
		ctx.drawImage(img, _x, _y, img.width, img.height);
	}

	function drawVideo(src, btn, bw) {
		drawPic(src);
		var img = new Image();
		img.src = btn;
		var _v = img.width / img.height;
		img.width = bw;
		img.height = bw / _v;
		var _x = (_w - img.width) / 2;
		var _y = (_h - img.height) / 2;
		ctx.drawImage(img, _x, _y, img.width, img.height);
	}

	var splmap = function() {
		var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var _callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var _defaultConfig$option = _extends({}, defaultConfig, _options);
		bulkLoad(_defaultConfig$option["loaddata"], function() {
			var _map = dataPack(_defaultConfig$option);
			_callback&&_callback(_map);
		});
	}

	return splmap;
})))