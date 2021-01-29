import React from 'react';
import PropTypes from 'prop-types';
const Context = React.createContext();
export class Provider extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };
  render() {
    console.log(this.props);
    return (
      <Context.Provider value={{ store: this.props.store }}>
        {/* {this.props.children} */}
        {React.Children.map(this.props.children, (item, index) => {
          if (index === 0) {
            return <React.Fragment>{item}</React.Fragment>;
          }
        })}
        {this.props.title}
        {React.Children.map(this.props.children, (item, index) => {
          if (index === 2) {
            return <React.Fragment>{item}</React.Fragment>;
          }
        })}
      </Context.Provider>
    );
  }
}

export function connect(mapStateToProps, mapDispatchToProps) {
  // 把传递的ACTION对象变为DISPATCH派发的形式
  if (mapDispatchToProps && typeof mapDispatchToProps !== 'function') {
    const actions = mapDispatchToProps; // 浅克隆一份
    // 将mapDispatchToProps 指向另一个内存地址
    mapDispatchToProps = function (dispatch) {
      let result = {};
      for (let key in actions) {
        if (!actions.hasOwnProperty(key)) {
          break;
        }
        result[key] = function (...args) {
          dispatch(actions[key](...args));
        };
      }
      return result;
    };
  }
  return function connectHOC(Component) {
    // 返回一个代理组件
    return class Proxy extends React.Component {
      // 代理组件最后要渲染的就是传递进来的Component
      static contextType = Context;
      render() {
        let propsHandle = this.handle();
        return (
          <Context.Consumer>
            {(context) => {
              return <Component {...propsHandle}></Component>;
            }}
          </Context.Consumer>
        );
      }
      componentDidMount() {
        this.context.store.subscribe(() => {
          this.forceUpdate();
        });
      }
      handle() {
        let state =
          mapStateToProps && mapStateToProps(this.context.store.getState());
        let funcs =
          mapDispatchToProps && mapDispatchToProps(this.context.store.dispatch);
        return {
          ...state,
          ...funcs,
        };
      }
    };
  };
}
// 理论上应该处理成这个格式,dispatch核心点在这
// connect(null, function (dispatch) {
//   return {
//     changeNum() {
//       dispatch({
//         type: 'xxx',
//       });
//     },
//   };
// });
// 实际上传的是这种格式
// connect(null, {
//   changeNum() {
//     return {
//       type: 'xxx',
//     };
//   },
// });
