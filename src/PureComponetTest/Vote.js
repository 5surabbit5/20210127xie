import React from 'react';
import PropTypes from 'prop-types';
import './vote.less';

// 创建一个容器用来装上下文
const Context = React.createContext();
const shadowCompare = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
class VoteMain extends React.Component {
  render() {
    console.log('ok');
    return (
      <Context.Consumer>
        {(context) => {
          return (
            <section className="vote-container">
              <p>支持: {context.support}</p>
              <p>反对：{context.oppose}</p>
              <p>支持率：--</p>
            </section>
          );
        }}
      </Context.Consumer>
    );
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps, nextState);
  //   return true;
  // }
}

class VoteFooter extends React.PureComponent {
  render() {
    // console.log(this.context);
    return (
      <Context.Consumer>
        {(context) => {
          return (
            <footer className="vote-footer">
              <button
                onClick={() => {
                  // context.handleNum('increase')
                  // context.arr.push(30);
                }}
              >
                支持
              </button>
              <button onClick={context.handleNum.bind(null, 'decrease')}>
                反对
              </button>
            </footer>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default class Vote extends React.Component {
  state = {
    support: 0,
    oppose: 0,
    arr: [10, 20],
  };

  handleNum = (type) => {
    const { support, oppose } = this.state;
    type === 'increase'
      ? this.setState({ support: support + 1 })
      : this.setState({ oppose: oppose + 1 });
  };
  render() {
    const { support, oppose, arr } = this.state;
    return (
      <Context.Provider
        value={{
          support,
          oppose,
          handleNum: this.handleNum,
          arr,
        }}
      >
        <div className="vote-box">
          <header className="vote-header">
            <h3 className="title">{this.props.title}</h3>
            <div className="total">N: 0</div>
          </header>
          <VoteMain></VoteMain>
          <VoteFooter></VoteFooter>
        </div>
      </Context.Provider>
    );
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(nextProps, nextState);
  //   return !shadowCompare(this.state, nextState)
  // }
}
