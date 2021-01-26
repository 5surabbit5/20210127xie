import * as types from '../action-types';
const initialState = {
  subNum: 0,
  oppNum: 0,
};
export default function voteReducer(state = initialState, action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.VOTE_CHANGE_UP:
      console.log('派发任务了吗');
      state.subNum++;
      break;
    case types.VOTE_CHANGE_DOWN:
      state.oppNum++;
      break;
    default:
      // console.log('哈哈');
      return state;
  }
  return state;
}
