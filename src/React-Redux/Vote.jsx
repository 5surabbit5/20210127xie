import React from 'react';
// import PropTypes from 'prop-types';
import actions from '../store/action';
import { connect } from './my-react-redux2';
import './vote.less';
console.log(React);
const VoteMain = connect((state) => state.vote)(function (props) {
  // const { subNum, oppNum } = props.store.getState().vote;
  const { subNum, oppNum } = props;
  return (
    <section className="vote-container">
      <p>支持: {subNum}</p>
      <p>反对：{oppNum}</p>
      <p>支持率：--</p>
    </section>
  );
});

const VoteFooter = connect(
  null,
  actions.vote
)(function (props) {
  // const store = props.store;
  // console.log(vote);
  // console.log(person);
  // console.log(actions);
  console.log(props);
  const { changeUp, changeDown } = props;
  console.log(changeUp);
  return (
    <footer className="vote-footer">
      <button
        onClick={changeUp}
      >
        支持
      </button>
      <button
        onClick={() => {
          changeDown();
        }}
      >
        反对
      </button>
    </footer>
  );
});

class Vote extends React.Component {
  render() {
    // const store = this.props.store;
    const { subNum, oppNum } = this.props;
    return (
      <div className="vote-box">
        <header className="vote-header">
          <h3 className="title">{this.props.title}</h3>
          <div className="total">N: {oppNum + subNum}</div>
        </header>
        <VoteMain></VoteMain>
        <VoteFooter></VoteFooter>
      </div>
    );
  }
  // componentDidMount() {
  //   this.props.store.subscribe(() => {
  //     this.setState({
  //       ...this.props,
  //     });
  //   });
  // }
}
// function mapStateToProps(state) {
//   return {
//     ...state.vote,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     changeUp() {
//       dispatch(actions.vote.changeUp());
//     },
//     changeDown() {
//       dispatch(actions.vote.changeDown());
//     },
//   };
// }
export default connect((state) => state.vote)(Vote);
