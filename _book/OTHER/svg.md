---
title: svg
categories: 

- OTHER

---

#SVG


# 基本图形
- ##rect:矩形
    ### 属性
        + x:左上角x轴坐标
        + y:左上角y轴坐标
        + rx:圆角
        + ry:圆角
- circle:圆
    ### 属性
        + cx:圆点的x坐标
        + cy:圆点的y坐标
        + r:半径
- ellipse:椭圆
    ### 属性
        + cx:圆点的x坐标
        + cy:圆点的y坐标
        + rx:水平半径
        + ry:垂直半径
- line:直线
    ### 属性
        + x1 属性在 x 轴定义线条的开始
        + y1 属性在 y 轴定义线条的开始
        + x2 属性在 x 轴定义线条的结束
        + y2 属性在 y 轴定义线条的结束
- polygon:多边形
    ### 属性
        + point:x1,y1 x2,y2 x3,y3(坐标用逗号分隔，每个点之间用空格分隔)
- polyline:曲线
    ### 属性
       + point:x1,y1 x2,y2 x3,y3(坐标用逗号分隔，每个点之间用空格分隔)
- path
    ### 属性
        + d:定义路径的规则
        ```
        <path d="M150 0 L75 200 L225 200 Z" />

        <path d="M10,0 L30,60 L90,30 Z"
                 fill="red" stroke="blue" stroke-width="1" />
        ```
        一条路径，它开始于位置150 0，到达位置75 200，然后从那里开始到225 200，最后在150 0关闭路径
        M:表示开始
        Z:闭合路径
- text
    ### 属性
        + x:左上坐标
        + y:左上坐标

# Stroke 属性
- stroke
- stroke-width
- stroke-linecap
- stroke-dasharray


# SVG 滤镜
# SVG 模糊效果
