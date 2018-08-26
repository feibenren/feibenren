---
title: debug
categories: 
- VSCODE
---

# debug
vscode内置了nodejs的调试器，同时还支持其他环境的调试，比如浏览器,docker等

每次调试前，都需要先配置launch.json文件

该配置可以指定运行的环境，目录，等等

# nodejs
调试写在nodejs中的程序，只需要配置按钮选择node即可，系统自动生成配置文件

```launch.json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "启动程序",
            "program": "${workspaceFolder}/test.js"
        }
    ]
}
```
生成完成后，编辑器左下角浏览器会自带调试菜单

可以设置多个调试

```
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "111",
            "program": "${workspaceFolder}/test.js"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "222",
            "program": "${workspaceFolder}/test.js"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "333",
            "program": "${workspaceFolder}/test.js"
        },

    ]
}
```



# chrome
vscode就内置了nodejs的调试器，想要在chorme中调试js的话，需要安装一个单独的插件:**Debugger for Chrome**

想要在chrome浏览器中单纯调试js的话，是无法做到的，在chrome中调试的是这个项目，不是单单的js

```
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "启动 Chrome 并打开 localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```
挺复杂的，需要看该插件的官网


