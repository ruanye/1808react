// react-dom/index.js
// render(1, document.getElementById("root"));
//{type:h1}
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
  //如果children 不是数组 就把它转化成数组

  // ['hello word',{type:span,props:{}}]
  //遍历props 处理属性
  for (let propname in props) {
    if (propname === "style") {
      //{fontSize: "16px", color: "red"}
      //fontSize -> font-size
      let styleobj = props[propname];
      //第一种写法
      // for (let key in styleobj) {
      //   element.style[key] = styleobj[key];
      // }
      //第二种写法
      let stylestr = Object.keys(styleobj)
        .map(key => {
          let k = key.replace(/[A-Z]/g, function() {
            return `-${arguments[0].toLowerCase()}`;
          }); ///["font-size:16px", "color:red"]
          return `${k}:${styleobj[key]}`;
        })
        .join(";");
      element.style.cssText = stylestr;
    } else if (propname === "htmlFor") {
      element.setAttribute("for", props[propname]);
    } else if (propname === "className") {
      element.setAttribute("class", props[propname]);
    } else if (propname === "children") {
      props[propname].forEach(child => {
        render(child, element);
      });
      //hello world  h1  递归渲染子节点
      // render(props[propname], element);
    } else {
      element.setAttribute(propname, props[propname]);
    }
  }
}
export { render };
