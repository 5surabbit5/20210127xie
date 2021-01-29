import { number } from 'prop-types';
import React from 'react';
// import PropTypes from 'prop-types';
import './vote.less';
class VoteMain extends React.Component {
  render() {
    const { oppNum, defNum, handleRadio } = this.props;
    return (
      <section className="vote-container">
        <p>支持: {oppNum}</p>
        <p>反对：{defNum}</p>
        <p>支持率：{handleRadio()}</p>
      </section>
    );
  }
}

class VoteFooter extends React.Component {
  render() {
    // console.log(this.props);
    const { callback } = this.props;
    return (
      <footer className="vote-footer">
        <button onClick={() => callback('increase', 10)}>支持</button>
        <button onClick={() => callback('decrease')}>反对</button>
      </footer>
    );
  }
}

export default class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oppNum: 0,
      defNum: 0,
    };
  }
  render() {
    const { oppNum, defNum } = this.state;
    return (
      <div className="vote-box">
        <header className="vote-header">
          <h3 className="title">{this.props.title}</h3>
          <div className="total">N: {oppNum + defNum}</div>
        </header>
        <VoteMain
          oppNum={oppNum}
          defNum={defNum}
          handleRadio={this.handleRadio}
        ></VoteMain>
        <VoteFooter callback={this.handleNum}></VoteFooter>
      </div>
    );
  }
  handleNum = (type, defaultNumber = 1) => {
    console.log(type, defaultNumber);
    const { oppNum, defNum } = this.state;
    this.setState({
      oppNum: type === 'increase' ? oppNum + defaultNumber : oppNum,
      defNum: type === 'decrease' ? defNum + defaultNumber : defNum
    })
    // if (type === 'increase') {
    //   this.setState({
    //     oppNum: oppNum + defaultNumber,
    //   });
    //   return;
    // }
    // this.setState({
    //   defNum: defNum + defaultNumber,
    // });
  };
  handleRadio = () => {
    const { oppNum, defNum } = this.state;
    let total = oppNum + defNum;
    let res;
    if (total === 0) {
      res = '--';
    } else {
      const radio = (oppNum / total) * 100;
      res = radio.toFixed(2) + '%';
    }
    return res;
  };
}
