window.ydoc_plugin_search_json = {
  "documents": [
    {
      "title": "介绍",
      "content": "在React转小程序方案出来之前，市面上的方案都是基于vue, 少有的基于React的方案都是问题多。因此我们实现了自己的React转小程序的方案，一来，我们的技术栈可以继续沿袭React，其次，我们也不用委服于原生小程序的淫威（原生小程序真的好原始好原始，要啥都没有，连组件继承都没有）为了标新立异，小程序一个页面通常用wxml, js, json, wxss组成。wxml是一个很弱的字符串模板，它可以通过｛{}｝标识符往里面填数据，但它填数据的地方不支持使用函数，它支持绑定事件，但事件的地方只能指定函数名，不能绑定参数。它里面支持类似于script标签的xws，但仔细使用你会发现它是一个笑话。因此，我们引入JSX，它给予我们更大的自由度，而不是光顾着自己编译得如何舒服。并且它支持大家熟悉的html标签，不用强逼自己使用view与text.js是定义组件的地方，原小程序提供了Component, Page这两个方法来创建组件与页面。但组件与页面的生命周期名字不统一，并且组件不能继承，因此我们还是使用React那一套完美的组件机制吧。json是用于配置页面的标题栏或组件的本身的依赖关系，这些有了娜娜奇，完全由转译器帮你生成，不用你费神。wxss是小程序的样式表文件，我们提供了更强大的选择，sass, less, postcss....如果你的小程序已开发了一半，只想在局部页面试用一下娜娜奇，这个也支持！app.json允许你只编译局部页面。娜娜奇为你提供更多可能性与灵活性，更具体的使用详看其他使用说明。点这里快速开始吧",
      "url": "/documents/intro.html",
      "children": []
    },
    {
      "title": "安装",
      "content": "首先要我们要安装命令与下载微信开发者工具。其次要求nodejs 版本大于8.0git clone git@github.com:RubyLouvre/anu.git# 或 git clone https://github.com/RubyLouvre/anu.git\n1 下载回来，进入anu目录，再进入packages/cli目录，即cd anu/packages/cli, 执行npm link如果之前装过要先npm unlink \n2 使用mpreact  创建工程, 选择模板\n3 定位到  目录下 mpreact start 开始监听文件变化，\n4 用微信开发者工具打开当中的dist目录，自己在src目录中进行开发接下来我们看src的开发目录吧里面有1 dist,用来放编译好的文件，给微信运行的2 src, 用来开发3 packages.json用来添加依赖，如果你需要什么新依赖，你可以在当前工程下，｀npm i xxx`重点讲srcsrc里面assets, 放静态资源，所有静态资源都应该放在这里components用来放业务组件\npages用来页面组件\napp.js为应用组件其他文件基本不用动。我们可以访问下面链接详细了解这三种组件，我们的开发也围张它们进行。应用组件页面组件\n通用组件",
      "url": "/documents/install.html",
      "children": []
    },
    {
      "title": "开发目录",
      "content": "我们将创建的工程，用vscode打开大概如下里面有dist, src, package.json等文件与目录dist是给微信用的src是开发目录\npackages.json是用来添加依赖，我们可以在这工程下｀npm i xxx`添加需要第三方库src目录有assets, components, pages, app.js等文件与目录。assets是用来放静态资源，图片什么都应该放在这里",
      "url": "/documents/src.html",
      "children": []
    },
    {
      "title": "应用",
      "content": "在小程序的体系中，一个应用是由多个页面组成，一个页面是由多个组件组成。即开发目录下的app.js它最大的作用是将里面所有以./pages/开头的依赖放到app.json中pages配置项中如果有其他配置项详见这里统一放在config对象中如果在使用娜娜奇之前，已经开发了一半，一些组件是用小程序的自定义组件方式定义的，那么可以在usingComponents配置项中定义好。import React from '@react';import './pages/index/index';\n\n\nimport './pages/demo/base/index';\n\nimport './pages/demo/native/index/index';\nimport './pages/demo/native/button/index';\nimport './pages/demo/native/checkbox/index';\nimport './pages/demo/native/input/index';\nimport './pages/demo/native/slider/index';\nimport './pages/demo/native/picker/index';\nimport './pages/demo/native/radio/index';\nimport './pages/demo/native/textarea/index';\nimport './pages/demo/native/label/index';\nimport './pages/demo/native/view/index';\nimport './pages/demo/native/scrollView/index';\nimport './pages/demo/native/movableView/index';\n\nimport './pages/demo/syntax/index';\nimport './pages/demo/syntax/api/index';\nimport './pages/demo/syntax/stateless/index';\nimport './pages/demo/syntax/loop/index';\nimport './pages/demo/syntax/extend/index';\nimport './pages/demo/syntax/inlineStyle/index';\nimport './pages/demo/syntax/loop3/index';\nimport './pages/demo/syntax/if/index';\nimport './pages/demo/syntax/children/index';\n\nimport './pages/demo/ticketSearch/index';\n\nimport './app.less';\n\nclass Demo extends React.Component {\n    static config = {\n        window: {\n            backgroundTextStyle: 'light',\n            navigationBarBackgroundColor: '#0088a4',\n            navigationBarTitleText: 'mpreact',\n            navigationBarTextStyle: '#fff'\n        }\n    };\n    globalData = {\n        ufo: 'ufo'\n    };\n    onLaunch() {\n        // eslint-disable-next-line\n        console.log('App launched');\n    }\n}\n\n// eslint-disable-next-line\nApp(new Demo());\n",
      "url": "/documents/app.html",
      "children": []
    },
    {
      "title": "页面",
      "content": "页面是定义在pages目录下。它必须是一个有状态的React组件。JSX只能出现在render方法里面，它会编译成相应的wxml文件，因此不能使用React.createElement代替JSX。有关JSX的注意事项可以看这里它的样板如下：import React from '@react';class P extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            iconSize: [20, 30, 40, 50, 60, 70],\n            text: 'this is first line\\nthis is second line'\n        };\n    }\n    static config =  {}\n\n    add() {\n        this.setState({\n            text: this.state.text + '\\nthis is new line'\n        });\n    }\n\n    remove() {\n        var textAry = this.state.text.split('\\n');\n        if (!textAry.length) return;\n        textAry.pop();\n\n        this.setState({\n            text: textAry.join('\\n')\n        });\n    }\n    componentWillMount(){\n        // eslint-disable-next-line\n        console.log('base componentWillMount');\n    }\n    componentDidMount(){\n        // eslint-disable-next-line\n        console.log('base componentDidMount');\n    }\n    render() {\n        return (\n            \n                \n                    Icon\n                    \n                        {this.state.iconSize.map(function(item) {\n                            return ;\n                        })}\n                    \n                \n            \n        );\n    }\n}\n\nexport default P;\n页面组件必须使用es6风格来引入依赖与导出自己。它的静态属性config会抽取出来生成对应的JSON配置对象，有关配置项可以看这里",
      "url": "/documents/page.html",
      "children": []
    },
    {
      "title": "通用组件",
      "content": "通用组件必须定义在components 目录中，里面建一个文件夹与组件名同名，下面index.js就是你编写组件的位置",
      "url": "/documents/component.html",
      "children": [
        {
          "title": "组件的样板",
          "url": "/documents/component.html#组件的样板",
          "content": "组件的样板import React from '@react';\nclass Animal extends React.Component {\n    constructor(props) {\n        super();\n        this.state = {\n            name: props.name,\n            age: props.age || 1\n        };\n    }\n\n    static defaultProps = {\n        age: 1,\n        name: 'animal'\n    };\n\n    changeAge() {\n        this.setState({\n            age: ~~(Math.random() * 10)\n        });\n    }\n\n    componentDidMount() {\n        // eslint-disable-next-line\n        console.log('Animal componentDidMount');\n    }\n    componentWillReceiveProps(props){\n        this.setState({\n            name: props.name\n        });\n    }\n    render() {\n        return (\n            \n                名字：{this.state.name} 年龄：{this.state.age} 岁\n                换一个年龄\n            \n        );\n    }\n}\n\nexport default Animal;\n由于目录可能比较深，因此娜娜美比较贴心地提供了两个默认的别美，@react 与@components, @react指向开发目录下的ReactWX.js, @components指向开发目录下的components目录。JSX只能出现在render方法或无状态组件的函数体中。JSX的所有填充数据必须带this.props, this.state, this.context前缀。render方法里不能出现 var/const/let 语句，只能出现 if语句与三元表达式或JSX。map方法调用的第一个参数最好使用匿名方法（因为这样会自动bind this）,否则它会自动添加上第二个参数this    {this.state.iconSize.map(function(item) {\n        return ;\n    })}\n\n会变成    {this.state.iconSize.map(function(item) {\n        return ;\n    }, this)}\n\nJSX 禁止出现instanceUid, classUid, eventUid, 这些是内部绑定事件时在编译阶段自动添加的。"
        }
      ]
    },
    {
      "title": "jsx",
      "content": "小程序的wxml只支持view、text与它的那些内置组件标签，娜娜奇可以让你直接使用div, span, p, b, strong等HTML标签。块状元素会转换成view, 内联元素会转换为text如果你使用React方式定义组件，那么对应的标签名必须以大写开头。在小程序中，组件不支持包含其他标签，但我们的React组件可以充许包含其他标签或组件。  xxxxx\n\n",
      "url": "/documents/jsx.html",
      "children": []
    },
    {
      "title": "事件系统",
      "content": "小程序有两种绑定事件的方式bindtap 绑定一个会冒泡的tap事件\ncatchtap  绑定一个不会冒泡的tap事件\n娜娜奇为了大家方便，还是换回大家熟悉的风格，但不能冒泡的限制还没有搞定，因此也是两种绑定风格onTap 绑定一个会冒泡的tap事件\ncatchTap  绑定一个不会冒泡的tap事件\ntap事件相当于PC端的click事件，因此大家可以用onClick代替onTap, 娜娜奇会友好地帮你转换成onTap.",
      "url": "/documents/event.html",
      "children": [
        {
          "title": "事件对象",
          "url": "/documents/event.html#事件对象",
          "content": "事件对象娜娜奇帮你抹平了PC与小程序的差异，小程序原来将这么特殊属性放在event.detail对象上，现在都放在target上。并且还添加了stopPropagation与preventDefault方法。注意stopPropagation是没有效果的，你想并且冒泡还需要用catchClick的方式来绑定事件。"
        },
        {
          "title": "事件回调",
          "url": "/documents/event.html#事件回调",
          "content": "事件回调事件回调本身必须定义在类的原型里，不能通过props传递进来。"
        }
      ]
    },
    {
      "title": "路由",
      "content": "路由器的能力是由Page的生命周期与wx共同完成的我们可以访问页面组件的componentWillMount/DidMount的this.props得到当前的信息，然后跳转componentWillMount(){   console.log(  this.props.path )\n   console.log(  this.props.query )\n   React.wx.navigateTo() // 或redirectTo()或switchTab\n}\n\n或者使用组件    示例：  点击跳转",
      "url": "/documents/router.html",
      "children": []
    },
    {
      "title": "常见问题",
      "content": "暂时不支持redux,请使用React.getApp().globalData来在页面间交换数据\nrender 里面不能定义变量,即不能出现var, const, let语句。render里只能使用JSX来描述结构，不能使用React.createElement。\n组件必须定义在components中\n页面引用了组件了，如果组件有样式，那么页面的样式表也要import这个组件的样式表\n为什么底部不出现TabBar？ 这是小程序自身的BUG，详见 https://www.cnblogs.com/bellagao/p/6291880.html\n路由跳转时，如何拿到当前路径与参数，原来是通过onLoad方法拿，现在你可以通过任何一个页面组件的生命周期钩子，访问this.props，里面就有path与query属性\n静态资源统一放到src目录下的assets目录下\nwxml模板部分，如果使用了箭头函数，那么它里面不能出现this关键字\n不要在props, state, context里面放JSX，因为JSX的结构容易出现环引用，导到微信小程序内部的JSON.stringify出错\n更多问题请到GITHUB提ISSUE或QQ 370262116",
      "url": "/documents/questions.html",
      "children": []
    }
  ],
  "about": [
    {
      "title": "关于我们",
      "content": "  这是由去哪儿平台事业部打造的Reactf转小程序框架，有事可联系QQ 370262116\n",
      "url": "/about/index.html",
      "children": []
    }
  ]
}