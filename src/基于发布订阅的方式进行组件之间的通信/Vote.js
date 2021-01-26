import React from 'react';
// import PropTypes from 'prop-types';
import './vote.less';
import EventBus from './EmitBus';
class VoteMain extends React.Component {
  state = {
    support: 0,
    oppose: 0,
  };
  componentDidMount() {
    EventBus.$on('changeNum', this.handleNum);
  }
  render() {
    const { support, oppose } = this.state;
    return (
      <section className="vote-container">
        <p>支持: {support}</p>
        <p>反对：{oppose}</p>
        <p>支持率：--</p>
      </section>
    );
  }
  handleNum = (type) => {
    const { support, oppose } = this.state;
    type === 'increase'
      ? this.setState({ support: support + 1 })
      : this.setState({ oppose: oppose + 1 });
  };
}

class VoteFooter extends React.Component {
  render() {
    // console.log(EventBus);
    return (
      <footer className="vote-footer">
        <button
          onClick={() => {
            // console.log(EventBus);
            EventBus.$emit('changeNum', 'increase');
            // EventBus.$emit('changeTotal');
          }}
        >
          支持
        </button>
        <button
          onClick={() => {
            EventBus.$emit('changeNum', 'decrease');
            // EventBus.$emit('changeTotal');
          }}
        >
          反对
        </button>
      </footer>
    );
  }
}

export default class Vote extends React.Component {
  state = {
    total: 0,
  };
  // componentDidMount() {
  //   EventBus.$on('changeTotal', this.handleTotal);
  // }
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
  // handleTotal = () => {
  //   this.setState(({ total }) => ({
  //     total: total + 1,
  //   }));
  // };
}
