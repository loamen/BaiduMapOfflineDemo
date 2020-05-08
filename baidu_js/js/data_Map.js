function HashMap() {
    this.keys = [];
    this.data = {};
	/**
	 *
	 *
	 */
	 this.clear = function(){
		this.keys = [];
		this.data = {};
	 }
    /**
     * 放入一个键值对
     * @param {String} key
     * @param {Object} value
     */
    this.put = function(key, value) {
        if (this.data[key] == null) {
            this.keys.push(key);
        }
        this.data[key] = value;
    };

    /**
     * 获取某键对应的值
     * @param {String}  key
     * @return {Object} value
     */
    this.get = function(key) {
        return this.data[key];
    };

    /**
     * 是否包含该键
     */
    this.contain = function(key) {
       
        var value = this.data[key];
        if (value)
            return true;
        else
            return false;
    };

    /**
     * 删除一个键值对
     * @param {String} key
     */
    this.remove = function(key) {
        for(var index=0;index<this.keys.length;index++){
            if(this.keys[index]==key){
                this.keys.splice(index,1);
                break;
            }
        }
        //this.keys.remove(key);
        this.data[key] = null;
    };

    /**
     * 遍历Map,执行处理函数
     * @param {Function} 回调函数 function(key,value,index){..}
     */
    this.each = function(fn) {
        if (typeof fn != 'function') {
            return;
        }
        var len = this.keys.length;
        for ( var i = 0; i < len; i++) {
            var k = this.keys[i];
            fn(k, this.data[k], i);
        }
    };

    /**
     * 获取键值数组(类似Java的entrySet())
     * @return 键值对象{key,value}的数组
     */
    this.entrys = function() {
        var len = this.keys.length;
        var entrys = new Array(len);
        for ( var i = 0; i < len; i++) {
            entrys[i] = {
                key : this.keys[i],
                value : this.data[i]
            };
        }
        return entrys;
    };

    /**
     * 判断Map是否为空
     */
    this.isEmpty = function() {
        return this.keys.length == 0;
    };

    /**
     * 获取键值对数量
     */
    this.size = function() {
        return this.keys.length;
    };

    /**
     * 重写toString
     */
    this.toString = function() {
        var s = "{";
        for ( var i = 0; i < this.keys.length; i++, s += ',') {
            var k = this.keys[i];
            s += k + "=" + this.data[k];
        }
        s += "}";
        return s;
    };
}