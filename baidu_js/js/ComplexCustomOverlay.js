function ComplexCustomOverlay(point, text, mouseoverText,height,lineHeight,width){
      this._point = point;
      this._text = text;
      this._overText = mouseoverText;
	  this._height = height;
	  this._lineHeight = lineHeight;
	  this._width = width;
}
ComplexCustomOverlay.prototype = new BMap.Overlay();
ComplexCustomOverlay.prototype.initialize = function(map){
this._map = map;
var div = this._div = document.createElement("div");
div.style.position = "absolute";
div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
div.style.backgroundColor = "#EE5D5B";
      div.style.border = "1px solid #BC3B3A";
      div.style.color = "white";
      div.style.height = this._height+"px";
      div.style.width = this._width+"px";
      div.style.padding = "2px";
      div.style.lineHeight = this._lineHeight+"px";
      div.style.whiteSpace = "nowrap";
      div.style.MozUserSelect = "none";
      div.style.fontSize = "12px"
      var span = this._span = document.createElement("span");
      div.appendChild(span);
      //span.appendChild(document.createTextNode(this._text));    
	  div.getElementsByTagName("span")[0].innerHTML = this._text;
      var that = this;

      var arrow = this._arrow = document.createElement("div");
      arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
      arrow.style.position = "absolute";
      arrow.style.width = "11px";
      arrow.style.height = "10px";
      arrow.style.top = this._height*1+4+"px";
      arrow.style.left = "10px";
      arrow.style.overflow = "hidden";
      div.appendChild(arrow);
     
      div.onmouseover = function(){
        this.style.backgroundColor = "#6BADCA";
        this.style.borderColor = "#0000ff";
        this.getElementsByTagName("span")[0].innerHTML = that._overText;
        arrow.style.backgroundPosition = "0px -20px";
      }

      div.onmouseout = function(){
        this.style.backgroundColor = "#EE5D5B";
        this.style.borderColor = "#BC3B3A";
        this.getElementsByTagName("span")[0].innerHTML = that._text;
        arrow.style.backgroundPosition = "0px 0px";
      }

      map.getPanes().labelPane.appendChild(div);
      
      return div;
    }
    ComplexCustomOverlay.prototype.draw = function(){
      var map = this._map;
      var pixel = map.pointToOverlayPixel(this._point);
      this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
      this._div.style.top  = pixel.y - (this._height+12) + "px";
    }