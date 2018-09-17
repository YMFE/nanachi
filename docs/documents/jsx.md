# jsx

小程序的wxml只支持view、text与它的那些内置组件标签，娜娜奇可以让你直接使用div, span, p, b, strong等HTML标签。块状元素会转换成view, 内联元素会转换为text

如果你使用React方式定义组件，那么对应的标签名必须以大写开头。

在小程序中，组件不支持包含其他标签，但我们的React组件可以充许包含其他标签或组件。

有关循环，if, 组件套组件，render props等用法，可以脚手架的qunar示例

```jsx
<Login>
  <p>xxxxx</p>
</Login>
```