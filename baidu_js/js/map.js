BMap.register(function(T) {
	if (T.config && T.config.isOverviewMap) {
		return
	}
	if (T.isLoaded()) {
		be(T)
	} else {
		T.addEventListener("load",
		function() {
			be(this)
		})
	}
});
function be(cG) {
	if (cG.temp.copyadded) {
		return
	}
	cG.temp.copyadded = true;
	var cI = new BMap.Size(81, 2);
	var cF = "11px";
	if (aw()) {
		if (cG.highResolutionEnabled()) {
			cI.width = 148;
			cF = "21px"
		} else {
			cI.width = 72;
			cI.height = 0
		}
	}
	var cH = new aj({
		offset: cI,
		printable: true
	});
	var cE = '<span style="font-size:' + cF + '">&copy; 2012 Baidu</span>';
	if (cG.getMapType() == BMAP_PERSPECTIVE_MAP) {
		cE = '<span style="color:#fff;font-size:' + cF + '">&copy;2012 Baidu - Data &copy; </span><a style="font-size:' + cF + '" href="http://o.cn" target="_blank" style="color:#fff">都市圈</a>'
	}
	cH.addCopyright({
		content: cE,
		id: 1
	});
	cG.addEventListener("maptypechange",
	function() {
		var cJ = cG.getMapType();
		switch (cJ) {
		case BMAP_SATELLITE_MAP:
		case BMAP_HYBRID_MAP:
			cH.addCopyright({
				id:
				1,
				content: '<span style="color:#fff;font-size:' + cF + ';text-shadow:0 1px 3px black">&copy; 2012 Baidu - Image &copy; DigitalGlobe & </span><a href="http://www.chinasiwei.com" target="_blank" style="color:#fff;font-size:' + cF + ';text-shadow:0 1px 3px black">chinasiwei</a>'
			});
			break;
		case BMAP_PERSPECTIVE_MAP:
			cH.addCopyright({
				id:
				1,
				content: '<span style="color:#fff;font-size:' + cF + ';text-shadow:0 1px 3px black">&copy; 2012 Baidu - Data &copy; </span><a href="http://o.cn" target="_blank" style="color:#fff;font-size:' + cF + ';text-shadow:0 1px 3px black">都市圈</a>'
			});
			break;
		default:
			cH.addCopyright({
				id:
				1,
				content: '<span style="font-size:' + cF + '">&copy; 2012 Baidu</span>'
			});
			break
		}
	});
	cG.addControl(cH);
	var T = new bU();
	T._opts = {
		printable: true
	};
	cG.addControl(T);
	cG.addEventListener("resize",
	function() {
		if (this.getSize().width >= 220 && cG.getSize().height >= 100) {
			T.show();
			cH.setOffset(cI)
		} else {
			T.hide();
			cH.setOffset(new aC(4, 2))
		}
	});
	if (cG.getSize().width >= 220 && cG.getSize().height >= 100) {
		T.show()
	} else {
		T.hide();
		cH.setOffset(new aC(4, 2))
	}
	if (cG.highResolutionEnabled()) {
		T.setOffset(new aC(3, 2))
	}
}
function bU(T) {
	this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
	this.defaultOffset = new aC(1, 0);
	this.IMG_URL = b5.imgPath + (aw() ? "copyright_logo_s.png": "copyright_logo.png")
}
bU.prototype = new ci();
bU.prototype.initialize = function(cE) {
	this._map = cE;
	var cF = X("div");
	cF.style.height = "32px";
	var T = X("a", {
		title: "到百度地图查看此区域",
		target: "_blank",
		href: "http://map.baidu.com/?sr=1"
	});
	T.style.outline = "none";
	if (a2.browser.ie == 6) {
		T.innerHTML = "<div style='cursor:pointer;width:77px;height:32px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + this.IMG_URL + ")'></div>"
	} else {
		T.innerHTML = "<img style='border:none;width:77px;height:32px' src='" + this.IMG_URL + "' />"
	}
	if (aw()) {
		if (this._map.highResolutionEnabled()) {
			cF.style.height = "50px";
			T.href = "#";
			this.IMG_URL = b5.imgPath + "copyright_logo_hd.png";
			T.innerHTML = "<img style='border:none;width:136px;height:50px' src='" + this.IMG_URL + "' />"
		} else {
			cF.style.height = "25px";
			T.href = "#";
			T.innerHTML = "<img style='border:none;width:68px;height:25px' src='" + this.IMG_URL + "' />"
		}
	}
	cF.appendChild(T);
	cE.getContainer().appendChild(cF);
	return cF
};
a2.extend(bt.prototype, {
	_draw: function() {
		this._bind()
	},
	_bind: function() {
		var T = this;
		T._watchSize = function() {
			var cF = T.getSize();
			if (T.width != cF.width || T.height != cF.height) {
				var cH = new aC(T.width, T.height);
				var cJ = new ba("onbeforeresize");
				cJ.size = cH;
				T.dispatchEvent(cJ);
				T._updateCenterPoint((cF.width - T.width) / 2, (cF.height - T.height) / 2);
				T.maskLayer.style.width = (T.width = cF.width) + "px";
				T.maskLayer.style.height = (T.height = cF.height) + "px";
				var cG = new ba("onresize");
				cG.size = cF;
				T.dispatchEvent(cG);
				var cE = parseInt(T.platform.style.left) || 0;
				var cI = parseInt(T.platform.style.top) || 0;
				if (T.currentOperation != 0 && (T.offsetX != cE || T.offsetY != cI)) {
					T._setPlatformPosition(cE, cI)
				}
			}
		};
		a2.on(T.maskLayer, "mouseover",
		function(cE) {
			T.dispatchEvent(new ba("onmouseover"))
		});
		a2.on(T.maskLayer, "mouseout",
		function(cE) {
			T.dispatchEvent(new ba("onmouseout"))
		})
	},
	_setPlatformPosition: function(T, cG, cE, cF) {
		if (isNaN(T) || isNaN(cG)) {
			return
		}
		if (this.offsetX == T && this.offsetY == cG) {
			return
		}
		this._updateCenterPoint(this.offsetX - T, this.offsetY - cG, cE);
		T = Math.round(T);
		cG = Math.round(cG);
		this.offsetX = T;
		this.offsetY = cG;
		this.platform.style.left = T + "px";
		this.platform.style.top = cG + "px";
		this.maskLayer.style.left = -T + "px";
		this.maskLayer.style.top = -cG + "px";
		if (cF != false) {
			this.dispatchEvent(new ba("onmoving"))
		}
	},
	panTo: function(cE, cG) {
		if (! (cE instanceof b6)) {
			return
		}
		var cF = this.pointToPixel(cE);
		var T = Math.round(this.width / 2);
		var cH = Math.round(this.height / 2);
		cG = cG || {};
		if (Math.abs(T - cF.x) > this.width || Math.abs(cH - cF.y) > this.height || cG.noAnimation) {
			this._panTo(T - cF.x, cH - cF.y, cE)
		} else {
			this._panBy(T - cF.x, cH - cF.y, {
				duration: cG.duration
			})
		}
	},
	_panTo: function(cE, T, cG) {
		var cF = this.temp;
		if (cF.operating == true) {
			return
		}
		if (cF.dragAni) {
			cF.dragAni.stop()
		}
		this.dispatchEvent(new ba("onmovestart"));
		this._setPlatformPosition(this.offsetX + cE, this.offsetY + T, cG);
		this.dispatchEvent(new ba("onmoveend"))
	},
	panBy: function(cE, T, cF) {
		cE = Math.round(cE) || 0;
		T = Math.round(T) || 0;
		cF = cF || {};
		if (Math.abs(cE) <= this.width && Math.abs(T) <= this.height && (!cF.noAnimation)) {
			this._panBy(cE, T)
		} else {
			this._panTo(cE, T)
		}
	},
	_panBy: function(cE, T, cH) {
		if (this.temp.operating == true) {
			return
		}
		cH = cH || {};
		this.dispatchEvent(new ba("onmovestart"));
		var cG = this,
		cF = cG.temp;
		cF.pl = cG.offsetX;
		cF.pt = cG.offsetY;
		if (cF.tlPan) {
			cF.tlPan.cancel()
		}
		if (cF.dragAni) {
			cF.dragAni.stop()
		}
		cF.tlPan = new g({
			fps: cH.fps || cG.config.fps,
			duration: cH.duration || cG.config.actionDuration,
			transition: cH.transition || ar.easeInOutQuad,
			render: function(cI) {
				this.terminative = cG.temp.operating;
				if (cG.temp.operating) {
					return
				}
				cG._setPlatformPosition(cF.pl + Math.ceil(cE * cI), cF.pt + Math.ceil(T * cI))
			},
			finish: function(cI) {
				cG.dispatchEvent(new ba("onmoveend"));
				cG.temp.tlPan = false;
				if (cG.temp.stopArrow == true) {
					cG.temp.stopArrow = false;
					if (cG.temp.arrow != 0) {
						cG._arrow()
					}
				}
			}
		})
	}
});