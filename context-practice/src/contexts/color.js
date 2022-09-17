import React, { createContext, useState } from 'react';

// 새 Context를 만들 때는 createContext 함수를 사용한다
// 파라미터에는 해당 Context의 기본 상태를 지정한다. => 
// 기본값은 실제 Provider의 value에 넣는 객체의 형태와 일치시켜 주는 것이 좋다. 그렇게 하면 Context 코드를 볼 때 내부 값이 어떻게 구성되어 있는지 파악하기도 쉽고, 실수로 Provider를 사용하지 않았을 때 리액트 애플리케이션에서 에러가 발생하지 않는다.
const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
//   ColorContext.Provider를 return하는 함수 컴포넌트를 새로 만들고, 이 컴포넌트에서 만든 상태를 여기에 value로 전달
  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
// ColorContext의 Consumer객체를 비구조화 할당으로 꺼내어 ColorConsumer라는 이름에 담겠다는 의미
// useContext hook을 사용하면 Consumer를 사용하지 않아도 됨.
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsuner 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
