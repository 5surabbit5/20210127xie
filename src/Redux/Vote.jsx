import React from 'react';
// import PropTypes from 'prop-types';
import actions from '../store/action';
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
  console.log(store);
  return (
    <footer className="vote-footer">
      <button
        onClick={() => {
          // store.dispatch({
          //   type: 'changeUp',
          //   n: 10,
          // });
          store.dispatch(actions.vote.changeUp());
        }}
      >
        支持
      </button>
      <button
        onClick={() => {
          // store.dispatch({
          //   type: 'changeDown',
          // });
          store.dispatch(actions.vote.changeDown());
        }}
      >
        反对
      </button>
    </footer>
  );
}

export default class Vote extends React.Component {
  render() {
    const store = this.props.store;
    // console.log(store.getState());
    const { subNum, oppNum } = store.getState().vote;
    console.log(subNum);
    return (
      <div className="vote-box">
        <header className="vote-header">
          <h3 className="title">{this.props.title}</h3>
          <div className="total">N: {subNum + oppNum}</div>
        </header>
        <VoteMain store={store}></VoteMain>
        <VoteFooter store={store}></VoteFooter>
      </div>
    );
  }
  componentDidMount() {
    let unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }
}
