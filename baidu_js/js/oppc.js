function cA() {
	this._container = null
}
BMap.register(function(cE) {
	if (cE.config.isOverviewMap) {
		return
	}
	var T = new cA();
	ao(cE.container, T.render(cE.config.defaultCursor));
	T._container = cE.container.lastChild;
	cE.temp.zoomer = T
});
cA.prototype.render = function(cE) {
	var T = ['<div id=zoomer style="position:absolute;z-index:0;top:0px;left:0px;overflow:hidden;visibility:hidden;cursor:' + cE + '">'];
	T.push('<div class="BMap_zoomer" style="top:0;left:0;"></div>');
	T.push('<div class="BMap_zoomer" style="top:0;right:0;"></div>');
	T.push('<div class="BMap_zoomer" style="bottom:0;left:0;"></div>');
	T.push('<div class="BMap_zoomer" style="bottom:0;right:0;"></div>');
	T.push("</div>");
	return T.join("")
};
cA.prototype.action = function(cL, cM) {
	if (cA._timeline) {
		return
	}
	var cK = this._container;
	if (!cK) {
		return
	}
	var cT = cM;
	var cF = 60;
	var cS = 120;
	var cN = 4 / 3,
	cH = Math.ceil((cT ? cF: cS) / 2),
	cI = Math.max(15, cH / cN),
	cJ = cK.style;
	cJ.width = cH * 2 + "px";
	cJ.height = cI * 2 + "px";
	cJ.visibility = "visible";
	var cP = cK.children;
	if (cT) {
		cP[0].style.backgroundPosition = "0 0";
		cP[1].style.backgroundPosition = "-7px 0";
		cP[2].style.backgroundPosition = "0 -7px";
		cP[3].style.backgroundPosition = "-7px -7px"
	} else {
		cP[0].style.backgroundPosition = "-7px -7px";
		cP[1].style.backgroundPosition = "0 -7px";
		cP[2].style.backgroundPosition = "-7px 0";
		cP[3].style.backgroundPosition = "0 0"
	}
	cP = null;
	var cR = cL.x - cH;
	var cQ = cL.y - cI;
	if (isNaN(cR) || isNaN(cQ)) {
		return
	}
	cJ.left = cR + "px";
	cJ.top = cQ + "px";
	var cE = Math.ceil((cT ? cS: cF) / 2);
	var cG = Math.max(15, cE / cN);
	cE = cE - cH;
	cG = Math.ceil(cG - cI);
	var cO = this;
	var T = cO._container.style;
	if (cA._timeline) {
		cA._timeline.end()
	}
	cA._timeline = new g({
		fps: 20,
		duration: 240,
		transition: ar.easeInQuad,
		delay: 100,
		render: function(cV) {
			if (cV < 0.1) {
				return
			}
			var cW = Math.ceil(cE * cV);
			var cU = Math.ceil(cG * cV);
			T.width = (cH + cW) * 2 + "px";
			T.height = (cI + cU) * 2 + "px";
			T.left = cR - cW + "px";
			T.top = cQ - cU + "px"
		},
		finish: function() {
			cA._timeline = false;
			setTimeout(function() {
				cJ.visibility = "hidden"
			},
			300)
		}
	})
};
BMap.register(function(cH) {
	var cG = cH;
	var cF = cH.platform;
	function cI(cS, cO) {
		var cK = cS.srcElement || cS.target,
		cR = cS.offsetX || cS.layerX || 0,
		cQ = cS.offsetY || cS.layerY || 0,
		cN = null,
		cM = null;
		if (cK.nodeType != 1) {
			cK = cK.parentNode
		}
		while (cK && cK != cG.container) {
			if (cK.guid) {
				if (a2.lang.instance(cK.guid) instanceof V) {
					cN = a2.lang.instance(cK.guid)
				}
				if (a2.lang.instance(cK.guid) instanceof bI) {
					cM = a2.lang.instance(cK.guid)
				}
			}
			if (! (cK.clientWidth == 0 && cK.clientHeight == 0 && cK.offsetParent && cK.offsetParent.nodeName == "TD") && cK.namespaceURI != "http://www.w3.org/2000/svg") {
				cR += cK.offsetLeft || 0;
				cQ += cK.offsetTop || 0
			} else {
				if (cK.namespaceURI == "http://www.w3.org/2000/svg" && BMap.DrawerSelector) {
					var cL = BMap.DrawerSelector.getDrawer(cG);
					var cJ = cL.getPalette();
					if (navigator.userAgent.indexOf("Opera") > -1 && cK.tagName != "svg") {
						var cT = a2.lang.instance(cK.guid);
						if (cT) {
							var cP = cT.getBounds();
							cR = cR + cG.pointToPixel(cP.getSouthWest()).x;
							cQ = cQ + cG.pointToPixel(cP.getNorthEast()).y
						}
						break
					}
					if (cJ && (!a2.browser.ie || (a2.browser.ie == 9 && cK.nodeName.toLowerCase() == "svg"))) {
						cR += parseFloat(cJ.style.left) + cG.offsetX;
						cQ += parseFloat(cJ.style.top) + cG.offsetY
					}
					if (a2.browser.ie == 9 && cK.nodeName.toLowerCase() != "svg") {
						cR += cG.offsetX;
						cQ += cG.offsetY;
						break
					}
					if (!a2.browser.ie) {
						break
					}
				}
			}
			cK = cK.offsetParent
		}
		cO.offsetX = cR;
		cO.offsetY = cQ;
		cO.pixel = new bo(cR, cQ);
		cO.point = cG.pixelToPoint(cO.pixel);
		cO.overlay = cN;
		cO.infoWindow = cM;
		return cO
	}
	cH.container.onselectstart = function() {
		return false
	};
	a2.on(cG.platform, "mousemove",
	function(cJ) {
		if (cG.currentOperation == 0) {
			cG.dispatchEvent(cI(cJ, new ba("onmousemove").inherit(cJ)))
		}
	});
	a2.on(cG.platform, "mousedown",
	function(cN) {
		if (!cG.config.enableMouseDown) {
			return
		}
		var cN = window.event || cN;
		if (!a2.browser.ie) {
			cv(cN)
		}
		var cL = cG.temp;
		cL.operating = true;
		var cK = cN.srcElement || cN.target;
		if (cL.dragAni) {
			cL.dragAni.stop()
		}
		cL.tpx = cN.clientX || cN.pageX || 0;
		cL.tpy = cN.clientY || cN.pageY || 0;
		var cJ = cK;
		while (cJ) {
			if (cJ == cG.container) {
				break
			}
			if (a2.dom.hasClass(cJ, "BMap_Marker")) {
				cL.operating = false;
				var cM = a2.lang.instance(cJ.guid);
				if (cM instanceof aa && cM._config.clickable == true || cM._config.enableDragging == true) {
					return
				}
			}
			cJ = cJ.parentNode
		}
		if (cK.nodeType != 1) {
			cK = cK.parentNode
		}
		if (a2.browser.ie && cG.maskLayer.setCapture) {
			cG.maskLayer.setCapture()
		}
		cG.dispatchEvent(cI(cN, new ba("onmousedown").inherit(cN)));
		if (cG.config.enableDragging && !(cG.currentOperation & bh.drag) && cN.button != 2) {
			cL.mx = cL.tpx;
			cL.my = cL.tpy;
			cL.pl = cG.offsetX;
			cL.pt = cG.offsetY;
			cG.currentOperation |= bh.drag;
			if (cG.temp.curSpots.length == 0) {
				cG.platform.style.cursor = cG.config.draggingCursor
			} else {
				cG.platform.style.cursor = "pointer"
			}
		}
	});
	a2.on(document, "mousemove",
	function(cM) {
		var cM = window.event || cM;
		if (!a2.browser.ie) {
			cv(cM)
		}
		var cL = cG.temp;
		var cJ = cM.clientX || cM.pageX || 0;
		var cP = cM.clientY || cM.pageY || 0;
		if (cL.tpx || cL.tpy) {
			cL.mox = cJ - cL.tpx;
			cL.moy = cP - cL.tpy
		}
		var cN = aA(),
		cO = (cN - cL.lastLoadTileTime) > 40;
		if (cN - cL.lastDomMoveTime < 18) {
			return
		}
		if (cO) {
			cL.lastLoadTileTime = cN
		}
		cL.lastDomMoveTime = cN;
		if (cG.currentOperation & bh.drag && cG.config.enableDragging) {
			var cK = cG.platform.style;
			if (cK.cursor.replace(/"|s/g, "") != cG.config.draggingCursor) {
				cK.cursor = cG.config.draggingCursor
			}
			if (!cL._moved) {
				cG.dispatchEvent(cI(cM, new ba("ondragstart").inherit(cM)));
				cG.dispatchEvent(new ba("onmovestart"));
				cL.dragStartPos = new bo(cJ, cP);
				cL.dragStartTime = cN
			}
			if (cL.mx == 0 && cL.my == 0 && cG.temp.keyboardDrag) {
				cL.mx = cJ;
				cL.my = cP;
				cL.pl = cG.offsetX;
				cL.pt = cG.offsetY
			}
			if (cJ - cL.mx != 0 || cP - cL.my != 0) {
				cG.temp._moved = true;
				cG.dispatchEvent(cI(cM, new ba("ondragging").inherit(cM)));
				cG._setPlatformPosition(cL.pl + cJ - cL.mx, cL.pt + cP - cL.my, null, cO)
			}
		}
	});
	a2.on(document, "mouseup",
	function(cM) {
		if (a2.browser.ie && cG.maskLayer.releaseCapture) {
			cG.maskLayer.releaseCapture()
		}
		var cK = cG.temp;
		if (cK.preEnableClickPan) {
			cG.enableClickPan(true)
		}
		var cM = window.event || cM,
		cJ = cM.clientX || cM.pageX,
		cN = cM.clientY || cM.pageY;
		if (cG.currentOperation & bh.drag && cG.config.enableDragging) {
			cG.currentOperation ^= bh.drag;
			if (cK.curSpots.length == 0) {
				cG.platform.style.cursor = cG.config.defaultCursor
			} else {
				cG.platform.style.cursor = "pointer"
			}
			if (cG.temp._moved) {
				var cL = cI(cM, new ba("ondragend").inherit(cM));
				cG.dispatchEvent(cL);
				cG._processInertialDragging(new bo(cJ, cN))
			}
			cK._moved = false
		}
		cK.operating = false;
		if (cM.button == 2) {
			cK.tpx = null;
			cK.tpy = null;
			cK.mox = 0;
			cK.moy = 0
		}
	});
	function cE(cM) {
		var cL = cG.temp,
		cK = !cL.mox && !cL.moy;
		if (cL.rightDblclickTimer) {
			clearTimeout(cL.rightDblclickTimer);
			cL.rightDblclickTimer = null;
			if (cK) {
				cG.dispatchEvent(cI(cM, new ba("onrightclick").inherit(cM)));
				cG.currentOperation |= bh.dblclick;
				cG.dispatchEvent(cI(cM, new ba("onrightdblclick").inherit(cM)));
				cG.currentOperation ^= bh.dblclick
			}
		} else {
			if (cK) {
				cG.dispatchEvent(cI(cM, new ba("onrightclick").inherit(cM)))
			}
			var cJ = cI(cM, new ba("onrightclickex").inherit(cM));
			cL.rightDblclickTimer = setTimeout(function() {
				cL.rightDblclickTimer = null;
				if (cK) {
					cG.dispatchEvent(cJ)
				}
			},
			cG.config.clickInterval)
		}
	}
	if (a2.browser.firefox >= 4) {
		a2.on(cG.container, "mouseup",
		function(cJ) {
			if (cJ.button == 2) {
				cE(cJ)
			}
		});
		a2.on(cG.container, "contextmenu",
		function(cJ) {
			ch(cJ)
		})
	} else {
		a2.on(cG.container, "contextmenu",
		function(cJ) {
			cE(cJ);
			ch(cJ)
		})
	}
	function T(cL) {
		if (cG.config.enableWheelZoom) {
			var cK = cG.temp;
			if (cK.dragAni) {
				cK.dragAni.stop()
			}
			cG.currentOperation |= bh.mousewheel;
			var cL = window.event || cL;
			cG.lastLevel = cG.zoomLevel;
			var cJ = new ba("onmousewheel");
			cJ.trend = cL.wheelDelta >= 0 || cL.detail < 0;
			if (cJ.trend == true && cG.zoomLevel == cG.getMapType().getMaxZoom() || cJ.trend == false && cG.zoomLevel == cG.getMapType().getMinZoom()) {
				cG.currentOperation ^= bh.mousewheel;
				cv(cL);
				return
			}
			cI(cL, cJ.inherit(cL));
			cG.dispatchEvent(cJ);
			cG.currentOperation ^= bh.mousewheel;
			cv(cL)
		}
	}
	a2.on(cG.container, "mousewheel", T);
	if (window.addEventListener) {
		cG.container.addEventListener("DOMMouseScroll", T, false)
	}
	a2.on(cG.platform, "click",
	function(cN) {
		var cL = new ba("onclick"),
		cM = new ba("onclickex"),
		cK = cG.temp;
		cI(cN, cL.inherit(cN));
		cI(cN, cM.inherit(cN));
		if (!cG.currentOperation) {
			var cJ = !cK.mox && !cK.moy;
			if (cJ) {
				cG.dispatchEvent(cL)
			}
			if (!cK._clickTimer) {
				cK._clickTimer = setTimeout(function() {
					cK._clickTimer = null;
					if (cJ) {
						cG.dispatchEvent(cM)
					}
				},
				cG.config.clickInterval)
			}
		}
		cK.tpx = null;
		cK.tpy = null;
		cK.mox = 0;
		cK.moy = 0
	});
	a2.on(cG.platform, "dblclick",
	function(cK) {
		if (!cG.currentOperation) {
			cG.currentOperation |= bh.dblclick;
			if (a2.browser.ie) {
				cG.dispatchEvent(cI(cK, new ba("onclick").inherit(cK)))
			}
			var cJ = cG.temp;
			if (cJ._clickTimer) {
				clearTimeout(cJ._clickTimer);
				cJ._clickTimer = null
			}
			cG.dispatchEvent(cI(cK, new ba("ondblclick").inherit(cK)));
			cG.currentOperation ^= bh.dblclick
		}
	});
	a2.on(document, "mousedown",
	function(cL) {
		var cL = window.event || cL;
		var cK = cL.srcElement || cL.target;
		var cJ = cG.temp;
		if (cJ.canKeyboard) {
			cJ.canKeyboard = a2.dom.contains(cH.container, cK)
		} else {
			cJ.canKeyboard = a2.dom.contains(cH.platform, cK)
		}
	})
});
bt.prototype._processInertialDragging = function(cV) {
	var cY = this;
	if (!cY.config.enableInertialDragging) {
		cY.dispatchEvent(new ba("onmoveend"));
		return
	}
	var cM = cY.temp;
	var cE = aA();
	if (cE - cM.lastDomMoveTime > 100) {
		cY.dispatchEvent(new ba("onmoveend"));
		cM._moved = false;
		return
	} else {
		var cW = cM.dragStartPos,
		cP = cV,
		T = cm(cW, cP),
		cT = [cP.x - cW.x > 0 ? 1 : -1, cP.y - cW.y > 0 ? 1 : -1],
		cG = (cE - cM.dragStartTime) / 1000,
		cK = T / cG / 2,
		cL = 0.5,
		cU = cK / (2 * cL),
		cS = 0.4 * cU * cK / 1000,
		cJ = Math.abs(cW.x - cP.x),
		cI = Math.abs(cW.y - cP.y),
		cQ = 0,
		cN = 0;
		if (cI == 0) {
			cQ = cJ
		} else {
			var cH = Math.abs(cW.x - cP.x) / Math.abs(cW.y - cP.y);
			cN = Math.round(Math.sqrt(cS * cS / (1 + cH * cH)));
			cQ = Math.round(cH * cN)
		}
		if (cT[0] == -1) {
			cQ = -cQ
		}
		if (cT[1] == -1) {
			cN = -cN
		}
		if (cM.dragAni) {
			cM.dragAni.stop()
		}
		var cF = cK / 1000,
		cR = cY.offsetX,
		cO = cY.offsetY,
		cX = false;
		cM.dragAni = new g({
			duration: cU,
			fps: 30,
			transition: function(cZ) {
				var cZ = cZ * cF / (2 * cL);
				return cF * cZ - cL * cZ * cZ
			},
			render: function(cZ) {
				cZ = cZ * (4 * cL) / (cF * cF);
				cX = !cX;
				cY._setPlatformPosition(cR + Math.round(cZ * cQ), cO + Math.round(cZ * cN), null, cX)
			},
			finish: function() {
				cM.dragAni = null;
				cY._setPlatformPosition(cR + Math.round(cQ), cO + Math.round(cN));
				cY.dispatchEvent(new ba("onmoveend"))
			},
			onStop: function(cZ) {
				cM.dragAni = null;
				cZ = cZ * (4 * cL) / (cF * cF);
				cY._setPlatformPosition(cR + Math.round(cZ * cQ), cO + Math.round(cZ * cN));
				setTimeout(function() {
					cY.dispatchEvent(new ba("onmoveend"))
				},
				1)
			}
		})
	}
};
BMap.register(function(cE) {
	var T = cE;
	a2.on(document, "keydown",
	function(cF) {
		if (T.temp.stopArrow == true) {
			T.temp.stopArrow = false
		}
		if (T.config.enableKeyboard && T.temp.canKeyboard) {
			var cF = window.event || cF;
			switch (cF.keyCode || cF.which) {
			case 43:
			case 189:
			case 109:
				T.temp.operating = true;
				T.dispatchEvent(new ba("onminuspress"));
				break;
			case 43:
			case 61:
			case 187:
			case 107:
				T.temp.operating = true;
				T.dispatchEvent(new ba("onpluspress"));
				break;
			case 33:
				T.temp.operating = false;
				T.temp.stopArrow = true;
				T.panBy(0, Math.round(T.height * 0.8));
				ch(cF);
				break;
			case 34:
				T.temp.operating = false;
				T.temp.stopArrow = true;
				T.panBy(0, -Math.round(T.height * 0.8));
				ch(cF);
				break;
			case 35:
				T.temp.operating = false;
				T.temp.stopArrow = true;
				T.panBy( - Math.round(T.width * 0.8), 0);
				ch(cF);
				break;
			case 36:
				T.temp.operating = false;
				T.temp.stopArrow = true;
				T.panBy(Math.round(T.width * 0.8), 0);
				ch(cF);
				break;
			case 37:
				T.temp.operating = true;
				T.temp.arrow |= 1;
				T._arrow();
				ch(cF);
				break;
			case 38:
				T.temp.operating = true;
				T.temp.arrow |= 2;
				T._arrow();
				ch(cF);
				break;
			case 39:
				T.temp.operating = true;
				T.temp.arrow |= 4;
				T._arrow();
				ch(cF);
				break;
			case 40:
				T.temp.operating = true;
				T.temp.arrow |= 8;
				T._arrow();
				ch(cF);
				break
			}
		}
	});
	a2.on(document, "keyup",
	function(cF) {
		if (T.config.enableKeyboard) {
			var cF = window.event || cF;
			switch (cF.keyCode || cF.which) {
			case 37:
				T.temp.arrow = T.temp.arrow & ~1;
				if (T.temp.arrow != 0) {
					T._arrow()
				}
				break;
			case 38:
				T.temp.arrow = T.temp.arrow & ~2;
				if (T.temp.arrow != 0) {
					T._arrow()
				}
				break;
			case 39:
				T.temp.arrow = T.temp.arrow & ~4;
				if (T.temp.arrow != 0) {
					T._arrow()
				}
				break;
			case 40:
				T.temp.arrow = T.temp.arrow & ~8;
				if (T.temp.arrow != 0) {
					T._arrow()
				}
				break
			}
		}
		T.temp.operating = false
	});
	bt.prototype._arrow = function() {
		if (this._arrow.occurrent && this._arrow._lastArrow == this.temp.arrow && this.temp.stopArrow == true) {
			return
		}
		var cF = this;
		var cH = cF.temp.arrow;
		cF._arrow._lastArrow = cH;
		cF._arrow.interval = 30;
		cF._arrow.duration = 999;
		cF._arrow.dx = cF._arrow.dy = 0;
		if (cH & 1) {
			cF._arrow.dx = 1
		}
		if (cH & 2) {
			cF._arrow.dy = 1
		}
		if (cH & 4) {
			cF._arrow.dx = -1
		}
		if (cH & 8) {
			cF._arrow.dy = -1
		}
		if (cH & 1 && cH & 4) {
			cF._arrow.dx = 0
		}
		if (cH & 2 && cH & 8) {
			cF._arrow.dy = 0
		}
		if (!cF._arrow.occurrent) {
			cF._arrow.occurrent = true;
			cF._arrow.time = aA();
			cF._arrow.beginTime = cF._arrow.time;
			cF.dispatchEvent(new ba("onmovestart"));
			var cG = new g({
				fps: cF._arrow.interval,
				duration: cF._arrow.duration,
				transition: ar.linear,
				render: function(cO) {
					var cJ = cF._arrow;
					var cM = cF.temp.arrow;
					if (cF._arrow._lastArrow != cM) {
						cF._arrow._lastArrow = cM;
						if (cM & 1) {
							cJ.dx = 1
						}
						if (cM & 2) {
							cJ.dy = 1
						}
						if (cM & 4) {
							cJ.dx = -1
						}
						if (cM & 8) {
							cJ.dy = -1
						}
						if (cM & 1 && cM & 4) {
							cJ.dx = 0
						}
						if (cM & 2 && cM & 8) {
							cJ.dy = 0
						}
					}
					if (cF.temp.stopArrow == true) {
						cJ.dx = 0;
						cJ.dy = 0
					}
					var cN = aA();
					var cL = Math.pow((cN - cJ.beginTime) / cJ.duration, 2);
					if (!cF.temp.arrow) {
						cJ.occurrent = false;
						cG.terminative = true;
						cF._arrow.time = aA();
						setTimeout(function() {
							cF.dispatchEvent(new ba("onmoveend"))
						},
						40)
					}
					var cP = (cN - cJ.time);
					var cK = cJ.dx * cP * cL >= 0 ? Math.ceil(cJ.dx * cP * cL) : Math.floor(cJ.dx * cP * cL);
					var cI = cJ.dy * cP * cL >= 0 ? Math.ceil(cJ.dy * cP * cL) : Math.floor(cJ.dy * cP * cL);
					if (cK != 0 && cI != 0) {
						cK = Math.round(cK * 0.7);
						cI = Math.round(cI * 0.7)
					}
					cJ.time = cN;
					cF._setPlatformPosition(cF.offsetX + cK, cF.offsetY + cI)
				},
				finish: function() {
					cF._arrow.time = aA();
					setTimeout(function() {
						cF._arrowPan()
					},
					cF._arrow.interval)
				}
			})
		}
	};
	bt.prototype._arrowPan = function() {
		var cI = this;
		var cG = cI._arrow;
		if (cI.temp.stopArrow) {
			cG.dx = 0;
			cG.dy = 0
		}
		if (!cI.temp.arrow) {
			cG.occurrent = false;
			cI.dispatchEvent(new ba("onmoveend"));
			return
		}
		var cJ = aA();
		var cK = (cJ - cG.time);
		var cH = Math.ceil(cG.dx * cK);
		var cF = Math.ceil(cG.dy * cK);
		cG.time = cJ;
		cI._setPlatformPosition(cI.offsetX + cH, cI.offsetY + cF);
		setTimeout(function() {
			cI._arrowPan()
		},
		cG.interval)
	}
});