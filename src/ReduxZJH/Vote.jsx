import React from 'react';
// import PropTypes from 'prop-types';
import * as actions from '../store/action';
import './vote.less';

function VoteMain(props) {
  const { subNum, oppNum } = props.store.getState().vote;
  return (
    <section className="vote-container">
      <p>支持: {subNum}</p>
      <p>反对：{oppNum}</p>
      <p>支持率：--</p>
    </section>
  );
}
function VoteFooter(props) {
  const store = props.store;
  // console.log(vote);
  // console.log(person);
  // console.log(actions);
  return (
    <footer className="vote-footer">
      <button
        onClick={() => {
          store.dispatch(actions.vote.changeUp());
        }}
      >
        支持
      </button>
      <button
        onClick={() => {
          store.dispatch(actions.vote.changeDown());
        }}
      >
        反对
      </button>
    </footer>
  );
}

export default class Vote extends React.Component {
  constructor(props) {
    super(props);
    const { subNum, oppNum } = this.props.store.getState().vote;
    this.state = {
      subNum,
      oppNum,
    };
  }
  render() {
    const store = this.props.store;
    const { subNum, oppNum } = this.state;
    return (
      <div className="vote-box">
        <header className="vote-header">
          <h3 className="title">{this.props.title}</h3>
          <div className="total">N: {oppNum + subNum}</div>
        </header>
        <VoteMain store={store}></VoteMain>
        <VoteFooter store={store}></VoteFooter>
      </div>
    );
  }
  componentDidMount() {
    this.props.store.subscribe(() => {
      this.setState({
        ...this.props.store.getState().vote,
      });
    });
  }
}
