# 应用

即开发目录下的app.js

它最大的作用是将里面所有以./pages/开头的依赖放到app.json中pages配置项中

如果有其他配置项详见[这里](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

统一放在config对象中

如果在使用娜娜奇之前，已经开发了一半，一些组件是用小程序的自定义组件方式定义的，那么可以在usingComponents配置项中定义好。

```jsx
import React from '@react';
import './pages/index/index';


import './pages/demo/base/index';

import './pages/demo/native/index/index';
import './pages/demo/native/button/index';
import './pages/demo/native/checkbox/index';
import './pages/demo/native/input/index';
import './pages/demo/native/slider/index';
import './pages/demo/native/picker/index';
import './pages/demo/native/radio/index';
import './pages/demo/native/textarea/index';
import './pages/demo/native/label/index';
import './pages/demo/native/view/index';
import './pages/demo/native/scrollView/index';
import './pages/demo/native/movableView/index';

import './pages/demo/syntax/index';
import './pages/demo/syntax/api/index';
import './pages/demo/syntax/stateless/index';
import './pages/demo/syntax/loop/index';
import './pages/demo/syntax/extend/index';
import './pages/demo/syntax/inlineStyle/index';
import './pages/demo/syntax/loop3/index';
import './pages/demo/syntax/if/index';
import './pages/demo/syntax/children/index';

import './pages/demo/ticketSearch/index';

import './app.less';

class Demo extends React.Component {
    static config = {
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#0088a4',
            navigationBarTitleText: 'mpreact',
            navigationBarTextStyle: '#fff'
        }
    };
    globalData = {
        ufo: 'ufo'
    };
    onLaunch() {
        // eslint-disable-next-line
        console.log('App launched');
    }
}

// eslint-disable-next-line
App(new Demo());
```