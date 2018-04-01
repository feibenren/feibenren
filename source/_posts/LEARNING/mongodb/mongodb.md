---
title: mongodb
categories: 
- LEARNING
- MONGODB
tags:
- mongodb
---
# windows 安装
mongo compass不要安装，我本地测试，一直会卡在这个地方，去掉勾选就很快安装完成

将mongo 的bin目录添加到path中去

mongodb的推荐目录
```
-dbpath
--config:配置目录
---mongod.conf:mongodb的配置文件
--data:数据库文件
--log:日志目录
```

mongod.conf
mongod --help 中的选项，可以放到改文件中
```
dbpath=db
auth=true
```
mongod --config ./config/mongod.conf



# 概念
db
collection:相当于table

# _id:主键，自动生成

# 常用命令
```
//数据库操作
show dbs;//查看所有数据库
db;//查看当前数据库
use db;//切换数据库，如果数据库不存在，会自动创建
db.dropDatabase();//删除当前数据库

//collection 操作
show collections;//查看当前数据库的所有collections
show tables;//查看当前数据库的所有collections === show collections
db.collection_name.remove();删除当前数据库的collection_name
db.collection_name.insert();在当前数据库的collection_name插入
db.collection_name.find([opt]);查找,默认显示所有符合条件的数据
db.collection_name.findOne();
db.collection_name.save();//如果不指定 _id 字段 save() 方法类似于 insert() 方法。如果指定 _id 字段，则会更新该 _id 的数据
db.collection_name.update();
db.collection_name.updateOne([opt]);
db.collection_name.delete([opt]);
db.collection_name.deleteOne([opt]);
db.collection_name.pretty();//结构化展示
db.collection_name.count([opt]);//计算数量
db.collection_name.skip(num);//结果中跳过前num条，默认是0
db.collection_name.limit(num);//从结果中只取出num条
db.collection_name.sort(opt);//opt={name:1,age:-1},1：asc,-1:desc

```

# db.collection.find([opt])

大于，小于，等于
```
db.mycollection1.find( {num1:3} ); //等于
db.mycollection1.find( {num1:{$gt:3}} ); //大于
db.mycollection1.find( {num1:{$lt:3}} ); 
db.mycollection1.find( {num1:{$gte:3}} ); 
db.mycollection1.find( {num1:{$lte:3}} ); 
db.mycollection1.find( {num1:{$ne:3}} ); 
db.mycollection1.find( {num1:{$in:arr}} ); 
```

## AND 条件
```
db.col.find({key1:value1, key2:value2});// where(key1=val1 and key2=val2)
```
## OR 条件
```
db.col.find(
   {
      $or: [
         {key1: value1}, {key2:value2}
      ]
   }
)
```

## AND 和 OR 联合使用

```
db.col.find(
   {
      $or: [
         {key1: value1}, {key2:value2}
      ],
      {key1:value1, key2:value2}
   }
)
```


# collection删除指定文件
db.collection.remove()





#  索引
db.collection.ensureIndex(indexes,[opt]):创建索引
```
db.collection.ensureIndex({age:1});//age asc的索引
db.collection.ensureIndex({age:1,name:-2});//age asc,name desc的复合索引
db.collection.ensureIndex({age:1,name:-2},{unique:true});//索引唯一
```

# 聚合
MongoDB中聚合(aggregate)主要用于处理数据(诸如统计平均值,求和等)，并返回计算后的数据结果。有点类似sql语句中的 count(*)。
```
db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
```

```

db.mycol.aggregate([{$group : {_id : "$group_field", field2 : {$sum : 1}}}]);//根据group_field字段分组，计算field2的sum
```
- $sum
- $avg  
- $min
- $max
- $max


# 安全
mongod --auth:默认是false,也就是说默认是不需要密码登录的
所以，流程得这样走
先关掉auth，然后登录进入，找到对应的db，添加一个用户，指定权限候，开启auth，然后重启mongod，然后重新登录

创建用户
创建的用户是跟着db走的
```
db.createUser({
    user:'xxx',
    pwd:'xxx',
    roles:[
        {role:'read',db:'test'},
        {role:'readWrite',db:'test'},
        {role:'dbAdmin',db:'test'},
    ]
})
```

role:系统内置角色，很多
- read
- readWrite
- dbAdmin

自己测试发现一个小问题,如果只给用户dbAdmin的话，我是无法查看数据的,必须还要给readWrite才可以








# 参考链接
- [https://blog.csdn.net/dbabruce/article/details/50963956](https://blog.csdn.net/dbabruce/article/details/50963956)
- [http://www.runoob.com/mongodb/mongodb-tutorial.html](http://www.runoob.com/mongodb/mongodb-tutorial.html)
- [https://blog.csdn.net/dbabruce/article/details/50963956](https://blog.csdn.net/dbabruce/article/details/50963956)
- []()