// 리덕스 스토어에 접근하여 원하는 상태를 받아오는 컴포넌트
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
// 액션 생성 함수를 받아옴
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onD
    />
  );
};

export default CounterContainer;
