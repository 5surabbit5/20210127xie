import * as types from '../action-types';
const voteAction = {
  changeUp() {
    return {
      type: types.VOTE_CHANGE_UP
    }
  },
  changeDown() {
    return {
      type: types.VOTE_CHANGE_DOWN
    }
  }
}
export default voteAction;
