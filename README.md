## react  
### 创建react项目的2种方式
1. npx create-react-app '项目名称'
2. 全局安装creat-react-app 
- npm install create-react-app -g 
- create-react-app '项目名称' 
### react 主要包含2个包 react react-dom  
- document.createTextNode()  创建文本节点 
- jsx 语法 默认会使用大写React 这个变量
- 用对象来描述元素叫做虚拟dom creatElement方法返回的是一个react元素/虚拟dom  
### jsx语法以及jsx写法特点
- jsx js + xml(html)
- class => className  class 关键字 
-  html 里区别：  遇到js变量需要用{} 来包裹
- style => 对象形式 
- label for => htmlFor
- innerHtml => dangerouslySetInnerHTML v-html xss攻击 可以信赖的内容
- {} 取值放js代码 必须要有返回值
- 事件 事件名 on大写开头的名字  后面跟的是方法
- 注释只能采用 js注释
