// 리덕스 스토어에 접근하여 원하는 상태를 받아오는 컴포넌트
import { connect } from 'react-redux';
import Counter from '../components/Counter';
// 액션 생성 함수를 받아옴
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
const mapStateToProps = (state) => ({
  number: state.counter.number,
});
const mapDispathToProps = (dispatch) => ({
  // 임시함수
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
});

export default connect(mapStateToProps, mapDispathToProps)(CounterContainer);
