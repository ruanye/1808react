import React from "./react";
import { render } from "./react-dom";
//jsx 语法 js+xml(html)
//jsx 会自动使用React.creatElement方法
//用{}js
// let str = "<span>这是插入的html</span>";
// 可以信赖的html才使用 防止xss攻击
// let ele = <div dangerouslySetInnerHTML={{ __html: "<span>这是插入的html</span>"}}></div>;
function fn() {
  alert(1);
}
let ele = <div onMouseLeave={fn}>点击我</div>;
let ele1 = React.createElement("h1", {
  className: "a",
  style: {
    color: "red",
    fontSize: "28px"
  },
  dangerouslySetInnerHTML: {
    __html: "<span>这是插入的html</span>"
  },
  onClick: function() {
    alert(1);
  }
});

/* { ele 就是这个对象   react元素/虚拟dom 
  type: "h1",
  props: {className: "a",id:"1",children:'hello world'}
}**/
render(ele1, document.getElementById("root"));
