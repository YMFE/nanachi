# 常见问题

* 暂时不支持redux,请使用React.getApp().globalData来在页面间交换数据
* render 里面不能定义变量,即不能出现var, const, let语句。render里只能使用JSX来描述结构，不能使用React.createElement。
* 组件必须定义在components中
* 页面引用了组件了，如果组件有样式，那么页面的样式表也要import这个组件的样式表
* 为什么底部不出现TabBar？ 这是小程序自身的BUG，详见 https://www.cnblogs.com/bellagao/p/6291880.html
* 路由跳转时，如何拿到当前路径与参数，原来是通过onLoad方法拿，现在你可以通过任何一个页面组件的生命周期钩子，访问this.props，里面就有path与query属性
* 静态资源统一放到src目录下的assets目录下
* wxml模板部分，如果使用了箭头函数，那么它里面不能出现this关键字
* 不要在props, state, context里面放JSX，因为JSX的结构容易出现环引用，导到微信小程序内部的JSON.stringify出错
* slot机制与render props是有代价，它们会在components/Fragments目下添加许多当作桥梁用的碎片文件，不要滥用
* render props机制只能用于有狀态组件，并且只应用于render属性，只能传一个参数，参数只能是this.state或this.props

更多问题请到GITHUB提ISSUE或QQ 370262116