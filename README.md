# 百度Web离线地图Demo

## 需求情景
项目需要在世界地图的城市上进行标注，由于在内网上使用不能连接外网，所以需要开发离线地图功能。试过antv l7和echart，由于没有离线数据的原因不能满足需求（百度的世界地图的离线js不能缩放到城市级别，antv即便用了MapBox也会去调用amap的js）。因此用瓦片地图下载器下载了离线数据（这里用的太乐）。

## 目录结构
```
BaiduMapOfflineDemo
├── baidu_js ----- 代码目录
├    ├── js ------ js目录
├    ├── images -- 图片目录
├    ├── css ----- css目录
├── tiles -------- 瓦片资源
```

## 截屏
![百度WEB离线地图](https://github.com/loamen/BaiduMapOfflineDemo/raw/master/documents/screenshots/1.png)
![百度WEB离线地图](https://github.com/loamen/BaiduMapOfflineDemo/raw/master/documents/screenshots/2.png)
![百度WEB离线地图](https://github.com/loamen/BaiduMapOfflineDemo/raw/master/documents/screenshots/3.png)