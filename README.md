## react

### 创建 react 项目的 2 种方式

1. npx create-react-app '项目名称'
2. 全局安装 creat-react-app

- npm install create-react-app -g
- create-react-app '项目名称'

### react 主要包含 2 个包 react react-dom

- document.createTextNode() 创建文本节点
- jsx 语法 默认会使用大写 React 这个变量  因为 jsx 语法会自动调用 React.creatElenment 这个方法
- 用对象来描述元素叫做虚拟 dom creatElement 方法返回的是一个 react 元素/虚拟 dom(对象)

### jsx 语法以及 jsx 写法特点

- jsx js + xml(html) jsx 写 js 使用{} <> 表示 html
- class => className class 关键字
- label for => htmlFor
- style => 对象形式 {fontSize:16px;color:red}
```jsx 
// style 写法示例 第一个大括号 表示js 第二个大括号表示对象
<h1 className="a" style={{ fontSize: "16px", color: "red" }} />
```
- csstext的用法
```html
  <div id="root">111</div>
   <script>
   root.style.cssText = "color:red;font-size:60px"
   </script>
```
- 
```js 
Object.keys({name:'lili',age:3})  //es5
 //结果  
 ["name", "age"]
Object.values({name:'lili',age:3})
 //结果 
 ["lili", 3]
Object.entries({name:'lili',age:3})
  //结果
 [["name", "lili"],["age", 3]]
```
- 数组转字符串 join  字符串转数组 split
```js
'1,2,3,4'.split() 
//结果  [1,2,3,4]
 [1,2,3,4].join() 
 '1,2,3,4'
```
- innerHtml => dangerouslySetInnerHTML v-html xss 攻击 可以信赖的内容
```jsx
 <div dangerouslySetInnerHTML={{ __html: "<span>这是插入的html</span>"}}></div>
```
- {} 取值放 js 代码 必须要有返回值
- 事件 事件名 on 大写开头的名字 后面跟的是方法
```jsx
function fn() {
  alert(1);
}
let ele = <div onClick={fn}>点击我</div>
```
- 注释只能采用 js 注释
- html 里区别： 遇到 js 变量需要用{} 来包裹
