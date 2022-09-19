import { useRef } from 'react';

const RefSample = () => {
    // 로컬 변수를 사용해야 할 때도 useRef를 활용할 수 있다.
    //로컬 변수란 렌더링과 상관없이 바뀔 수 있는 값을 의미한다. 
    //ref 안의 값이 바뀌어도 컴포넌트가 렌더링되지 않는다는 점을 주의해야한다. 
    //렌더링과 관련되지 않은 값을 관리할 때만 이러한 방식으로 코드를 작성한다. 
    const id = useRef(1);
    const setId = (n) => {
        id.current = n;
    }
    const printId = ()=> {
        console.log(id.current);
    }

    return(
        <div>
            refsample
        </div>
    )
}

export default RefSample;