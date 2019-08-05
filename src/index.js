import React from "./react";
import { render } from "./react-dom";
//jsx 语法 js+xml(html)
//jsx 会自动使用React.creatElement方法
//用{}js
let ele = (
  <h1 className="a" style={{ fontSize: "16px", color: "red" }}>
    hello|
    <span>中国</span>
    <label htmlFor="name">
      输入名字
      <input id="name" type="text" />
    </label>
  </h1>
);
let ele1 = React.createElement(
  "h1",
  {
    className: "a"
  },
  "hello|",
  React.createElement("span", null, "hell0"),
  React.createElement(
    "label",
    {
      htmlFor: "name"
    },
    "label标签",
    React.createElement("input", {
      id: "name",
      type: "text"
    })
  )
);
console.log(ele);
/* { ele 就是这个对象   react元素/虚拟dom 
  type: "h1",
  props: {className: "a",id:"1",children:'hello world'}
}**/
render(ele, document.getElementById("root"));
