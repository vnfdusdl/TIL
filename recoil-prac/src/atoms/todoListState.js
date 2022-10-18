import { atom } from 'recoil';
const todoListState = atom({
  key: 'todoListState', //고유한 키
  default: [], //초기값
});

export default todoListState;
