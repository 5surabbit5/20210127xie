import { createStore } from '../Redux/my-redux';
import reducer from './reducer';
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
