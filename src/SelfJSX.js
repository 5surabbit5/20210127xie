export function createElement(type, props, ...children) {
  let jsxObj = {
    type,
    props: {},
    key: null,
    ref: null,
  };
  console.log(jsxObj);
  if (props) {
    // 处理key和ref
    if (props.hasOwnProperty('key')) {
      jsxObj.key = props.key;
      delete props.key;
    }
    if (props.hasOwnProperty('ref')) {
      jsxObj.ref = props.ref;
      delete props.ref;
    }
    jsxObj.props = Object.assign(jsxObj.props, props);
  }
  if (children.length > 0) {
    if (children.length === 1) {
      jsxObj.props.children = children[0];
    } else {
      jsxObj.props.children = children;
    }
  }
  return jsxObj;
}
export function render(jsxObj, container, callback) {
  // debugger;
  const { type, props } = jsxObj;
  console.log(props);
  // 根据type创建一个DOM元素对象（真实DOM）
  const element = document.createElement(type),
    CLASSNAME = 'className',
    STYLE = 'style',
    CHILDREN = 'children';
  // 根据props中属性依次给创建的元素进行设置
  for (let key in props) {
    if (!props.hasOwnProperty(key)) {
      break;
    }
    // 对于className \ style \ children 要做特殊处理
    if (key === CLASSNAME) {
      element.className = props[key];
      continue;
    }
    if (key === STYLE) {
      const styleObj = props[key];
      for (let style in styleObj) {
        if (!styleObj.hasOwnProperty(style)) {
          break;
        }
        element[STYLE][style] = styleObj[style];
      }
      continue;
    }
    if (key === CHILDREN) {
      const children = props[key];
      const childrenArray = Array.isArray(children) ? children : [children];
      childrenArray.forEach((child) => {
        if (typeof child === 'string') {
          const textNode = document.createTextNode(child);
          element.appendChild(textNode);
          return;
        }
        render(child, element);
      });
      continue;
    }
    element.setAttribute(key, props[key]);
  }
  // 把创建的元素对象添加到指定的容器中
  container.appendChild(element);
  if (typeof callback === 'function') {
    callback();
  }
}
