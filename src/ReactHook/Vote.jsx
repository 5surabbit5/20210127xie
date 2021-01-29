import React, { useState, createRef, useRef } from 'react';
// import PropTypes from 'prop-types';
import './vote.less';

// 自定义实现useState
// let state;
// function useState(initialState) {
//   if (!state) {
//     state = initialState;
//   }
//   function dispatchAction(new_state) {
//     state = new_state;
//     // render
//   }
//   return [state, dispatchAction]
// }
// 自定义实现useEffect
// 如果传的是一个空数组，用some循环后的结果就是false
let prev = [];
function myuseEffect(callback, deps) {
  let flag;
  if (deps && deps.length > 0) {
    flag = deps.some((item, index) => {
      return item !== prev[index];
    });
  } else {
    flag = prev ? true : false;
  }
  if (!deps || flag) {
    callback();
    // prev = deps && deps.length === 0 ? null : deps;
    if (deps && deps.length === 0) {
      prev = null;
      return;
    }
    prev = deps;
  }
}
let prevDOMelement;
export default function Vote(props) {
  // const [support, setSupport] = useState(0);
  // const [oppose, setOppose] = useState(0);
  const [state, setState] = useState(() => {
    return {
      support: 0,
      oppose: 0,
    };
  });
  console.log(state);
  const { support, oppose } = state;
  const inputRef = useRef();
  console.log(inputRef === prevDOMelement);
  prevDOMelement = inputRef;
  return (
    <div className="vote-box">
      <header className="vote-header">
        <h3 className="title">{props.title}</h3>
        <div className="total">N: 0</div>
      </header>
      <section className="vote-container">
        <p>支持: {support}</p>
        <p>反对：{oppose}</p>
        <p>支持率：0</p>
      </section>
      <footer className="vote-footer">
        <button
          onClick={() => {
            setState({
              ...state,
              support: support + 1,
            });
          }}
        >
          支持
        </button>
        <button
          onClick={() => {
            setState({
              ...state,
              oppose: oppose + 1,
            });
          }}
        >
          反对
        </button>
      </footer>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          // console.log(inputRef);
          inputRef.current.focus();
        }}
      >
        点击之后自动聚焦
      </button>
    </div>
  );
}
// export default class Vote extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       oppNum: 0,
//       defNum: 0,
//     };
//   }
//   componentDidUpdate() {
//     console.log(prev);
//     myuseEffect(() => {
//       console.log('ok');
//     }, [this.state.defNum]);
//   }
//   render() {
//     const { oppNum, defNum } = this.state;
//     return (
//       <div className="vote-box">
//         <header className="vote-header">
//           <h3 className="title">{this.props.title}</h3>
//           <div className="total">N: {oppNum + defNum}</div>
//         </header>
//         {/* <VoteMain
//           oppNum={oppNum}
//           defNum={defNum}
//           handleRadio={this.handleRadio}
//         ></VoteMain>
//         <VoteFooter callback={this.handleNum}></VoteFooter> */}
//         <section className="vote-container">
//           <p>支持: {oppNum}</p>
//           <p>反对：{defNum}</p>
//           <p>支持率：0</p>
//         </section>
//         <footer className="vote-footer">
//           <button onClick={() => this.handleNum('increase')}>支持</button>
//           <button onClick={() => this.handleNum('decrease')}>反对</button>
//         </footer>
//       </div>
//     );
//   }
//   handleNum = (type, defaultNumber = 1) => {
//     // console.log(type, defaultNumber);
//     const { oppNum, defNum } = this.state;
//     this.setState({
//       oppNum: type === 'increase' ? oppNum + defaultNumber : oppNum,
//       defNum: type === 'decrease' ? defNum + defaultNumber : defNum,
//     });
//     // if (type === 'increase') {
//     //   this.setState({
//     //     oppNum: oppNum + defaultNumber,
//     //   });
//     //   return;
//     // }
//     // this.setState({
//     //   defNum: defNum + defaultNumber,
//     // });
//   };
//   handleRadio = () => {
//     const { oppNum, defNum } = this.state;
//     let total = oppNum + defNum;
//     let res;
//     if (total === 0) {
//       res = '--';
//     } else {
//       const radio = (oppNum / total) * 100;
//       res = radio.toFixed(2) + '%';
//     }
//     return res;
//   };
// }
