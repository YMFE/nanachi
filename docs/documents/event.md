# 事件系统

小程序有两种绑定事件的方式 

* bindtap 绑定一个会冒泡的tap事件
* catchtap  绑定一个不会冒泡的tap事件

```jsx
<view bindtap="eventName"></view>
```

娜娜奇为了大家方便，还是换回大家熟悉的风格，但不能冒泡的限制还没有搞定，因此也是两种绑定风格

* onTap 绑定一个会冒泡的tap事件
* catchTap  绑定一个不会冒泡的tap事件

```jsx
<div onClick={this.clickHandle.bind(this, 111)}></div>
```

tap事件相当于PC端的click事件，因此大家可以用onClick代替onTap, 娜娜奇会友好地帮你转换成onTap.

## 事件对象

娜娜奇帮你抹平了PC与小程序的差异，小程序原来将这么特殊属性放在event.detail对象上，现在都放在target上。并且还添加了stopPropagation与preventDefault方法。

注意stopPropagation是没有效果的，你想并且冒泡还需要用catchClick的方式来绑定事件。

## 事件回调

事件回调本身必须定义在类的原型里，不能通过props传递进来。
