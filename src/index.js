import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './React-Redux/my-react-redux2';
// import { createStore } from 'redux';
import ControlCenter from './classComponent';
// import Vote from './基于发布订阅的方式进行组件之间的通信/Vote';
// import Vote from './基于执行上下文的方式进行组件之间的通信/Vote';
// import LunBo from './轮播图案例/lunbo';
// import Vote from './ContextApi/Vote'
// import Vote from './PureComponetTest/Vote'
// import Vote from './ReactHook/Vote'
// import Vote from './Redux/Vote';
// import Vote from './ReduxZJH/Vote';
// import Vote from './React-Redux/Vote';
import './assets/normalize.css';
import store from './store';
// const initialState = {
//   subNum: 0,
//   oppNum: 0,
// };
// const reducer = function (state = initialState, action) {
//   // 初始值怎么写
//   state = JSON.parse(JSON.stringify(state));
//   let n = action.n || 1;
//   switch (action.type) {
//     case 'changeUp':
//       state.subNum += n;
//       break;
//     case 'changeDown':
//       state.oppNum += n;
//       break;
//     default:
//     // throw new Error('派发任务类型错误');
//   }
//   return state;
// };
// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// import TestLifeCycle from './classComponent';
// import Vote from './reactComponent';
// import TestLiftCycle from './classComponent';
// import ControlCenter from './classComponent';
// import { createElement, render } from './SelfJSX';
// import App from './App';
// const arr = [
//   {
//     id: 1,
//     imgName: 'banner1.jpg'
//   },
//   {
//     id: 2,
//     imgName: 'banner2.jpg'
//   },
//   {
//     id: 3,
//     imgName: 'banner3.jpg'
//   },
//   {
//     id: 4,
//     imgName: 'banner4.jpg'
//   }
// ]
// ReactDOM.render(<LunBo data={arr}></LunBo>, document.getElementById('root'));
// ReactDOM.render(<Vote title="测试上下文中提供的API"></Vote>, document.getElementById('root'));
// ReactDOM.render(<Vote title="测试PureComponent的性能优化"></Vote>, document.getElementById('root'));
// ReactDOM.render(<Vote title="测试ReactHook的钩子函数"></Vote>, document.getElementById('root'));
// ReactDOM.render(
//   <Vote title="测试Redux" store={store}></Vote>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <Vote title="Redux工程化" store={store}></Vote>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <ControlCenter></ControlCenter>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <Provider store={store} title="index">
//     <Vote title="react-redux简化redux操作">
//       这里会出现值吗
//     </Vote>,
//     <span>这里出现值2</span>
//   </Provider>,
//   document.getElementById('root')
// );

// console.log(
//   React.createElement(
//     'div',
//     null,
//     '\u73E0\u5CF0\u57F9\u8BAD',
//     React.createElement(Vote, null)
//   )
// );
{
  /* <div>
珠峰培训
<Vote index={10} title="努力学习">
  <span style={{ fontSize: '35px' }}>里面的元素</span>
</Vote>
</div>, */
}
{
  /* <div className="box" id="box" style={{ color: 'red' }}>
你好世界
<span>aaa</span>
</div> */
}
// const realDom = createElement(
//   'div',
//   {
//     className: 'box',
//     id: 'box',
//     index: '1',
//     style: {
//       color: 'red',
//       fontSize: '28px',
//     },
//   },
//   '测试文字',
//   createElement('span', null, 'aaa')
// );
// console.log(realDom);
// render(realDom, document.getElementById('root'), () => {
//   console.log('页面渲染完成了');
// });
