import { combineReducers } from '../../Redux/my-redux';
import voteReducer from './voteReducer';
import personReducer from './personReducer';
export default combineReducers({
  vote: voteReducer,
  person: personReducer,
});
