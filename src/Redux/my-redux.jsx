export function createStore(reducer) {
  let state;
  let listeners = [];
  function getState() {
    // 为了保证外界拿到的状态与本身无关系
    return JSON.parse(JSON.stringify(state));
  }
  // 向事件池中追加方法
  function subscribe(func) {
    if (!listeners.includes(func)) {
      listeners.push(func);
    }
    return function unsubscribe() {
      // 这样删除之后索引不变或者说这个为什么比splice的性能好
      listeners = listeners.filter((item, index) => {
        return item !== func;
      });
    };
  }
  function dispatch(action) {
    // action是派发的任务对象
    state = reducer(state, action);
    // 通知事件池中的方法执行
    listeners.forEach((item) => {
      if (typeof item === 'function') {
        item();
      }
    });
  }
  // 创建容器后最好先派发一次任务
  dispatch({
    type: '@redux/INIT',
  });
  return {
    getState,
    subscribe,
    dispatch,
  };
}
export function combineReducers(reducers) {
  return function reducer(state = {}, action) {
    for (let key in reducers) {
      if (!reducers.hasOwnProperty(key)) {
        break;
      }
      state[key] = reducers[key](state[key], action);
    }
    return state;
  };
}
