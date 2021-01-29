import React from 'react';
const Context = React.createContext();
class Provider extends React.Component {
  render() {
    return (
      <Context.Provider value={{ store: this.props.store }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
const connect = function (mapStateToProps, mapDispatchToProps) {
  if (mapDispatchToProps && typeof mapDispatchToProps !== 'function') {
    const actions = mapDispatchToProps;
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
  return function (Component) {
    return class Proxy extends React.Component {
      static contextType = Context;
      render() {
        const receiveProps = this.deliverProps();
        return (
          <Context.Consumer>
            {(context) => {
              return <Component {...receiveProps}></Component>;
            }}
          </Context.Consumer>
        );
      }
      componentDidMount() {
        this.context.store.subscribe(() => {
          this.forceUpdate();
        });
      }
      deliverProps = () => {
        let state =
          mapStateToProps && mapStateToProps(this.context.store.getState());
        let dispatchFunc =
          mapDispatchToProps && mapDispatchToProps(this.context.store.dispatch);
        return {
          ...state,
          ...dispatchFunc,
        };
      };
    };
  };
};
export { Provider, connect };
