# 用Node.js做一个GitHub爬虫

## explain

用Node.js写了一个爬虫,可以获取GitHub各种编程语言star数前十的库

在线版本: <http://www.flypie.cn:9999>

## usage

安装依赖

```shell
npm i
```

运行

```shell
npm start
```

配置文件在/config/index.js，

如果你有自己的redis服务,
可以修改配置文件将本地Json存储改成redis存储

注意:
若删除local.json或修改存储方式后,
重新启动时会向<http://www.flypie.cn:9999>发起请求以初始化获取最新排名