---
title: canvas
categories: 
- HTML
---

# canvas


Canvas 的默认大小为300像素×150像素（宽×高，像素的单位是px）




替换内容


不能使用css来设置canvas的宽高

# 创建上下文
- canvas.getContext()

# 矩形


- context.fillRect()
- context.strokeRect()
- context.clearRect()


# 路径

- context.buildPath()
- context.closePath()
- context.stroke()
- context.fill()


# 移动笔触
- context.moveTo()

# 直线
- context.lineTo()

# 圆弧
- context.arc()
- context.arcTo()


# 贝塞尔曲线
- context.quadraticCurveTo()
- context.bezierCurveTo()

# 矩形

- context.rect()



# colors

- context.fillStyle
- context.strokeStyle

### 透明度


# 线型 Line styles

- context.lineWidth
- context.lineCap
- context.lineJoin
- context.miterLimit
- context.getLineDash()
- context.setLineDash()
- context.lineDashOffset()


# 渐变

- context.createLinearGradient()
- gradient.createLinearGradient()
- gradient.createRadialGradient()
- gradient.addColorStop()


# 图案样式 Patterns

- context.createPattern()


# 阴影 Shadows

- context.shadowOffsetX
- context.shadowOffsetY
- context.shadowBlur
- context.shadowColor

# 填充 fill
- context.fill()


# 绘制文本

- context.fillText()
- context.strokeText()
- context.font
- context.textAlign
- context.textBaseline 
- context.direction
- context.measureText()
- context.strokeText()
- context.strokeText()
- context.strokeText()



# 绘制文本

- context.drawImage()
- context.fillText()
- context.fillText()
- context.fillText()
- context.fillText()


# 状态的保存和恢复 Saving and restoring state

- context.save()
- context.restore()



# 移动 TranslatingEdit

- context.translate()
- context.rotate()
- context.scale()
- context.transform()

# 组合 Compositing

- context.globalCompositeOperation
- context.clip()

# 动画








由默认的黑色到白色，然后又是黑色。




生成路径的第一步叫做beginPath()。本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径（线、弧形、等等）构成图形。而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形。







canvas 图片用途常用在缩略图的制作上


# demos

- [日本国旗](https://jsbin.com/xozahat/3/edit?html,js,output)
- [三角形](https://jsbin.com/xawequ/1/edit?html,js,output)
- [圆角矩形](https://jsbin.com/ritiwes/1/edit?html,js,output)
- [全屏彩色条](https://jsbin.com/jimapuk/1/edit?html,js,output)
- [全屏彩色快](https://jsbin.com/tekolad/1/edit?html,js,output)
- [文字](https://jsbin.com/lotedak/1/edit?html,js,output)
- [画廊]()
- [缩略图]()
- []()

# links
- [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas)
- [https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)
- [http://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html](http://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)