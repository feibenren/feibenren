---
title: css写一个正方体
categories: 
- LEARNING
- css
tags:
- css
---

# 一知半解
```
div.container {
  transform-style: preserve-3d;
  perspective: 1000;
  border: 1px solid #eee;
  padding: 300px 0;
  text-align: center;
  &:hover {
    .box {
      transform-origin: 150px,150px;
      transform: rotate3d(0.3,0.4,0.3,180deg);
    }
  }
  .box {
    transition: all 1s;
    display: inline-block;
    position: relative;
    transform-style: preserve-3d;
    perspective: 500;
    width: 300px;
    height: 300px;
    transition: all 5s;
    .main {
      width: 300px;
      height: 300px;
      background-color: #aaa;
      position: absolute;
      font-size: 100px;
      color: #fff;
      text-align: center;
      line-height: 300px;
      &.qian {
        background-color: red; 
        transform: translateZ(150px);
      }
      &.hou {
        background-color: yellow;
      }
      &.zuo {
        background-color: rebeccapurple;
        transform: translateX(-150px) rotateY(-90deg);
      }
      &.you {
        background-color: yellowgreen;
        transform: translateX(150px) rotateY(-90deg);
      }
      &.shang {
        background-color: burlywood;
        transform: translateY(-150px) rotateX(90deg);
      }
      &.xia {
        background-color: brown;
        transform: translateY(150px) rotateX(90deg);
      }
    }
  }
}

```