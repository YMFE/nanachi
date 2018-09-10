# 路由

路由器的能力是由Page的生命周期与wx共同完成的

我们可以访问页面组件的componentWillMount/DidMount的this.props得到当前的信息，然后跳转

```jsx
componentWillMount(){
   console.log(  this.props.path )
   console.log(  this.props.query )
   React.wx.navigateTo() // 或redirectTo()或switchTab
}

```

或者使用组件  `<navigator>`  示例：  `<navigator url='../test/test'>点击跳转</navigator>`