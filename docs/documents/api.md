# API

| api                       | 类型          | 说明                                                   |     |
|---------------------------|-------------|------------------------------------------------------
| React.createElement       | 内部API       | 创建元素, 框架在内部会帮你调用这个方法，业务代码中不要用它                       |     |
| React.createRef           | &nbsp;      | 不存在                                                  |     |
| React.forwardRef          | &nbsp;      | 不存在                                                  |     |
| React.wx                  | &nbsp;      | 相当于微信的wx，对里面许多方法做了Promise处理                          |     |
| React.getApp              | &nbsp;      | 相当于微信的getApp                                         |     |
| React.getCurrentPages     | &nbsp;      | 相当于微信的geCurrentPage                                  |     |
| React.Component           | &nbsp;      | 所有组件的基类                                              |     |
| React.toComponent         | 内部API       | 用来创建组件                                               |     |
| React.toRenderProps       | 内部API       | 用来代替render属性对应的函数                                    |     |
| React.toClass             | 内部API       | 用来转译es6类                                             |     |
| React.toStyle             | 内部API       | 用来转译样式                                               |     |
| React.toPage              | 内部API       | 页面组件会自动在底部添加这方法                                      |     |
| componentDidShow          | 页面组件的生命周期钩子 | 相当于onShow                                            |     |
| componentDidHide          | 页面组件的生命周期钩子 | 相当于onHide                                            |     |
| componentWillMount        | 组件的生命周期钩子   | 页面组件的props中有path, query等路由相关信息                       |     |
| componentWillUpdate       | 组件的生命周期钩子   |                                                      |     |
| componentDidMount         | 组件的生命周期钩子   |                                                      |     |
| componentDidUpdate        | 组件的生命周期钩子   |                                                      |     |
| componentWillRecieveProps | 组件的生命周期钩子   |                                                      |     |
| componentWillUnmount      | 组件的生命周期钩子   |                                                      |     |
| shouldComponentUpdate     | 组件的生命周期钩子   |                                                      |     |
| componentDidCatch         | 组件的生命周期钩子   |                                                      |     |
| setState                  | 组件的方法       | 更新页面                                                 |     |
| forceUpdate               | 组件的方法       | 更新页面                                                 |     |
| refs                      | 组件实例上的对象    | 里面保存着子组件的实例（由于没有DOM，对于普通标签来说， <br />虽然也能保存着它的虚拟DOM ) |     |
| render                    | 组件的方法       | 里面必须使用JSX ，其他方法不能存在JSX，不能显式使用createElement           |     |
