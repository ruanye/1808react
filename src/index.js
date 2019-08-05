import React from "./react";
import { render } from "./react-dom";
//jsx 语法 js+xml(html)
//jsx 会自动使用React.creatElement方法
// let ele = <h1 className='a'>hello
// <span>world</span></h1>;
let ele = React.createElement(
  "h1",
  {
    className: "a",
    b: 1
  },
  "hello world"
);
console.log(ele);
/* { ele 就是这个对象   react元素/虚拟dom 
  type: "h1",
  props: {className: "a",b:"1",children:'hello world'}
}**/
render(ele, document.getElementById("root"));
