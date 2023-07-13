# 前言

> 本项目仅供学习交流，切勿用作商业用途。

数据来源千千音乐，本项目只用作转发接口，极少部分使用爬虫获取页面数据。

## 工作原理

跨站请求伪造 (CSRF), 伪造请求头 , 调用官方 API

## 功能特性

+ 首页
+ 轮播图
+ 推荐
+ 推荐歌单
+ 推荐视频
+ 推荐歌手
+ 歌单
+ 专辑
+ 搜索
+ 歌曲信息
+ 歌手信息
+ 视频

## 安装
`git clone git@github.com:ZhuAiQuan/91qmusic.git`
  
`cd 91qmusic`
  
`npm install`

## 运行
`npm start`


## 部署

项目已集成vercel 直接fork本项目并在varcel import导入即可部署成功。


# 接口文档

> 本项目不提供线上 demo，请不要轻易信任使用他人提供的公开服务，以免发生安全问题,泄露自己的账号和密码

> 为使用方便,降低门槛, 文档示例接口直接使用了 GET 请求,本项目同时支持 GET/POST 请按实际需求使用

> 本项目仅供学习使用,请尊重版权，请勿利用此项目从事商业行为或进行破坏版权行为

> 文档可能会有缓存 , 如果文档版本和 github 上的版本不一致,请清除缓存再查看

## 首页

接口地址： `/home`  

请求方式：`GET` (仅该接口支持get 不支持Post请求)

## 推荐歌单

接口地址：`/recommend`  

请求方式：`GET/POST`

### 轮播图

接口地址：`/recommend/banner`  

请求方式：`GET/POST`

### 推荐视频

接口地址：`/recommend/video`  

请求参数：`pageSize`  

请求方式：`GET/POST`

## 歌单

接口地址：`/songlist`  

请求参数：  
`pageSize`条数  
`pageNo`页码  

请求方式：`GET/POST`

### 歌单分类标签

接口地址：`/songlist/category`  

请求方式：`GET/POST`

### 歌单详情

接口地址：`/songlist/detail`  

请求参数：  
`pageSize` 条数  
`id` 歌单id

请求方式：`GET/POST`

## 专辑

### 专辑列表

接口地址：`/album/list`  

请求参数：  
`pageSize`条数  
`pageNo`页码  

请求方式：`GET/POST`

### 专辑信息

接口地址：`/album/info`  

请求参数：  
`id` 专辑id

请求方式：`GET/POST`

### 秀动发行

接口地址：`/album/showstart`  

请求参数：  
`pageSize`条数  
`pageNo`页码  

请求方式：`GET/POST`

## 歌手

接口地址：`/artist`  

请求参数：  
`pageSize`条数  
`pageNo`页码  
`artistFristLetter`筛选条件：首字母  
`artistRegion`筛选条件：地区  
`artistGender`筛选条件：类型

请求方式：`GET/POST`

### 歌手信息

接口地址：`/artist/info`  

请求参数：  
`id` 歌手id

请求方式：`GET/POST`

### 歌手歌曲

接口地址：`/artist/songs`  

请求参数：  
`id` 歌手id  
`pageSize`条数  
`pageNo`页码  

请求方式：`GET/POST`

### 歌手专辑

接口地址：`/artist/album`  

请求参数：  
`id` 歌手id  
`pageSize`条数  
`pageNo`页码 

请求方式：`GET/POST`

## 歌曲信息

接口地址：`/song`  

请求参数：  
`id` 歌曲id

请求方式：`GET/POST`

### 播放链接

接口地址：`/song/detail`  

请求参数：  
`id` 歌曲id
`rate` 质量

请求方式：`GET/POST`

## 视频

### 视频列表

接口地址：`/video/list`  

请求参数：  
`pageNo` 页码
`pageSize` 条数

请求方式：`GET/POST`

### 详情

接口地址：`/video/info`  

请求参数：  
`id` id

请求方式：`GET/POST`

## 搜索

### 关键词

接口地址：`/search/sug`  

请求参数：  
`word` 搜索词

请求方式：`GET/POST`

### 搜索

接口地址：`/search`  

请求参数：  
`word` 搜索词  
`type` 类型  1单曲2歌手3专辑  
`pageNo` 页码  
`pageSize` 条数  

请求方式：`GET/POST`

## 排行榜

### 榜单
接口地址：`/top`  

请求方式：`GET/POST`

### 详情

接口地址：`/top/list`  
请求参数：  
`id` 榜单id     
请求方式：`GET/POST`
