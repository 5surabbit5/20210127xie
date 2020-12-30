import React from 'react';
import ReactDOM from 'react-dom';
import ControlCenter from './classComponent';
// import TestLifeCycle from './classComponent';
// import Vote from './reactComponent';
// import TestLiftCycle from './classComponent';
// import ControlCenter from './classComponent';
// import { createElement, render } from './SelfJSX';
// import App from './App';
ReactDOM.render(
  <ControlCenter></ControlCenter>,
  document.getElementById('root')
);

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
