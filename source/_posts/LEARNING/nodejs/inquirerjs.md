---
title: inquirerjs
categories: 
- LEARNING
- nodejs
tags:
- js
---

# inquirerjs
node 互动命令行接口

# 基本用法
```
var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });

```