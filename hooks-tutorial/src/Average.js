import { useMemo, useRef, useState, useCallback } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중');
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b);

  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  //   ref를 사용해야할 때 : DOM에 직접적으로 접근해야 할 때
  // 예를 들어, 특정 input에 포커스 주기, 스크롤 박스 조작하기 등..
  const inputRef = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputRef.current.focus();
  }, [list, number]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input ref={inputRef} value={number} onChange={onChange}></input>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <p>평균값 : {avg}</p>
    </div>
  );
};

export default Average;
