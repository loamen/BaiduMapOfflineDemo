a2.extend(J.prototype, {
	_asyncDraw: function() {
		if (this._map) {
			this._i(this._map)
		}
	},
	initialize: function(T) {
		ci.prototype.initialize.call(this, T);
		this._initParam();
		this._setParam();
		this._render();
		this._bind();
		this._setSliderZoomLv(T.getZoom());
		this._bindMapEvent(T);
		return this._container
	},
	_initParam: function() {
		if (this._init) {
			return
		}
		this._init = true;
		this._maxTotalZoomLv = 19;
		this._minZoomLevel = -1;
		this._maxZoomLevel = -1;
		this._totalZoomLv = -1;
		this._sliderInterval = 6;
		this._minBarY = 1;
		this._maxBarY = -1;
		this._curBarY = -1;
		this._zoomDom = null;
		this._zoomBtnDom = null;
		this._sliderDom = null;
		this._sliderBaseDom = null;
		this._cZIndex = "1100"
	},
	_bindMapEvent: function(cE) {
		var T = this;
		cE.addEventListener("zoomend",
		function(cF) {
			if (!T._map) {
				return
			}
			T._setSliderZoomLv(T._map.getZoom());
			if (T._msover) {
				return
			}
			if (T._isShowLevelHint) {
				T._hideTimerId = setTimeout(function() {
					T._hideLevelHint()
				},
				1000)
			}
		});
		cE.addEventListener("mousewheel",
		function() {
			if (!T._map) {
				return
			}
			if (T._map.config.enableWheelZoom && T._isShowLevelHint) {
				if (T._hideTimerId) {
					clearTimeout(T._hideTimerId);
					T._hideTimerId = null
				}
				T._showLevelHint()
			}
		});
		cE.addEventListener("load",
		function(cF) {
			if (!T._map) {
				return
			}
			T._setSliderZoomLv(T._map.getZoom())
		});
		cE.addEventListener("maptypechange",
		function(cF) {
			if (!T._map) {
				return
			}
			T.redraw()
		});
		cE.addEventListener("zoomspanchange",
		function(cF) {
			if (!T._map) {
				return
			}
			T.redraw()
		})
	},
	redraw: function() {
		this._setParam();
		this.setType(this._opts.type);
		if (this._map) {
			this._setSliderZoomLv(this._map.getZoom())
		}
	},
	_setParam: function() {
		var T = this._map.getMapType();
		this._minZoom = this._map.config.minZoom;
		this._maxZoom = this._map.config.maxZoom;
		if (T == BMAP_PERSPECTIVE_MAP || this._minZoom != T.getMinZoom() || this._maxZoom != T.getMaxZoom()) {
			this._isShowLevelHint = false
		} else {
			this._isShowLevelHint = true
		}
		if (this._container) {
			this._container.style.width = this._getControlHeight(0).width + "px"
		}
		if (!this._opts.showZoomInfo) {
			this._isShowLevelHint = false
		}
		this._totalZoomLv = this._maxZoom - this._minZoom + 1;
		this._maxBarY = this._minBarY + (this._totalZoomLv - 1) * this._sliderInterval
	},
	_render: function() {
		ci.prototype._render.call(this);
		var cF = a2.browser.ie == 6 ? " BMap_ie6": "";
		var cE = " BMap_stdMpType" + this._opts.type;
		var cG = this._container;
		a2.dom.addClass(cG, "BMap_stdMpCtrl");
		a2.dom.addClass(cG, cF);
		a2.dom.addClass(cG, cE);
		cG.innerHTML = this._generateHtml(this._opts.type);
		this._setSliderBarCursor(a2.browser.opera ? "pointer": b5.defaultCursor);
		this._panBtnContainer = a2.g(cG.children[0]);
		this._zoomDom = a2.g(cG.children[1]);
		var T = this._zoomDom;
		this._btnZoomIn = a2.g(T.children[0]);
		this._btnZoomOut = a2.g(T.children[1]);
		this._sliderDom = a2.g(T.children[2]);
		this._sliderBaseDom = a2.g(T.children[2].children[0]);
		this._sliderBotDom = a2.g(T.children[2].children[1]);
		this.setType(this._opts.type)
	},
	_setSliderHeight: function() {
		var cL = this._opts.type;
		var T = this._getControlHeight(cL);
		var cJ = T.width;
		var cE = T.height;
		var cH = T.zoomHeight;
		var cK = T.zoomWidth;
		var cF = T.sliderHeight;
		var cI = T.sliderCHeight;
		var cG = (this._maxTotalZoomLv - this._totalZoomLv) * this._sliderInterval;
		if (this._opts.type == BMAP_NAVIGATION_CONTROL_LARGE) {
			cE = cE - cG >= 0 ? cE - cG: 0;
			cH = cH - cG >= 0 ? cH - cG: 0;
			cF = cF - cG >= 0 ? cF - cG: 0
		}
		this._container.style.width = cJ + "px";
		this._container.style.height = cE + "px";
		this._zoomDom.style.height = cH + "px";
		this._zoomDom.style.width = cJ + "px";
		this._btnZoomOut.style.top = cH - 21 + "px";
		this._sliderDom.style.height = cF + "px";
		this._sliderBaseDom.style.height = cF + "px";
		if (this._opts.type == BMAP_NAVIGATION_CONTROL_ZOOM) {
			this._zoomDom.children[0].style.left = this._zoomDom.children[1].style.left = "0"
		} else {
			this._zoomDom.children[0].style.left = this._zoomDom.children[1].style.left = ""
		}
	},
	_getControlHeight: function(cE) {
		var T = 62;
		if (!this._opts.showZoomInfo || this._map.getMapType() == BMAP_PERSPECTIVE_MAP) {
			T = 37
		}
		var cF = [{
			width: T,
			height: 204,
			zoomHeight: 159,
			zoomWidth: 37,
			sliderHeight: 120,
			sliderCHeight: 120
		},
		{
			width: 37,
			height: 97,
			zoomHeight: 42,
			zoomWidth: 37,
			sliderHeight: 0,
			sliderCHeight: 0
		},
		{
			width: 37,
			height: 57,
			zoomHeight: 0,
			zoomWidth: 0,
			sliderHeight: 0,
			sliderCHeight: 0
		},
		{
			width: 22,
			height: 42,
			zoomHeight: 42,
			zoomWidth: 18,
			sliderHeight: 0,
			sliderCHeight: 0
		}];
		return cF[cE]
	},
	_generateHtml: function() {
		var T = [];
		T.push(this._generatePanHtml());
		T.push(this._generateZoomContainerHtml());
		return T.join("")
	},
	_generatePanHtml: function() {
		var T = '<div class="BMap_stdMpPan"><div class="BMap_button BMap_panN" title="向上平移"></div><div class="BMap_button BMap_panW" title="向左平移"></div><div class="BMap_button BMap_panE" title="向右平移"></div><div class="BMap_button BMap_panS" title="向下平移"></div><div class="BMap_stdMpPanBg BMap_smcbg"></div></div>';
		return T
	},
	_generateZoomContainerHtml: function() {
		var T = '<div class="BMap_stdMpZoom">' + this._generateZoomHtml() + this._generateSliderHtml() + this._generateZoomBalloonHtml() + "</div>";
		return T
	},
	_generateZoomHtml: function() {
		var T = '<div class="BMap_button BMap_stdMpZoomIn" title="放大一级"><div class="BMap_smcbg"></div></div><div class="BMap_button BMap_stdMpZoomOut" title="缩小一级"><div class="BMap_smcbg"></div></div>';
		return T
	},
	_generateSliderHtml: function() {
		var T = '<div class="BMap_stdMpSlider"><div class="BMap_stdMpSliderBgTop"><div class="BMap_smcbg"></div></div><div class="BMap_stdMpSliderBgBot"></div><div class="BMap_stdMpSliderMask" title="放置到此级别"></div><div class="BMap_stdMpSliderBar" title="拖动缩放"><div class="BMap_smcbg"></div></div></div>';
		return T
	},
	_generateZoomBalloonHtml: function() {
		var T = '<div class="BMap_zlHolder"><div class="BMap_zlSt"><div class="BMap_smcbg"></div></div><div class="BMap_zlCity"><div class="BMap_smcbg"></div></div><div class="BMap_zlProv"><div class="BMap_smcbg"></div></div><div class="BMap_zlCountry"><div class="BMap_smcbg"></div></div></div>';
		return T
	},
	_getElementByClassNamePattern: function(cH) {
		var cG = this._getElementByClassNamePattern;
		if (typeof(cG.cache) === "undefined") {
			cG.cache = me._container.getElementsByTagName("*")
		}
		var cE = cG.cache,
		cF = null,
		T = cE.length,
		cI = null;
		for (cF = 0; cF < T; ++cF) {
			cI = cE[cF];
			if (cI.className.toString().match(cH)) {
				return cI
			}
		}
		throw Error(String(cH) + " Not found!")
	},
	setType: function(T) {
		if (aF(T) && T >= BMAP_NAVIGATION_CONTROL_LARGE && T <= BMAP_NAVIGATION_CONTROL_ZOOM) {
			this._opts.type = T
		} else {
			this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE
		}
		if (!this._map || !this._container) {
			return
		}
		var cE = this._container;
		cE.className = cE.className.replace(/BMap_stdMpType[0-3]*/, "BMap_stdMpType" + this._opts.type);
		this._setSliderHeight();
		if (T != BMAP_NAVIGATION_CONTROL_LARGE) {
			a2.dom.removeClass(cE.children[1].children[2], "hvr")
		}
		this.setAnchor(this._opts.anchor)
	},
	getType: function() {
		return this._opts.type
	},
	_bind: function() {
		var cK = this;
		var cJ = cK._container;
		a2.on(this._zoomDom, "mouseover",
		function() {
			if (!cK._isShowLevelHint) {
				return
			}
			cK._msover = true;
			if (cK._hideTimerId) {
				clearTimeout(cK._hideTimerId);
				cK._hideTimerId = null
			}
			cK._showLevelHint()
		});
		a2.on(this._zoomDom, "mouseout",
		function() {
			if (!cK._isShowLevelHint) {
				return
			}
			if (cK._hideTimerId) {
				clearTimeout(cK._hideTimerId)
			}
			cK._msover = false;
			cK._hideTimerId = setTimeout(function() {
				cK._hideLevelHint();
				cK._hideTimerId = null
			},
			1000)
		});
		a2.on(cJ.children[0], "mouseover",
		function() {
			cK._hideLevelHint(true)
		});
		a2.on(cJ.children[0].children[0], "click",
		function() {
			cK._panBy(0, Math.round(cK._map.height / 3))
		});
		a2.on(cJ.children[0].children[1], "click",
		function() {
			cK._panBy(Math.round(cK._map.width / 3), 0)
		});
		a2.on(cJ.children[0].children[2], "click",
		function() {
			cK._panBy( - Math.round(cK._map.width / 3), 0)
		});
		a2.on(cJ.children[0].children[3], "click",
		function() {
			cK._panBy(0, -Math.round(cK._map.height / 3))
		});
		a2.on(cJ.children[0].children[0], "mouseover",
		function() {
			cK._panBtnContainer.style.backgroundPosition = "0 -44px"
		});
		a2.on(cJ.children[0].children[1], "mouseover",
		function() {
			cK._panBtnContainer.style.backgroundPosition = "0 -176px"
		});
		a2.on(cJ.children[0].children[2], "mouseover",
		function() {
			cK._panBtnContainer.style.backgroundPosition = "0 -88px"
		});
		a2.on(cJ.children[0].children[3], "mouseover",
		function() {
			cK._panBtnContainer.style.backgroundPosition = "0 -132px"
		});
		a2.on(cK._panBtnContainer, "mouseout",
		function() {
			cK._panBtnContainer.style.backgroundPosition = "0 0"
		});
		var cH = cJ.children[1].children;
		a2.on(cH[0], "click",
		function() {
			cK._zoomIn()
		});
		a2.on(cH[1], "click",
		function() {
			cK._zoomOut()
		});
		for (var cF = 0; cF < 5; cF++) {
			a2.on(cJ.children[0].children[cF], "mouseup",
			function(cM) {
				if ((cK._map.currentOperation & bh.stdMapCtrlDrag) == 0 && (cK._map.currentOperation & bh.drag) == 0) {
					aK(cM)
				}
			});
			a2.on(cJ.children[0].children[cF], "contextmenu",
			function(cM) {
				cv(cM)
			});
			a2.on(cJ.children[0].children[cF], "click",
			function(cM) {
				cv(cM)
			})
		}
		a2.on(cH[0], "mouseup",
		function(cM) {
			if ((cK._map.currentOperation & bh.stdMapCtrlDrag) == 0 && (cK._map.currentOperation & bh.drag) == 0) {
				aK(cM)
			}
		});
		a2.on(cH[1], "mouseup",
		function(cM) {
			if ((cK._map.currentOperation & bh.stdMapCtrlDrag) == 0 && (cK._map.currentOperation & bh.drag) == 0) {
				aK(cM)
			}
		});
		a2.on(cH[0], "contextmenu",
		function(cM) {
			cv(cM)
		});
		a2.on(cH[1], "contextmenu",
		function(cM) {
			cv(cM)
		});
		var cL = cJ.children[1].children[2].children[2];
		a2.on(cL, "mouseup",
		function(cM) {
			if ((cK._map.currentOperation & bh.stdMapCtrlDrag) == 0 && (cK._map.currentOperation & bh.drag) == 0) {
				aK(cM)
			}
		});
		a2.on(cH[0], "click",
		function(cM) {
			aK(cM)
		});
		a2.on(cH[1], "click",
		function(cM) {
			aK(cM)
		});
		a2.on(cH[0], "mouseover",
		function() {
			cH[0].style.backgroundPosition = "0 -243px"
		});
		a2.on(cH[0], "mouseout",
		function() {
			if ((cK._map.currentOperation & bh.stdMapCtrlDrag) == 0) {
				cH[0].style.backgroundPosition = "0 -221px"
			}
		});
		a2.on(cH[1], "mouseover",
		function() {
			cH[1].style.backgroundPosition = "0 -287px"
		});
		a2.on(cH[1], "mouseout",
		function() {
			if ((cK._map.currentOperation & bh.stdMapCtrlDrag) == 0) {
				cH[1].style.backgroundPosition = "0 -265px"
			}
		});
		a2.on(cL, "click",
		function(cM) {
			aK(cM)
		});
		var cI = cJ.children[1].children[2].children[3];
		a2.on(cI, "mouseup",
		function(cM) {
			if (cM.button == 2) {
				aK(cM)
			}
		});
		a2.on(cI, "contextmenu",
		function(cM) {
			cv(cM)
		});
		a2.on(this._zoomDom.children[3].children[0], "click",
		function(cM) {
			cK._map.zoomTo(18)
		});
		a2.on(this._zoomDom.children[3].children[1], "click",
		function(cM) {
			cK._map.zoomTo(12)
		});
		a2.on(this._zoomDom.children[3].children[2], "click",
		function(cM) {
			cK._map.zoomTo(8)
		});
		a2.on(this._zoomDom.children[3].children[3], "click",
		function(cM) {
			cK._map.zoomTo(4)
		});
		a2.on(cL, "mousedown",
		function(cN) {
			cN = window.event || cN;
			var cM = cN.layerY || cN.offsetY || 0;
			var cO = 0;
			cO = (cK._maxZoom + 1) - Math.round(cK._totalZoomLv * parseFloat(cM / (cK._totalZoomLv * cK._sliderInterval)));
			cK._map.zoomTo(cO)
		});
		a2.on(cI, "mouseover",
		function() {
			a2.dom.addClass(cI, "h")
		});
		a2.on(cI, "mouseout",
		function() {
			if ((cK._map.currentOperation & bh.stdMapCtrlDrag) == 0) {
				a2.dom.removeClass(cI, "h")
			}
		});
		var cG = function(cM) {
			var cM = window.event || cM;
			if (cM.button == 2) {
				return
			}
			if ((a2.browser.ie && cM.button != 1)) {
				return
			}
			if (cI.setCapture) {
				cI.setCapture()
			}
			cK._map.currentOperation |= bh.stdMapCtrlDrag;
			cK._bind.my = cM.pageY || cM.clientY || 0;
			if (!a2.browser.opera) {
				cK._setSliderBarCursor(b5.draggingCursor)
			}
			a2.on(document, "mousemove", T);
			a2.on(document, "mouseup", cE);
			aK(cM);
			return cv(cM)
		};
		var T = function(cN) {
			if ((cK._map.currentOperation & bh.stdMapCtrlDrag) != 0) {
				var cN = window.event || cN;
				var cO = cN.pageY || cN.clientY;
				var cM = cK._curBarY + cO - cK._bind.my;
				if (cM < cK._minBarY) {
					cM = cK._minBarY
				} else {
					if (cM > cK._maxBarY) {
						cM = cK._maxBarY
					}
				}
				cI.style.top = cM + "px";
				cK._sliderBotDom.style.top = cM + "px";
				cK._sliderBotDom.style.height = parseInt(cK._sliderBaseDom.style.height) - cM + 4 + "px"
			}
		};
		var cE = function(cN) {
			if ((cK._map.currentOperation & bh.stdMapCtrlDrag) != 0) {
				var cM = a2.g(cI);
				cK._curBarY = parseInt(cM.style.top);
				a2.dom.removeClass(cI, "h");
				cK._map.currentOperation &= ~bh.stdMapCtrlDrag;
				if (cJ && cI && cI.releaseCapture) {
					cI.releaseCapture()
				}
				if (!a2.browser.opera) {
					cK._setSliderBarCursor(b5.defaultCursor)
				}
				var cO = (cK._maxZoom + 1) - Math.round(parseFloat(cK._curBarY - cK._minBarY) / parseFloat(cK._maxBarY - cK._minBarY) * (cK._totalZoomLv - 1) + 1);
				cK._map.zoomTo(cO);
				a2.un(document, "mousemove", T);
				a2.un(document, "mouseup", cE)
			}
		};
		a2.on(cI, "mousedown", cG)
	},
	_setSliderBarCursor: function(T) {
		this._container.children[1].children[2].children[3].style.cursor = T
	},
	_panBy: function(cE, T) {
		this._map.panBy(cE, T)
	},
	_zoomIn: function() {
		this._map.zoomIn()
	},
	_zoomOut: function() {
		this._map.zoomOut()
	},
	_setSliderZoomLv: function(cE) {
		if (!this._container || this.getType() != BMAP_NAVIGATION_CONTROL_LARGE) {
			return
		}
		var T = (this._maxZoom - cE) * this._sliderInterval + this._minBarY;
		this._curBarY = T > this._maxBarY ? this._maxBarY: T < this._minBarY ? this._minBarY: T;
		this._container.children[1].children[2].children[3].style.top = this._curBarY + "px";
		this._sliderBotDom.style.top = this._curBarY + "px";
		this._sliderBotDom.style.height = parseInt(this._sliderBaseDom.style.height) - this._curBarY + 4 + "px"
	},
	_hideLevelHint: function(T) {
		if (this._opts.type == 0) {
			a2.dom.removeClass(this._container.children[1].children[3], "hvr")
		}
		if (T && this._hideTimerId) {
			clearTimeout(this._hideTimerId);
			this._hideTimerId = null
		}
	},
	_showLevelHint: function() {
		if (this._opts.type == 0 && this._opts.showZoomInfo) {
			a2.dom.addClass(this._container.children[1].children[3], "hvr")
		}
	},
	show: function() {
		ci.prototype.show.call(this);
		if (a2.browser.ie < 8) {
			var T = this;
			setTimeout(function() {
				T.setType(T._opts.type)
			},
			1)
		}
	}
});
a2.extend(aj.prototype, {
	_asyncDraw: function() {
		if (this._map) {
			this._i(this._map)
		}
	},
	initialize: function(T) {
		ci.prototype.initialize.call(this, T);
		this._render();
		this._updateState();
		this._bind(T);
		return this._container
	},
	_bind: function(cE) {
		var T = this;
		cE.addEventListener("load",
		function(cF) {
			T._updateState()
		});
		cE.addEventListener("moveend",
		function(cF) {
			T._updateState()
		});
		cE.addEventListener("zoomend",
		function(cF) {
			T._updateState()
		});
		cE.addEventListener("maptypechange",
		function() {
			if (T._container) {
				T._container.style.color = T._map.getMapType().getTextColor()
			}
		})
	},
	_render: function() {
		ci.prototype._render.call(this);
		a2.dom.addClass(this._container, "BMap_cpyCtrl");
		var T = this._container.style;
		T.cursor = "default";
		T.whiteSpace = "nowrap";
		T.MozUserSelect = "none";
		T.color = this._map.getMapType().getTextColor();
		T.background = "none";
		T.font = "11px/15px " + b5.fontFamily;
		ci.prototype._setPosition.call(this)
	},
	_updateState: function() {
		if (!this._map || !this._container || this._copyrightCollection.length == 0) {
			return
		}
		for (var cH = 0,
		cF = this._copyrightCollection.length; cH < cF; cH++) {
			var cE;
			var T = this._map.getZoom();
			var cL = this._map.pixelToPoint({
				x: 0,
				y: 0
			});
			var cK = this._map.pixelToPoint({
				x: this._map.width,
				y: this._map.height
			});
			var cJ = new bG(cL, cK);
			if (this._copyrightCollection[cH].bounds && cJ.intersects(this._copyrightCollection[cH].bounds) == null) {
				cE = false
			} else {
				cE = true
			}
			if (cE) {
				if (this._container) {
					var cM = false;
					for (var cG = 0,
					cI = this._container.children.length; cG < cI; cG++) {
						if (this._container.children[cG].getAttribute("_cid") == this._copyrightCollection[cH].id) {
							cM = true;
							this._container.children[cG].style.display = "inline";
							if (this._container.children[cG].innerHTML != this._copyrightCollection[cH].content) {
								this._container.children[cG].innerHTML = this._copyrightCollection[cH].content
							}
							break
						}
					}
					if (!cM) {
						this._generateHTML(this._copyrightCollection[cH])
					}
				}
			} else {
				if (this._container) {
					for (var cG = 0; cG < this._container.children.length; cG++) {
						if (this._container.children[cG].getAttribute("_cid") == this._copyrightCollection[cH].id && this._container.children[cG].style.display != "none") {
							this._container.children[cG].style.display = "none";
							return
						}
					}
				}
			}
		}
	},
	addCopyright: function(cF) {
		if (!cF || !aF(cF.id) || isNaN(cF.id)) {
			return
		}
		var T = {
			bounds: null,
			content: ""
		};
		for (var cE in cF) {
			T[cE] = cF[cE]
		}
		var cG = this.getCopyright(cF.id);
		if (cG) {
			for (var cH in T) {
				cG[cH] = T[cH]
			}
		} else {
			this._copyrightCollection.push(T)
		}
		this._updateState()
	},
	getCopyright: function(cF) {
		for (var cE = 0,
		T = this._copyrightCollection.length; cE < T; cE++) {
			if (this._copyrightCollection[cE].id == cF) {
				return this._copyrightCollection[cE]
			}
		}
	},
	getCopyrightCollection: function() {
		return this._copyrightCollection
	},
	removeCopyright: function(cH) {
		var cF;
		for (var cE = 0,
		T = this._copyrightCollection.length; cE < T; cE++) {
			if (this._copyrightCollection[cE].id == cH) {
				cF = this._copyrightCollection.splice(cE, 1);
				cE--;
				T = this._copyrightCollection.length
			}
		}
		var cG = this.getDom(cH);
		if (cG && cG.parentNode) {
			cG.parentNode.removeChild(cG);
			cG = null
		}
		this._updateState();
		return cF
	},
	_generateHTML: function(T) {
		if (!this._container) {
			return
		}
		this._container.innerHTML += "<span _cid='" + T.id + "'>" + T.content + "</span>"
	},
	getDom: function(cG) {
		var cF = ci.prototype.getDom.call(this);
		if (!ca(cG)) {
			return cF
		} else {
			if (cF) {
				for (var cE = 0,
				T = cF.children.length; cE < T; cE++) {
					if (cF.children[cE].getAttribute("_cid") == cG) {
						return cF.children[cE]
					}
				}
			}
		}
	}
});
a2.object.extend(cD.prototype, {
	_asyncDraw: function() {
		if (this._map) {
			this._i(this._map)
		}
	},
	initialize: function(T) {
		ci.prototype.initialize.call(this, T);
		this._initParam();
		this._render();
		this._bind();
		this._initOverviewMap();
		a2.on(this._container, "click", aK);
		a2.on(this._container, "dblclick", aK);
		a2.on(this._container, "mousewheel", aK);
		a2.on(this._container, "mouseup",
		function(cE) {
			cE = window.event || cE;
			if (cE.button == 2) {
				aK(cE)
			}
		});
		if (window.addEventListener) {
			this._container.addEventListener("DOMMouseScroll",
			function(cE) {
				aK(cE)
			},
			true)
		}
		return this._container
	},
	_initParam: function() {
		if (this._init) {
			return
		}
		this._init = true;
		this._omCanvas;
		this._omMapContainer;
		this._omView;
		this._omViewMv;
		this._omBtn;
		this._borderWidth = 1;
		this._quad = 4;
		this._overviewMap = null;
		this._minZoom = -1;
		this._maxZoom = -1;
		this._curOMZoomLevel = -1;
		this._wRatio = 1;
		this._hRatio = 1;
		this._temp = {};
		this._currentOp = "";
		this._overviewInitialized = false
	},
	_getCurOMZoomLevel: function() {
		if (!this._map) {
			return
		}
		var T = this._map.zoomLevel;
		var cE = T - this._opts.zoomInterval;
		if (cE < this._minZoom) {
			return this._minZoom
		} else {
			if (cE > this._maxZoom) {
				return this._maxZoom
			} else {
				return cE
			}
		}
		return - 1
	},
	_render: function() {
		ci.prototype._render.call(this);
		var T = a2.browser.ie != false ? " BMap_ie" + a2.browser.ie: "";
		var cE = this._container;
		cE.innerHTML = this._generateHTML();
		a2.dom.addClass(cE, "BMap_omCtrl" + T);
		this._omCanvas = cE.children[0].children[0];
		this._omMapContainer = this._omCanvas.children[0];
		this._omViewMv = this._omCanvas.children[1];
		this._omViewMvInn = this._omViewMv.children[0];
		this._omBtn = cE.children[1];
		this.setSize(this._opts.size);
		this._omViewMv.style.cursor = b5.defaultCursor
	},
	_generateHTML: function() {
		var T = ['<div class="BMap_omOutFrame"><div class="BMap_omInnFrame">', '<div class="BMap_omMapContainer"></div>', '<div class="BMap_omViewMv"><div class="BMap_omViewInnFrame"><div></div></div></div>', '</div></div><div class="BMap_omBtn"></div>'];
		return T.join("")
	},
	_bind: function() {
		var T = this;
		a2.on(this._omBtn, "click",
		function() {
			T.changeView()
		});
		if (a2.browser.ie) {
			a2.on(this._omBtn, "dblclick",
			function() {
				T.changeView()
			})
		}
		if (!a2.browser.ie || a2.browser.ie > 6) {
			this._omBtn.onmouseover = function(cE) {
				a2.dom.addClass(T._omBtn, "hover")
			};
			this._omBtn.onmouseout = function(cE) {
				a2.dom.removeClass(T._omBtn, "hover")
			}
		}
		a2.on(this._omViewMv, "mousedown",
		function(cE) {
			if (T._omViewMv && ca(T._omViewMv._drag) && T._omViewMv._drag == "true") {
				return
			}
			cE = window.event || cE;
			if (cE.button == 2) {
				return
			}
			T._omViewMv._drag = "true";
			var cE = window.event || cE;
			if (T._omViewMv.setCapture) {
				T._omViewMv.setCapture()
			}
			T._bind.iniX = parseInt(aE(T._omViewMv).left);
			T._bind.iniY = parseInt(aE(T._omViewMv).top);
			T._bind.mx = cE.pageX || cE.clientX;
			T._bind.my = cE.pageY || cE.clientY;
			T._bind.i = 0;
			T._bind.j = 0;
			T._setViewMvCursor(b5.draggingCursor);
			aK(cE);
			return cv(cE)
		});
		a2.on(document, "mousemove",
		function(cK) {
			if (T._omViewMv && T._omViewMv._drag == "true") {
				var cK = window.event || cK;
				var cE = cK.pageX || cK.clientX;
				var cL = cK.pageY || cK.clientY;
				T._bind.curX = T._bind.iniX + cE - T._bind.mx;
				T._bind.curY = T._bind.iniY + cL - T._bind.my;
				var cJ = 3;
				T._bind._moveX = 0;
				T._bind._moveY = 0;
				if (T._bind.curX <= 0) {
					T._bind._moveX = cJ
				}
				if (T._bind.curY <= 0) {
					T._bind._moveY = cJ
				}
				if (T._bind.curX + T._omViewMv.offsetWidth >= T._overviewMap.width) {
					T._bind._moveX = -cJ
				}
				if (T._bind.curY + T._omViewMv.offsetHeight >= T._overviewMap.height) {
					T._bind._moveY = -cJ
				}
				T._omViewMv.style.left = T._bind.curX + "px";
				T._omViewMv.style.top = T._bind.curY + "px";
				if ((T._bind._moveX != 0 || T._bind._moveY != 0) && !T._bind.intervalId) {
					T._bind._mapMoving = true;
					var cI = T._overviewMap.offsetX;
					var cG = T._overviewMap.offsetY;
					var cH = cI + T._bind._moveX;
					var cF = cG + T._bind._moveY;
					T._overviewMap._setPlatformPosition(cH, cF);
					T._bind.intervalId = setInterval(function() {
						var cN = T._bind._moveX != 0 ? (T._bind._moveX > 0 ? T._bind.i += cJ: T._bind.i -= cJ) : T._bind.i;
						var cM = T._bind._moveY != 0 ? (T._bind._moveY > 0 ? T._bind.j += cJ: T._bind.j -= cJ) : T._bind.j;
						T._overviewMap._setPlatformPosition(cH + cN, cF + cM)
					},
					30)
				}
				if (T._bind._moveX == 0 && T._bind._moveY == 0) {
					clearInterval(T._bind.intervalId);
					delete T._bind.intervalId;
					T._bind.i = 0;
					T._bind.j = 0
				}
				aK(cK);
				return cv(cK)
			}
		});
		a2.on(document, "mouseup",
		function(cH) {
			if (T._omViewMv && T._omViewMv._drag == "true") {
				T._omViewMv._drag = "";
				T._setViewMvCursor(b5.defaultCursor);
				if (T._omViewMv.releaseCapture) {
					T._omViewMv.releaseCapture()
				}
				if (T._bind.initX == T._bind.curX && T._bind.initY == T._bind.curY) {
					aK(cH);
					return cv(cH)
				}
				T._currentOp = "dragView";
				T._overviewMap.config.enableMouseDown = false;
				T._map.temp.operating = true;
				if (!ca(T._bind.curX) || !ca(T._bind.curY)) {
					return
				}
				var cG = T._bind.curX + parseInt(T._omViewMv.style.width) / 2 + 1;
				var cF = T._bind.curY + parseInt(T._omViewMv.style.height) / 2 + 1;
				delete T._bind.curX;
				delete T._bind.curY;
				var cE = T._overviewMap.pixelToPoint({
					x: cG,
					y: cF
				},
				T._overviewMap.zoomLevel);
				T._map.temp.operating = false;
				if (T._bind._mapMoving == true) {
					clearInterval(T._bind.intervalId);
					delete T._bind.intervalId;
					T._bind._mapMoving = false
				}
				T._map.temp.operating = true;
				setTimeout(function() {
					T._map.temp.operating = false;
					T._map.panTo(cE)
				},
				50);
				aK(cH);
				return cv(cH)
			}
		})
	},
	_initOverviewMap: function() {
		if (this._overviewInitialized == true) {
			return
		}
		var cF = this;
		var cG = cF._map;
		cG.addEventListener("resize",
		function() {
			if (cF._overviewMap != null) {
				cF._overviewMap.setCenter(cG.getCenter())
			}
			if (cF._omView != null) {
				cF._omView.setPosition(cG.getCenter());
				cF._setRatio()
			}
			cF.setAnchor(cF._opts.anchor)
		});
		if (this._opts.isOpen == false) {
			return
		}
		if (!this._binded) {
			cG.addEventListener("loadcode",
			function() {
				cF._onMainZoomEnd()
			});
			cG.addEventListener("moving",
			function() {
				cF._moveView()
			});
			cG.addEventListener("moveend",
			function(cH) {
				cF._onMainMoveEnd(cH)
			});
			cG.addEventListener("zoomend",
			function(cH) {
				cF._onMainZoomEnd(cH)
			});
			cG.addEventListener("maptypechange",
			function(cH) {
				cF._setRatio()
			});
			this._binded = true
		}
		var T = cG.getCenter();
		this._minZoom = BMAP_NORMAL_MAP.getMinZoom();
		this._maxZoom = BMAP_NORMAL_MAP.getMaxZoom();
		this._curOMZoomLevel = this._getCurOMZoomLevel();
		this._overviewMap = new bt(this._omMapContainer, {
			isOverviewMap: true
		});
		this._overviewMap.disableDoubleClickZoom();
		this._overviewMap.centerAndZoom(T, this._curOMZoomLevel);
		this._omView = new l({
			point: cG.getCenter(),
			lineStroke: 1,
			lineColor: "#6688cc"
		});
		this._overviewMap.addOverlay(this._omView);
		this._omView.getContainer().innerHTML = '<div class="BMap_omViewInnFrame"><div class="BMap_omViewMask"></div></div>';
		this._omViewInn = this._omView.getContainer().children[0];
		var cE = this._omView.getContainer().style;
		cE.borderLeftColor = "#84b0df";
		cE.borderTopColor = "#adcff4";
		cE.borderRightColor = "#274b8b";
		cE.borderBottomColor = "#274b8b";
		this._setRatio();
		this._overviewMap.addEventListener("dragend",
		function() {
			cF._currentOp = "dragMap";
			cG.panTo(cF._overviewMap.getCenter())
		});
		this._overviewMap.addEventListener("moveend",
		function() {
			cF._onViewMapMoveEnd()
		});
		this._overviewMap.addEventListener("mousedown",
		function(cH) {
			cF._temp._downX = cH.offsetX;
			cF._temp._downY = cH.offsetY
		});
		this._overviewMap.addEventListener("resize",
		function(cH) {
			if (cF._map && cF._overviewMap) {
				cF._overviewMap.setCenter(cF._map.getCenter())
			}
			cF._setRatio()
		});
		this._overviewInitialized = true
	},
	_setViewMvCursor: function(T) {
		this._omViewMv.style.cursor = T
	},
	setAnchor: function(cH) {
		ci.prototype.setAnchor.call(this, cH);
		if (!this._map) {
			return
		}
		if (a2.browser.ie) {
			var cK = this._map.width;
			var cG = this._map.height;
			var cE = this._opts.size.width;
			var cI = this._opts.size.height;
			var cF = this._opts.offset.width;
			var T = this._opts.offset.height;
			if (this._opts.isOpen == false) {
				cE = this._btnWidth;
				cI = this._btnHeight
			}
			var cJ = this._container;
			switch (cH) {
			case BMAP_ANCHOR_TOP_RIGHT:
				cJ.style.right = "auto";
				cJ.style.left = cK - cE - cF + "px";
				break;
			case BMAP_ANCHOR_BOTTOM_LEFT:
				cJ.style.bottom = "auto";
				cJ.style.top = cG - cI - T + "px";
				break;
			case BMAP_ANCHOR_BOTTOM_RIGHT:
				cJ.style.bottom = "auto";
				cJ.style.right = "auto";
				cJ.style.top = cG - cI - T + "px";
				cJ.style.left = cK - cE - cF + "px";
				break;
			default:
				break
			}
		}
		this._setQuad();
		this._redraw()
	},
	changeView: function() {
		this.changeView._running = true;
		this._opts.isOpen = !this._opts.isOpen;
		if (!this._container) {
			this.changeView._running = false;
			return
		}
		var cI = this._container;
		var T = this._opts.size.width;
		var cF = this._opts.size.height;
		var cH = this._btnWidth;
		var cE = this._btnHeight;
		var cG = this;
		if (!this._opts.isOpen) {
			this.changeView._preBtnTop = this._omBtn.style.top;
			this.changeView._preBtnLeft = this._omBtn.style.left;
			new g({
				fps: 25,
				duration: 120,
				transition: ar.easeInCubic,
				render: function(cJ) {
					cI.style.width = (T - Math.ceil((T - cH) * cJ)) + "px";
					cI.style.height = (cF - Math.ceil((cF - cE) * cJ)) + "px";
					if (a2.browser.ie) {
						cG._omBtn.style.top = (cG._quad == 3 || cG._quad == 4) ? parseInt(cI.style.height) - cE + "px": "0";
						cG._omBtn.style.left = (cG._quad == 1 || cG._quad == 4) ? parseInt(cI.style.width) - cH + "px": "0";
						if (cG._opts.anchor >= 0 && cG._opts.anchor <= BMAP_ANCHOR_BOTTOM_RIGHT) {
							if (cG._quad == 3 || cG._quad == 4) {
								cI.style.top = cG._map.height - parseInt(cI.style.height) - cG._opts.offset.height + "px"
							}
							if (cG._quad == 1 || cG._quad == 4) {
								cI.style.left = cG._map.width - parseInt(cI.style.width) - cG._opts.offset.width + "px"
							}
						}
					}
					cG.dispatchEvent(new ba("onviewchanging"))
				},
				finish: function() {
					if (a2.browser.ie) {
						cG._omBtn.style.left = "0";
						cG._omBtn.style.top = "0";
						if (cG._opts.anchor >= 0 && cG._opts.anchor <= BMAP_ANCHOR_BOTTOM_RIGHT) {
							if (cG._quad == 3 || cG._quad == 4) {
								cI.style.top = cG._map.height - cG._btnHeight - cG._opts.offset.height + "px"
							}
							if (cG._quad == 1 || cG._quad == 4) {
								cI.style.left = cG._map.width - cG._btnWidth - cG._opts.offset.width + "px"
							}
						}
					}
					cG._redraw();
					a2.dom.addClass(cG._omBtn, "BMap_omBtnClosed");
					var cJ = new ba("onviewchanged");
					cJ.isOpen = cG._opts.isOpen;
					cG.dispatchEvent(cJ);
					cG.changeView._running = false
				}
			})
		} else {
			if (this._overviewInitialized == false) {
				this._initOverviewMap()
			}
			new g({
				fps: 40,
				duration: 120,
				transition: ar.easeOutCubic,
				render: function(cJ) {
					cI.style.width = (Math.ceil(T * cJ)) + "px";
					cI.style.height = (Math.ceil(cF * cJ)) + "px";
					if (a2.browser.ie) {
						cG._omBtn.style.top = (cG._quad == 3 || cG._quad == 4) ? parseInt(cI.style.height) - cE + "px": "0";
						cG._omBtn.style.left = (cG._quad == 1 || cG._quad == 4) ? parseInt(cI.style.width) - cH + "px": "0";
						if (cG._opts.anchor >= 0 && cG._opts.anchor <= BMAP_ANCHOR_BOTTOM_RIGHT) {
							if (cG._quad == 3 || cG._quad == 4) {
								cI.style.top = cG._map.height - parseInt(cI.style.height) - cG._opts.offset.height + "px"
							}
							if (cG._quad == 1 || cG._quad == 4) {
								cI.style.left = cG._map.width - parseInt(cI.style.width) - cG._opts.offset.width + "px"
							}
						}
					}
					cG.dispatchEvent(new ba("onviewchanging"))
				},
				finish: function() {
					if (cG._opts.anchor >= 0 && cG._opts.anchor <= BMAP_ANCHOR_BOTTOM_RIGHT) {
						if (a2.browser.ie) {
							if (cG._quad == 3 || cG._quad == 4) {
								cI.style.top = cG._map.height - cF - cG._opts.offset.height + "px"
							}
							if (cG._quad == 1 || cG._quad == 4) {
								cI.style.left = cG._map.width - T - cG._opts.offset.width + "px"
							}
						}
					}
					cG._redraw();
					cG._setBtnPosition();
					a2.dom.removeClass(cG._omBtn, "BMap_omBtnClosed");
					var cJ = new ba("onviewchanged");
					cJ.isOpen = cG._opts.isOpen;
					cG.dispatchEvent(cJ);
					cG.changeView._running = false
				}
			})
		}
	},
	_setRatio: function() {
		if (!this._map) {
			return
		}
		var cJ = this._map.zoomLevel;
		var cL = this._map.pixelToPoint({
			x: 0,
			y: 0
		},
		cJ);
		var cG = this._map.pixelToPoint({
			x: this._map.width,
			y: this._map.height
		},
		cJ);
		var cE = this._overviewMap.pixelToPoint({
			x: 0,
			y: 0
		},
		this._curOMZoomLevel);
		var cF = this._overviewMap.pixelToPoint({
			x: this._overviewMap.width,
			y: this._overviewMap.height
		},
		this._curOMZoomLevel);
		this._wRatio = (cG.lng - cL.lng) / (cF.lng - cE.lng);
		this._hRatio = (cG.lat - cL.lat) / (cF.lat - cE.lat);
		if (this._wRatio >= 1 || this._hRatio >= 1) {
			this._omViewMv.style.display = "none";
			this._omView.hide()
		} else {
			var cH = parseInt(this._overviewMap.width);
			var T = parseInt(this._overviewMap.height);
			var cK = Math.round(cH * this._wRatio);
			var cI = Math.round(T * this._hRatio);
			if (this._map.getMapType() == BMAP_PERSPECTIVE_MAP) {
				cI = T * 0.35
			}
			this._omView.show();
			this._omView.setDimension(cK, cI);
			this._omViewMv.style.display = ""
		}
		this._setOMViewMvPos()
	},
	_setOMViewMvPos: function() {
		if (!this._omView || !this._omView.getContainer()) {
			return
		}
		if (this._wRatio >= 1 || this._hRatio >= 1) {
			this._omViewMv.style.display = "none";
			return
		}
		var cE = this._omView.getContainer().style;
		this._omViewMv.style.display = "";
		this._omViewMv.style.width = cE.width;
		this._omViewMv.style.height = cE.height;
		var T = parseInt(cE.width) - 2;
		var cF = parseInt(cE.height) - 2;
		T = T < 0 ? 0 : T;
		cF = cF < 0 ? 0 : cF;
		this._omViewMvInn.style.width = T + "px";
		this._omViewMvInn.style.height = cF + "px";
		this._omViewInn.style.width = this._omViewMvInn.style.width;
		this._omViewInn.style.height = this._omViewMvInn.style.height;
		this._omViewMv.style.left = parseInt(cE.left) + this._overviewMap.offsetX + "px";
		this._omViewMv.style.top = parseInt(cE.top) + this._overviewMap.offsetY + "px"
	},
	setSize: function(cF) {
		if (! (cF instanceof aC)) {
			cF = new aC(150, 150)
		}
		var cE = cF.width;
		var cG = cF.height;
		cE = cE > 0 ? cE: 150;
		cG = cG > 0 ? cG: 150;
		cF.width = cE;
		cF.height = cG;
		this._opts.size = cF;
		if (!this._container) {
			return
		}
		if (this.changeView._running == true) {
			var T = arguments;
			var cH = this;
			setTimeout(function() {
				T.callee.call(cH, cF)
			},
			120);
			return
		}
		L(this._container, [cE, cG]);
		var cH = this;
		setTimeout(function() {
			if (cH._overviewMap && cH._map) {
				cH._overviewMap.setCenter(cH._map.getCenter())
			}
		},
		100);
		this.setAnchor(this._opts.anchor);
		this.dispatchEvent(new ba("resize"))
	},
	setOffset: function(T) {
		if (! (T instanceof aC)) {
			return
		}
		ci.prototype.setOffset.call(this, T);
		if (!this._container) {
			return
		}
		if (T.width != 0 || T.height != 0) {
			a2.dom.addClass(this._container, "withOffset")
		} else {
			a2.dom.removeClass(this._container, "withOffset")
		}
	},
	_redraw: function() {
		if (!this._omCanvas) {
			return
		}
		var cF = this._opts.size.width;
		var cI = this._opts.size.height;
		var cK = this._opts.padding;
		var T = this._borderWidth;
		var cG = 0;
		var cJ = 0;
		var cE = 0;
		var cH = 0;
		this._omCanvas.style.left = this._omCanvas.style.top = this._omCanvas.style.right = this._omCanvas.style.bottom = "auto";
		this._omBtn.style.left = this._omBtn.style.top = this._omBtn.style.right = this._omBtn.style.bottom = "auto";
		if (this._opts.offset.width == 0 && this._opts.offset.height == 0) {
			switch (this._opts.anchor) {
			case BMAP_ANCHOR_TOP_LEFT:
				this._omCanvas.style.left = "0px";
				this._omCanvas.style.top = "0px";
				break;
			case BMAP_ANCHOR_TOP_RIGHT:
				this._omCanvas.style.left = cK + "px";
				this._omCanvas.style.top = "0px";
				break;
			case BMAP_ANCHOR_BOTTOM_LEFT:
				this._omCanvas.style.top = cK + "px";
				this._omCanvas.style.left = "0px";
				break;
			case BMAP_ANCHOR_BOTTOM_RIGHT:
				this._omCanvas.style.top = cK + "px";
				this._omCanvas.style.left = cK + "px";
				break;
			default:
				break
			}
			cG = cF - T;
			cJ = cI - T;
			cE = cG - cK - 2 * T;
			cH = cJ - cK - 2 * T;
			if (a2.browser.ie && document.compatMode == "BackCompat") {
				cG = cG + 1;
				cJ = cJ + 1;
				cE = cE + 2;
				cH = cH + 2
			}
		} else {
			this._omCanvas.style.left = this._omCanvas.style.top = this._omCanvas.style.right = this._omCanvas.style.bottom = cK + "px";
			cG = cF - 2 * T;
			cJ = cI - 2 * T;
			cE = cG - 2 * cK - 2 * T;
			cH = cJ - 2 * cK - 2 * T;
			if (this._opts.offset.width != 0 || this._opts.offset.height != 0) {
				a2.dom.addClass(this._container, "withOffset")
			}
			if (a2.browser.ie && document.compatMode == "BackCompat") {
				cG = cG + 2;
				cJ = cJ + 2;
				cE = cE + 2;
				cH = cH + 2
			}
		}
		if (cG > 0 && cJ > 0) {
			L(this._container.children[0], [cG, cJ])
		}
		if (cE > 0 && cH > 0) {
			L(this._omCanvas, [cE, cH])
		}
		this._setBtnPosition();
		a2.dom.removeClass(this._omBtn, "BMap_omBtnClosed");
		if (!this._opts.isOpen) {
			this._container.style.width = this._btnWidth + "px";
			this._container.style.height = this._btnHeight + "px";
			if (a2.browser.ie) {
				this.changeView._preBtnTop = this._omBtn.style.top;
				this.changeView._preBtnLeft = this._omBtn.style.left;
				this._omBtn.style.left = "0";
				this._omBtn.style.top = "0"
			}
			a2.dom.addClass(this._omBtn, "BMap_omBtnClosed")
		}
	},
	_setQuad: function() {
		var cE = this._container;
		if (!cE) {
			return
		}
		var T = this._quad;
		switch (this._opts.anchor) {
		case BMAP_ANCHOR_TOP_LEFT:
			this._quad = 2;
			break;
		case BMAP_ANCHOR_TOP_RIGHT:
			this._quad = 1;
			break;
		case BMAP_ANCHOR_BOTTOM_LEFT:
			this._quad = 3;
			break;
		case BMAP_ANCHOR_BOTTOM_RIGHT:
			this._quad = 4;
			break;
		default:
			break
		}
		a2.dom.removeClass(cE, "quad" + T);
		a2.dom.addClass(cE, "quad" + this._quad)
	},
	_setBtnPosition: function() {
		if (!a2.browser.ie) {
			switch (this._quad) {
			case 2:
				this._omBtn.style.top = "0";
				this._omBtn.style.left = "0";
				break;
			case 1:
				this._omBtn.style.top = "0";
				this._omBtn.style.right = "0";
				break;
			case 4:
				this._omBtn.style.bottom = "0";
				this._omBtn.style.right = "0";
				break;
			case 3:
				this._omBtn.style.bottom = "0";
				this._omBtn.style.left = "0";
				break;
			default:
				break
			}
		} else {
			var cG = this._btnWidth;
			var cE = this._btnHeight;
			var T = this._opts.size.width;
			var cF = this._opts.size.height;
			this._omBtn.style.left = "auto";
			this._omBtn.style.top = "auto";
			this._omBtn.style.right = "auto";
			this._omBtn.style.bottom = "auto";
			switch (this._quad) {
			case 2:
				this._omBtn.style.left = "0px";
				this._omBtn.style.top = "0px";
				break;
			case 1:
				this._omBtn.style.left = T - cG + "px";
				this._omBtn.style.top = "0px";
				break;
			case 4:
				this._omBtn.style.top = cF - cE + "px";
				this._omBtn.style.left = T - cG + "px";
				break;
			case 3:
				this._omBtn.style.left = "0px";
				this._omBtn.style.top = cF - cE + "px";
				break;
			default:
				break
			}
		}
	},
	_moveView: function() {
		if (this._omView) {
			this._omView.setPosition(this._map.getCenter())
		}
	},
	_onMainMoveEnd: function(T) {
		switch (this._currentOp) {
		case "dragMap":
			this._setOMViewMvPos();
			this._currentOp = "";
			break;
		case "dragView":
			this._omViewMv.style.display = "none";
			this._overviewMap.panTo(this._map.getCenter(), {
				duration: 90
			});
			this._currentOp = "";
			break;
		default:
			if (this._overviewMap) {
				this._overviewMap.panTo(this._map.getCenter(), {
					duration: 90
				})
			}
			break
		}
	},
	_onMainZoomEnd: function() {
		if (!this._overviewMap) {
			return
		}
		var T = this;
		T._curOMZoomLevel = T._getCurOMZoomLevel();
		setTimeout(function() {
			T._overviewMap.centerAndZoom(T._map.getCenter(), T._curOMZoomLevel);
			T._omView.setPosition(T._map.getCenter());
			T._setRatio()
		},
		100)
	},
	_onViewMapMoveEnd: function() {
		if (this._currentOp != "dragMap") {
			this._setOMViewMvPos();
			this._overviewMap.config.enableMouseDown = true
		}
	},
	remove: function() {
		ci.prototype.remove.call(this);
		this._omCanvas = null;
		this._omMapContainer = null;
		this._omView = null;
		this._omViewInn = null;
		this._omViewMv = null;
		this._omViewMvInn = null;
		this._omBtn = null;
		this._overviewInitialized = false;
		this._overviewMap = null
	},
	isOpen: function() {
		if (!this._container) {
			return false
		}
		return this._opts.isOpen
	}
});
function L(cF, T) {
	var cE = cF.style;
	cE.width = T[0] + "px";
	cE.height = T[1] + "px"
}
a2.object.extend(bD.prototype, {
	_asyncDraw: function() {
		if (this._map) {
			this._i(this._map)
		}
	},
	initialize: function(T) {
		ci.prototype.initialize.call(this, T);
		this._render();
		this._setParam();
		this._updateScale();
		this._bind(T);
		return this._container
	},
	_setParam: function() {
		this._numberArray = {
			us: [5280 * 5000, 5280 * 2500, 5280 * 2000, 5280 * 1000, 5280 * 500, 5280 * 200, 5280 * 100, 5280 * 50, 5280 * 25, 5280 * 20, 5280 * 10, 5280 * 5, 5280 * 2, 5280, 2000, 1000, 500, 200, 100, 50, 20, 10, 5],
			metric: [10000000, 5000000, 2000000, 1000000, 500000, 200000, 100000, 50000, 25000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
		}
	},
	_bind: function(cE) {
		var T = this;
		cE.addEventListener("zoomend",
		function() {
			T._updateScale()
		});
		cE.addEventListener("moveend",
		function() {
			T._updateScale()
		});
		cE.addEventListener("maptypechange",
		function() {
			T.setColor(T._map.getMapType().getTextColor())
		})
	},
	_render: function() {
		ci.prototype._render.call(this);
		a2.dom.addClass(this._container, "BMap_scaleCtrl");
		this._container.innerHTML = this._generateHTML();
		this.setColor(this._map.getMapType().getTextColor());
		this._scaleText = this._container.children[0];
		ci.prototype._setPosition.call(this)
	},
	_generateHTML: function() {
		var cE = b5.imgPath + "mapctrls.png";
		var T = '<div class="BMap_scaleTxt" unselectable="on"></div><div class="BMap_scaleBar BMap_scaleHBar"><img style="border:none" src="' + cE + '"/></div><div class="BMap_scaleBar BMap_scaleLBar"><img style="border:none" src="' + cE + '"/></div><div class="BMap_scaleBar BMap_scaleRBar"><img style="border:none" src="' + cE + '"/></div>';
		return T
	},
	setColor: function(T) {
		this._opts.color = T + "";
		if (!this._container) {
			return
		}
		this._container.children[0].style.backgroundColor = "transparent";
		this._container.children[0].style.color = T;
		for (var cF = 1,
		cE = this._container.children.length; cF < cE; cF++) {
			this._container.children[cF].style.backgroundColor = T
		}
	},
	setUnit: function(T) {
		this._opts.unit = this._units[T] && this._units[T].name || this._opts.unit;
		if (!this._map) {
			return
		}
		this._updateScale()
	},
	_setScaleText: function(cE, T) {
		this._scaleText.innerHTML = cE + "&nbsp;" + T
	},
	_updateScale: function() {
		if (!this._map || !this._container) {
			return
		}
		var cE = 10;
		var cH = new b6(this._map.getCenter().lng, this._map.getCenter().lat + cE);
		var cI = Math.abs(this._map.pointToPixel(this._map.getCenter()).y - this._map.pointToPixel(cH).y);
		var cM = a4.getDistanceByLL(this._map.getCenter(), cH) / cI;
		if (cM == 0 || isNaN(cM)) {
			return
		}
		var cK = this._convertUnit(cM, this._opts.unit);
		var T = 0;
		var cF = this._units[this._opts.unit].incon;
		var cJ = this._map.getZoom();
		var cG = this._numberArray[this._opts.unit][this._map.getZoom() - 1];
		T = cG / cK;
		var cL = cG >= cF ? this._units[this._opts.unit].u2: this._units[this._opts.unit].u1;
		if (cG >= cF) {
			cG = Math.round(cG / cF)
		}
		this._setScaleText(cG, cL);
		if (Math.round(T) % 2 != 0 && a2.browser.ie == 6) {
			T = T + 1
		}
		this._container.style.width = Math.round(T) + "px";
		if (this._map.mapType == BMAP_PERSPECTIVE_MAP) {
			this._container.style.width = Math.round(T) * 3 + "px";
			this._setScaleText(cG * 3, cL)
		}
	},
	_convertUnit: function(T, cE) {
		cE = cE || "metric";
		if (this._units[cE]) {
			return T * this._units[cE].conv
		}
		return T
	}
});
a2.extend(aG.prototype, {
	_asyncDraw: function() {
		if (this._map) {
			this._i(this._map)
		}
	},
	initialize: function(T) {
		this._initParams();
		ci.prototype.initialize.call(this, T);
		ci.prototype._render.call(this);
		ci.prototype._setPosition.call(this);
		switch (this._opts.type) {
		case BMAP_MAPTYPE_CONTROL_DROPDOWN:
			this._createBtnsDropDown();
			break;
		default:
			this._createBtnsDefault()
		}
		this._bind();
		this._draw();
		return this._container
	},
	_initParams: function() {
		this._mapTypeRel = [[BMAP_HYBRID_MAP, BMAP_SATELLITE_MAP, true]];
		this._btnDoms = [];
		this._lblDoms = []
	},
	_createBtnsDefault: function() {
		var cE = this._opts.mapTypes;
		for (var cG = 0; cG < cE.length; cG++) {
			if (!this._isMapTypeExist(this._getParentMapType(cE[cG]))) {
				this._createNormalBtn(cE[cG], cG)
			}
		}
		for (var cG = 0; cG < cE.length; cG++) {
			if (this._isMapTypeExist(this._getParentMapType(cE[cG]))) {
				this._createLabelBtn(cE[cG], cG)
			}
		}
		var cF = this._btnDoms[0];
		cF.firstChild.style.borderRadius = "3px 0 0 3px";
		var T = this._btnDoms[this._btnDoms.length - 1];
		T.firstChild.style.borderRight = "1px solid #8ba4dc";
		if (cF == T) {
			T.firstChild.style.borderRadius = "3px"
		} else {
			T.firstChild.style.borderRadius = "0 3px 3px 0"
		}
		this._container.style.whiteSpace = "nowrap";
		this._container.style.cursor = "pointer"
	},
	_isMapTypeExist: function(cE) {
		for (var T = 0; T < this._opts.mapTypes.length; T++) {
			if (this._opts.mapTypes[T] == cE) {
				return true
			}
		}
		return false
	},
	_getParentMapType: function(cE) {
		for (var T = 0; T < this._mapTypeRel.length; T++) {
			if (this._mapTypeRel[T][0] == cE) {
				return this._mapTypeRel[T][1]
			}
		}
		return null
	},
	_getInputCheckedInfo: function(cE) {
		for (var T = 0; T < this._mapTypeRel.length; T++) {
			if (this._mapTypeRel[T][0] == cE) {
				return this._mapTypeRel[T][2]
			}
		}
		return false
	},
	_createNormalBtn: function(cJ, cF) {
		var cI = this;
		var cG = X("div");
		cp(cG);
		var cH = cG.style;
		cH.boxShadow = "2px 2px 3px rgba(0, 0, 0, 0.35)";
		cH.borderLeft = "1px solid #8ba4dc";
		cH.borderTop = "1px solid #8ba4dc";
		cH.borderBottom = "1px solid #8ba4dc";
		cH.background = "white";
		cH.padding = "2px 6px";
		cH.font = "12px " + b5.fontFamily;
		cH.lineHeight = "1.3em";
		cH.textAlign = "center";
		cH.whiteSpace = "nowrap";
		cG.innerHTML = cJ.getName();
		cG.title = cJ.getTips();
		cG.onclick = function() {
			cI._map.setMapType(cI._getProperMapType(cJ))
		};
		var cE = X("div");
		cp(cE);
		var T = cE.style;
		if (a2.browser.ie) {
			T.styleFloat = "left"
		} else {
			T.cssFloat = "left"
		}
		cE.appendChild(cG);
		this._btnDoms[cF] = cE;
		if (!this._btnDoms[cF + 1]) {
			this._container.appendChild(cE)
		} else {
			this._container.insertBefore(cE, this._btnDoms[cF + 1])
		}
	},
	_createLabelBtn: function(cF, cJ) {
		var cK = this._getParentMapType(cF);
		var cH = this._getMapTypeIndex(cK);
		var cE = this._btnDoms[cH];
		var cL = this;
		cE.onmouseover = function() {
			if ((cL._map.getMapType() == cK || cL._map.getMapType() == cF) && this._labelDom) {
				if (this._hideLabelTimer) {
					clearTimeout(this._hideLabelTimer);
					this._hideLabelTimer = null
				}
				if (this._labelDom) {
					a2.dom.show(this._labelDom)
				}
			}
		};
		cE.onmouseout = function() {
			var cO = this;
			if (this._hideLabelTimer) {
				clearTimeout(this._hideLabelTimer);
				this._hideLabelTimer = null
			}
			this._hideLabelTimer = setTimeout(function() {
				if (cO._labelDom) {
					a2.dom.hide(cO._labelDom)
				}
			},
			1000)
		};
		cE.onmousedown = function() {
			if (this._hideLabelTimer) {
				clearTimeout(this._hideLabelTimer);
				this._hideLabelTimer = null
			}
			if (this._labelDom) {
				a2.dom.show(this._labelDom)
			}
		};
		cE._childMapType = cF;
		var cN = X("div");
		cp(cN);
		labelContainerStyle = cN.style;
		labelContainerStyle.position = "absolute";
		labelContainerStyle.top = this._btnDoms[cH].offsetHeight + "px";
		var cI = this.getAnchor();
		if (this._getBtnNum() == 1) {
			if (cI == BMAP_ANCHOR_TOP_LEFT || cI == BMAP_ANCHOR_BOTTOM_LEFT) {
				labelContainerStyle.left = "0"
			} else {
				labelContainerStyle.right = "0"
			}
		} else {
			if (cH == 0 || cH != this._btnDoms.length - 1) {
				var T = 0,
				cM = 0;
				while (cM < cH) {
					if (this._btnDoms[cM]) {
						T += this._btnDoms[cM].offsetWidth
					}
					cM++
				}
				labelContainerStyle.left = T + "px"
			} else {
				labelContainerStyle.right = "0"
			}
		}
		labelContainerStyle.zIndex = "-1";
		labelContainerStyle.display = "none";
		var cG = this._getInputCheckedInfo(cF) ? 'checked="checked"': "";
		cN.innerHTML = '<div title="' + cF.getTips() + '" style="border-right:1px solid #8ba4dc;border-bottom:1px solid #8ba4dc;border-left:1px solid #8ba4dc;background:white;font:12px ' + b5.fontFamily + ';padding:0 8px 0 6px;line-height:1.6em;box-shadow:2px 2px 3px rgba(0, 0, 0, 0.35)"><span ' + cG + '" class="BMap_checkbox"></span><label style="vertical-align: middle; cursor: pointer;">' + (cF.getLabelText() || cF.getName()) + "</label></div>";
		cN.onclick = function() {
			cL._map.setMapType(cL._getProperMapType(cF))
		};
		cN.onmouseover = function(cO) {
			if (cE._hideLabelTimer) {
				clearTimeout(cE._hideLabelTimer);
				cE._hideLabelTimer = null
			}
			a2.dom.show(this);
			aK(cO)
		};
		cN.onmouseout = function() {
			var cO = this;
			if (cE._hideLabelTimer) {
				clearTimeout(cE._hideLabelTimer);
				cE._hideLabelTimer = null
			}
			cE._hideLabelTimer = setTimeout(function() {
				if (cO) {
					a2.dom.hide(cO)
				}
			},
			1000)
		};
		cE._lblDom = this._lblDoms[cJ] = cN;
		cE.appendChild(cN);
		cE._labelDom = cN
	},
	_createBtnsDropDown: function() {
		var cG = X("div");
		cp(cG);
		cG.title = "更改地图类型";
		var cI = cG.style;
		cI.font = "bold 12px/1.5em " + b5.fontFamily;
		cI.background = "#fff";
		cI.boxShadow = "2px 2px 3px rgba(0, 0, 0, 0.35)";
		cI.padding = "0 6px";
		cI.border = "1px solid #8ba4dc";
		cG.innerHTML = '<span style="float:right;font-family:' + b5.fontFamily + '">▼</span>' + this._map.getMapType().getName();
		this._mainBtn = cG;
		var cE = X("div");
		cp(cE);
		dropDownStyle = cE.style;
		dropDownStyle.position = "relative";
		dropDownStyle.zIndex = "-1";
		dropDownStyle.background = "#fff";
		dropDownStyle.display = "none";
		dropDownStyle.borderLeft = dropDownStyle.borderRight = dropDownStyle.borderBottom = "1px solid #8ba4dc";
		var T = this._opts.mapTypes;
		for (var cF = 0; cF < T.length; cF++) {
			if (!this._isMapTypeExist(this._getParentMapType(T[cF]))) {
				this._createNormalBtnDropDown(T[cF], cF, cE)
			}
		}
		var cH = X("div");
		cH.style.borderTop = "1px solid rgb(220, 220, 220)";
		cH.style.margin = "1px 4px";
		cE.appendChild(cH);
		for (var cF = 0; cF < T.length; cF++) {
			if (this._isMapTypeExist(this._getParentMapType(T[cF]))) {
				this._createLabelBtnDropDown(T[cF], cF, cE)
			}
		}
		this._container.style.width = "85px";
		this._container.style.whiteSpace = "nowrap";
		this._container.style.cursor = "pointer";
		this._container.appendChild(cG);
		this._container.appendChild(cE);
		cG._dropDownContainer = cE;
		cG.onclick = function() {
			if (this._hideDropDownTimer) {
				clearTimeout(this._hideDropDownTimer);
				this._hideDropDownTimer = null
			}
			if (this._dropDownContainer) {
				this._dropDownContainer.style.display = this._dropDownContainer.style.display == "none" ? "": "none"
			}
		};
		cG.onmouseout = function() {
			if (this._hideDropDownTimer) {
				clearTimeout(this._hideDropDownTimer);
				this._hideDropDownTimer = null
			}
			var cJ = this;
			this._hideDropDownTimer = setTimeout(function() {
				if (cJ._dropDownContainer) {
					a2.dom.hide(cJ._dropDownContainer)
				}
			},
			1000)
		};
		cE.onmouseover = function() {
			if (cG._hideDropDownTimer) {
				clearTimeout(cG._hideDropDownTimer);
				cG._hideDropDownTimer = null
			}
			a2.dom.show(this)
		};
		cE.onmouseout = function() {
			if (cG._hideDropDownTimer) {
				clearTimeout(cG._hideDropDownTimer);
				cG._hideDropDownTimer = null
			}
			cG._hideDropDownTimer = setTimeout(function() {
				if (cG._dropDownContainer) {
					a2.dom.hide(cG._dropDownContainer)
				}
			},
			1000)
		}
	},
	_createNormalBtnDropDown: function(cI, cF, T) {
		var cE = X("div");
		cp(cE);
		var cH = cE.style;
		cH.color = "#000";
		cH.font = "12px/1.6em " + b5.fontFamily;
		cH.background = "#fff";
		cH.padding = "1px 6px";
		if (a2.browser.ie < 8) {
			cH.zoom = "1"
		}
		cE.innerHTML = cI.getName();
		cE.title = cI.getTips();
		var cG = this;
		cE.onclick = function() {
			cG._map.setMapType(cG._getProperMapType(cI))
		};
		T.appendChild(cE);
		this._btnDoms[cF] = cE
	},
	_createLabelBtnDropDown: function(cG, cJ, T) {
		var cF = X("div");
		cp(cF);
		var cM = cF.style;
		cM.font = "12px/1.6em " + b5.fontFamily;
		cM.padding = "1px 0 1px 4px";
		cM.whiteSpace = "nowrap";
		cF.title = cG.getTips();
		var cH = this._getInputCheckedInfo(cG) ? 'checked="checked"': "";
		cF.innerHTML = "<span " + cH + ' class="BMap_checkbox"></span><label style="vertical-align:middle;cursor:pointer">' + (cG.getLabelText() || cG.getName()) + "</label>";
		var cL = this;
		cF.onclick = function() {
			cL._map.setMapType(cL._getProperMapType(cG))
		};
		T.appendChild(cF);
		this._lblDoms[cJ] = cF;
		var cK = this._getParentMapType(cG);
		var cI = this._getMapTypeIndex(cK);
		var cE = this._btnDoms[cI];
		cE._childMapType = cG;
		cE._lblDom = cF
	},
	_getBtnNum: function() {
		var T = 0;
		for (var cE = 0; cE < this._btnDoms.length; cE++) {
			if (this._btnDoms[cE]) {
				T++
			}
		}
		return T
	},
	_getMapTypeIndex: function(cE) {
		for (var T = 0; T < this._opts.mapTypes.length; T++) {
			if (this._opts.mapTypes[T] == cE) {
				return T
			}
		}
		return - 1
	},
	_getProperMapType: function(cF) {
		for (var T = 0; T < this._mapTypeRel.length; T++) {
			if (this._mapTypeRel[T][0] == cF && this._map.getMapType() == cF && this._isMapTypeExist(this._mapTypeRel[T][1])) {
				return this._mapTypeRel[T][1]
			}
			if (this._mapTypeRel[T][1] == cF) {
				var cG = this._lblDoms[this._getMapTypeIndex(this._mapTypeRel[T][0])];
				if (cG) {
					var cE = cG.getElementsByTagName("span")[0];
					if (cE.checked == "") {
						bV.dom.removeClass(cE, "checked");
						return cF
					} else {
						return this._mapTypeRel[T][0]
					}
				}
			}
		}
		return cF
	},
	_renderSelBtn: function(cE) {
		var T = cE.style;
		T.background = "#8ea8e0";
		T.color = "#fff";
		T.fontWeight = "bold"
	},
	_renderUnSelBtn: function(cE) {
		var T = cE.style;
		T.background = "#fff";
		T.color = "#000";
		T.fontWeight = ""
	},
	_bind: function() {
		var T = this;
		T._map.addEventListener("onmaptypechange",
		function(cE) {
			T._draw()
		})
	},
	_draw: function() {
		switch (this._opts.type) {
		case BMAP_MAPTYPE_CONTROL_DROPDOWN:
			this._drawDropDown();
			break;
		default:
			this._drawDefault()
		}
	},
	_drawDefault: function() {
		var cF = this._map.getMapType();
		for (var T = 0; T < this._opts.mapTypes.length; T++) {
			var cE = null;
			if (!this._btnDoms[T]) {
				continue
			}
			if (cF == this._opts.mapTypes[T]) {
				this._renderSelBtn(this._btnDoms[T].children[0]);
				if (this._btnDoms[T]._childMapType && this._btnDoms[T]._lblDom) {
					cE = this._btnDoms[T]._lblDom.getElementsByTagName("span")[0];
					cE.checked = "";
					bV.dom.removeClass(cE, "checked")
				}
			} else {
				if (this._btnDoms[T]._childMapType == cF) {
					this._renderSelBtn(this._btnDoms[T].children[0]);
					var cG = this._btnDoms[T]._lblDom;
					cE = cG.getElementsByTagName("span")[0];
					if (cG) {
						cE.checked = "checked";
						bV.dom.addClass(cE, "checked")
					}
				} else {
					this._renderUnSelBtn(this._btnDoms[T].children[0]);
					if (this._btnDoms[T]._lblDom) {
						a2.dom.hide(this._btnDoms[T]._lblDom);
						clearTimeout(this._btnDoms[T]._hideLabelTimer);
						this._btnDoms[T]._hideLabelTimer = null
					}
				}
			}
		}
	},
	_drawDropDown: function() {
		var cI = this._map.getMapType();
		var cF = false;
		var cE = false;
		for (var cG = 0; cG < this._opts.mapTypes.length; cG++) {
			var cH = null;
			if (cI == this._opts.mapTypes[cG] && this._btnDoms[cG]) {
				cF = true;
				this._mainBtn.innerHTML = '<span style="float:right;font-family:' + b5.fontFamily + '">▼</span>' + this._map.getMapType().getName();
				var T = this._btnDoms[cG];
				if (T && T._childMapType && T._lblDom) {
					a2.dom.show(T._lblDom);
					cH = T._lblDom.getElementsByTagName("span")[0];
					cH.checked = "";
					bV.dom.removeClass(cH, "checked")
				}
			} else {
				if (this._btnDoms[cG] && this._btnDoms[cG]._childMapType == cI) {
					cE = true;
					this._mainBtn.innerHTML = '<span style="float:right;font-family:' + b5.fontFamily + '">▼</span>' + this._getParentMapType(cI).getName();
					var cJ = this._btnDoms[cG]._lblDom;
					if (cJ) {
						a2.dom.show(cJ);
						cH = cJ.getElementsByTagName("span")[0];
						cH.checked = "checked";
						bV.dom.addClass(cH, "checked")
					}
				} else {
					if (this._btnDoms[cG]) {
						var cJ = this._btnDoms[cG]._lblDom;
						if (cJ) {
							a2.dom.hide(cJ)
						}
					}
				}
			}
		}
		if (!cF && !cE) {
			this._mainBtn.innerHTML = '<span style="float:right;font-family:' + b5.fontFamily + '">▼</span>' + this._map.getMapType().getName()
		}
	},
	remove: function() {
		this._btnDoms = this._lblDoms = [];
		this._mainBtn = null;
		ci.prototype.remove.call(this)
	}
});