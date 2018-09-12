# 开发目录

我们将创建的工程，用vscode打开大概如下

![z](src_1.png)

里面有

1 dist,用来放编译好的文件，给微信运行的

2 src, 用来开发

3 packages.json用来添加依赖，如果你需要什么新依赖，你可以在当前工程下，｀npm i xxx`

重点讲src

src里面assets, 放静态资源，所有静态资源都应该放在这里 components用来放业务组件 pages用来页面组件 app.js为应用组件

其他文件基本不用动。

我们可以访问下面链接详细了解这三种组件，我们的开发也围张它们进行。

[应用组件](app.md) [页面组件](page.md) [通用组件](component.md)