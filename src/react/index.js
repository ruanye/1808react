//为了不修改传递过来的props属性
/* { ele 就是这个对象  
  type: "h1",
  props: {className: "a",b:"1",chidren:'hello world'}
}**/
function reactElement(type, props) {
  return { type, props };
}
function createElement(type, config = {}, children) {
  //把传递过来的对象克隆到props对象上面
  let props = {};
  //config  传递过来的对象
  for (let propname in config) {
    props[propname] = config[propname];
  }
  props.children = children;
  return reactElement(type, props);
}
export default {
  createElement
};
