---
title: path
categories: 
- CANVAS
---



# beginPath()

 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。


本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径（线、弧形、等等）构成图形。而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形。

# closePath()

闭合路径之后图形绘制命令又重新指向到上下文中。


这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做。


# 四步

- beginPath()
- 画图
- closePath()
- fill()/stroke()




弧度=(Math.PI/180)*角度



Path2D




[lineCap](https://jsbin.com/sehuquh/5/edit?html,js,output)
[lineJoin](https://jsbin.com/hezuqam/1/edit?html,js,output)