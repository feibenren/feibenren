/**
 * 使用nodejs编写一个爬虫
输入是指定网站域名（比如baidu.com）及JavaScript库的标示，如vue.js，或者echarts.js，允许输入通配符""，标示任意字符，比如vue.js
输出是指定网站是否使用了需要查找的JS文件
 */

 var http=require('http');
 var fs=require('fs');
 var process=require('process');
 var params=process.argv.slice(2);
 var url=params[0]? params[0]:'http://www.baidu.com';
 var search_regx=params[1] ? params[1]:'jquery';
 http.get(url,function(res){
   var data;
   res.on('data',function(chrunk){
    data+=chrunk;
  })
   res.on('end',function(){
    var res=data.search(search_regx) > -1;
    console.log(res);
   });
 });

