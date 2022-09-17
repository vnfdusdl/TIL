import { createContext } from 'react';

// 새 Context를 만들 때는 createContext 함수를 사용한다
// 파라미터에는 해당 Context의 기본 상태를 지정한다. 
const ColorContext = createContext({ color : 'black' });

export default ColorContext;