# 页面


页面是定义在pages目录下。

它必须是一个有状态的React组件。JSX只能出现在render方法里面，它会编译成相应的wxml文件，因此不能
使用React.createElement代替JSX。[有关JSX的注意事项可以看这里](jsx.md)


它的样板如下：

```jsx
import React from '@react';
class P extends React.Component {
    constructor() {
        super();
        this.state = {
            iconSize: [20, 30, 40, 50, 60, 70],
            text: 'this is first line\nthis is second line'
        };
    }
    static config =  {}

    add() {
        this.setState({
            text: this.state.text + '\nthis is new line'
        });
    }

    remove() {
        var textAry = this.state.text.split('\n');
        if (!textAry.length) return;
        textAry.pop();

        this.setState({
            text: textAry.join('\n')
        });
    }
    componentWillMount(){
        // eslint-disable-next-line
        console.log('base componentWillMount');
    }
    componentDidMount(){
        // eslint-disable-next-line
        console.log('base componentDidMount');
    }
    render() {
        return (
            <div class="container">
                <div class="item-list">
                    <h2 class="item-list-hd">Icon</h2>
                    <div class="group">
                        {this.state.iconSize.map(function(item) {
                            return <icon type="success" size={item} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default P;
```

页面组件必须使用es6风格来引入依赖与导出自己。

它的静态属性config会抽取出来生成对应的JSON配置对象，有关配置项可以看[这里](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE)