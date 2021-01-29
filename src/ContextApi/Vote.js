import React from 'react';
import PropTypes from 'prop-types';
import './vote.less';

// 创建一个容器用来装上下文
const Context = React.createContext();
class VoteMain extends React.Component {
  render() {
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
}

class VoteFooter extends React.Component {
  render() {
    // console.log(this.context);
    return (
      <Context.Consumer>
        {(context) => {
          return (
            <footer className="vote-footer">
              <button onClick={context.handleNum.bind(null, 'increase')}>
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
  };

  handleNum = (type) => {
    const { support, oppose } = this.state;
    type === 'increase'
      ? this.setState({ support: support + 1 })
      : this.setState({ oppose: oppose + 1 });
  };
  render() {
    const { support, oppose } = this.state;
    return (
      <Context.Provider
        value={{
          support,
          oppose,
          handleNum: this.handleNum,
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
}
