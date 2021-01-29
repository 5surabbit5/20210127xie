import React from 'react';
import PropTypes from 'prop-types';
import './vote.less';
class VoteMain extends React.Component {
  static contextTypes = {
    support: PropTypes.number,
    oppose: PropTypes.number,
  };
  render() {
    // console.log(this.context);
    const { support, oppose } = this.context;
    return (
      <section className="vote-container">
        <p>支持: {support}</p>
        <p>反对：{oppose}</p>
        <p>支持率：--</p>
      </section>
    );
  }
}

class VoteFooter extends React.Component {
  static contextTypes = {
    handleNum: PropTypes.func,
  };
  render() {
    // console.log(this.context);
    const { handleNum } = this.context;
    return (
      <footer className="vote-footer">
        <button onClick={() => handleNum('increase')}>支持</button>
        <button onClick={() => handleNum('decrease')}>反对</button>
      </footer>
    );
  }
}

export default class Vote extends React.Component {
  static childContextTypes = {
    support: PropTypes.number,
    oppose: PropTypes.number,
    handleNum: PropTypes.func,
  };

  getChildContext() {
    return {
      support: this.state.support,
      oppose: this.state.oppose,
      handleNum: this.handleNum,
    };
  }

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
    return (
      <div className="vote-box">
        <header className="vote-header">
          <h3 className="title">{this.props.title}</h3>
          <div className="total">N: 0</div>
        </header>
        <VoteMain></VoteMain>
        <VoteFooter></VoteFooter>
      </div>
    );
  }
}
