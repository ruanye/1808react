// import { render } from "react-dom";
let React = {
  createElement: function(type, config = {}, children) {
    /// {className: "a"} config
    //返回一个描述dom解构的对象
    let props = {};
    props = { ...config };
    //chidren
    let args = Array.from(arguments).slice(2);
    if (args.length === 1) {
      props.children = children;
    } else {
      props.children = args;
    }
    return { type, props };
  }
};
let ele1 = (
  <h1>
    helloworld
    <label htmlFor="name">
      <input type="text" id="name" />
    </label>
  </h1>
);

//<div id='root'><h1></h1></div>
let ele = React.createElement(
  "h1",
  {
    className: "a"
  },
  "hello world",
  React.createElement("span", null, "span"),
  React.createElement(
    "label",
    {
      htmlFor: "name"
    },
    React.createElement("input", {
      type: "text",
      id: "name"
    })
  )
);
//render方法 给父元素添加子元素
function render(ele, root) {
  //字符串或者数字需要创建文本节点
  if (typeof ele === "string" || typeof ele === "number") {
    return root.appendChild(document.createTextNode(ele));
  }
  let { type, props } = ele;
  //type 标签名 h1 span  props 属性  prop.children  元素的子集 (元素里面的内容（文本,子集的标签）)<div><span>hello world</span></div>
  //创建一个type标签名的元素
  let tagName = document.createElement(type);
  //把创建的标签变成root元素的子集
  root.appendChild(tagName);
  //为了方便遍历 统一处理children 让chilren 变成数组
  if (!Array.isArray(props.children)) {
    props.children = [props.children];
    //props.children ['hello word',{react元素}]
  }

  //处理props props: {className: "a",children:'hello world'}
  for (let key in props) {
    //children 都是当前元素的子元素
    if (key === "children") {
      props["children"].forEach(child => {
        render(child, tagName);
      });
    } else if (key === "className") {
      //1. class 要写成className
      tagName.setAttribute("class", props[key]);
    }else if(key ==='htmlFor'){
      //2. for 要写成htmlFor
      tagName.setAttribute("for", props[key]);
    }else if(key ==='style'){
      //style 要写成对象 
      
    }
  }
}
// id 属性会自动挂载到window上 平时不建议大家这么写 id = root =>window.root
render(ele, document.getElementById("root"));
/* { ele 就是这个对象   react元素/虚拟dom 
  type: "h1",
  props: {className: "a",children:'hello world'}
  2个children的时候  ["hello world", {…}]
}**/

//render(ele, document.getElementById("root"));
