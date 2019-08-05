// react-dom/index.js
// render(1, document.getElementById("root"));
function render(ele, container) {
  //判断ele是文本节点或者数字
  if (typeof ele === "string" || typeof ele === "number") {
    container.appendChild(document.createTextNode(ele));
  }
  //渲染只有一个chidren的jsx元素
  //type h1  props {className:'a',chilreden:'hello world'}
  //obj:{name:'lili'} obj[name]
  let { type, props } = ele;
  //创建h1标签
  let element = document.createElement(type);
  //插入父节点
  container.appendChild(element);
  //遍历props 处理属性
  for (let propname in props) {
    if (propname === "className") {
      element.setAttribute("class", props[propname]);
    } else if (propname === "children") {
      //hello world  h1  递归渲染子节点
      render(props[propname], element);
    } else {
      element.setAttribute(propname, props[propname]);
    }
  }
}
export { render };
