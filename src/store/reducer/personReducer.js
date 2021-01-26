// import * as types from '../action-types';
const initialState = {
  subNum: 0,
  info: {},
};
export default function voteReducer(state = initialState, action) {
  state = JSON.parse(JSON.stringify(state));
  return state;
}
