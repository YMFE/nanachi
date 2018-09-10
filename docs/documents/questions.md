# 常见问题

* render 里面不能定义变量
* 组件必须定义在components中
* 页面引用了组件了，如果组件有样式，那么页面的样式表也要import这个组件的样式表
* 为什么底部不出现TabBar？ 这是小程序自身的BUG，详见 https://www.cnblogs.com/bellagao/p/6291880.html
* 路由跳转时，如何拿到当前路径与参数，原来是通过onLoad方法拿，现在你可以通过任何一个页面组件的生命周期钩子，访问this.props，里面就有path与query属性
* 静态资源统一放到src目录下的assets目录下

更多问题请到GITHUB提ISSUE或QQ 370262116