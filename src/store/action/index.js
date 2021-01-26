import voteAction from './voteAction';
import personAction from './personAction';
const totalAction = {
  vote: voteAction,
  person: personAction
}
export default totalAction;

// {
//   vote: {
//     changeNum() {
//       return {
//         type: 'xxx'
//       }
//     }
//   }
// }
