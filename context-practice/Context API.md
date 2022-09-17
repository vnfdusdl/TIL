# 1. Context API 를 사용한 상태 관리

기존에는 최상위 컴포넌트에서 여러 컴포넌트를 거쳐 props로 원하는 상태와 함수를 전달햇지만, context API 를 사용하면 Context를 만들어 단 한 번에 원하는 값을 받아 와서 사용할 수 있다. 주로 Context는 전역적(global) 으로 필요한 값을 다룰 때 사용하기는 하지만, 꼭 전역적일 필요는 없다. Context는 리액트 컴포넌트에서 Props 가 아닌 또 다른 방식으로 컴포넌트 간에 값을 전달하는 방법이다.
props drilling이 일어날 때 Context API를 이용하여 해결할 수 있다. Context의 주된 용도는 다양한 레벨에 네스팅 된 많은 컴포넌트에게 데이터를 전달하는 것이다.

# 2. Context 사용법

## 1. 기본 사용법 (createContext, Provider, useContext)

Context는 리액트 패키지에서 `createContext`라는 함수를 불러와서 만들 수 있다.

```js
import { createContext } from 'react';
const MyContext = createContext();
```

Context 객체 안에는 Provider 라는 컴포넌트가 들어있다. 그리고, 그 컴포넌트 간에 공유하고자 하는 값을 value라는 Props로 설정하면 자식 컴포넌트들에서 해당 값에 바로 접근할 수 있다.

```js
function App() {
  return (
    <MyContext.Provider value='Hello World'>
      <GrandParent />
    </MyContext.Provider>
  );
}
```

`useContext` hook을 사용하여 Context에 넣은 값에 바로 접근할 수 있다. 해당 hook의 인자에는 createContext로 만든 `MyContext`를 넣는다.

```js
import { createContext, useContext } from 'react';

function Message() {
  const value = useContext(MyContext);
  return <div>Received: {value}</div>;
}
```

## 2. custom Hook 사용하기

```js
import { createContext, useContext } from 'react';
const MyContext = createContext();

//커스텀 훅 생성
const useMyContext = () => {
  return useContext(MyContext);
};

function App() {
  return (
    <MyContext.Provider value='Hello World'>
      <AwesomeComponent />
    </MyContext.Provider>
  );
}

function AwesomeComponent() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

function FirstComponent() {
  // 커스텀 훅을 사용하여 context 를 좀 더 쉽게 사용
  const value = useMyContext();
  return <div>First Component says: "{value}"</div>;
}

function SecondComponent() {
  const value = useMyContext();
  return <div>Second Component says: "{value}"</div>;
}

function ThirdComponent() {
  const value = useMyContext();
  return <div>Third Component says: "{value}"</div>;
}

export default App;
```

## 3. Provider를 사용하지 않았을 경우

만약 자식 컴포넌트에서 `useContext`를 사용하고 있는데, `Provider` 컴포넌트로 감싸는 것을 깜빡한다면? <br>
value 값을 따로 지정하지 않은 상태이기 때문에, undefined로 조회되어 해당 값이 보여질 자리에 아무것도 나타나지 않게 된다. 그리고 함수를 기대하는 상황이라면 리액트 애플리케이션에서 에러가 발생할 것이다. <b>이런 경우에 기본 값을 설정한다면 에러를 방지할 수 있다. </b> `createContext` 함수에 인자로 기본 값을 넣어주면 된다.

```js
const MyContext = createContext('default value');
```

기본값을 보여주지 않고 아예 오류를 띄워서 개발자가 고치도록 명시를 하고 싶다면 커스텀 hook을 이런 식으로 사용하면 된다.

```js
const MyContext = createContext();

const useMyContext = () => {
  const value = useContext(MyContext);
  if (value === undefined) {
    throw new Error('useMyContext should be used within MyContext.Provider');
  }
};
```

# 3. Context에서 상태 관리 하기

Context에서 유동적인 값을 다뤄야 할 때 어떻게 해야할까?

```js
function App() {
  return (
    <div>
      <Value />
      <Buttons />
    </div>
  );
}

const Value = () => {
  return <h1>1</h1>;
};

const Buttons = () => {
  return (
    <div>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default App;
```

이렇게 숫자가 보여지는 UI와 숫자에 변화를 주는 UI가 완전히 다른 컴포넌트로 분리되어 있고, 이를 Props로 함수나 값을 전달하는 것이 아니라, Context를 사용하여 구현해보자. <br>
우선, Context 에서 유동적인 값을 관리하는 경우엔 Provider를 새로 만들어 주는 것이 좋다.

```js
import { createContext } from 'react';

const CounterContext = createContext();

const ContextProvider = ({ children }) => {
  return <CounterContext.Provider>{children}</CounterContext.Provider>;
};

function App() {
  return (
    <ContextProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </ContextProvider>
  );
}

// (...)
```

위와 같이 `children` Props를 받아와서 `CounterContext.Provider` 태그 사이에 넣어주면 된다. 그 다음에는 필요한 기능들을 `CounterProvider` 컴포넌트 안에서 구현해주면 된다. <br>
지금같이 하나의 상태만 있는 경우라면, `useState` 를 사용하여 만들어진 값과 상태변화함수가 들어있는 배열 자체를 통째로 `value`로 넣어준다.

```js
import { createContext, useState } from 'react';

const CounterContext = createContext();

const ContextProvider = ({ children }) => {
  const counterState = useState(1);

  return <CounterContext.Provider value={counterState}>{children}</CounterContext.Provider>;
};

//(...)
```

그 다음에는 `useCounterState`라는 커스텀 hook을 다음과 같이 만든다

```js
import { createContext, useContext, useState } from 'react';

//(...)

const useCounterState = () => {
  const value = useContext(CounterContext);
  if (value === undefined) {
    throw new Error('useCounterState should be used within CounterProvider');
  }
  return value;
};
```

이렇게 Hook을 만들고 나면, `CounterProvider` 의 자식 컴포넌트의 어디서든지 `useCounterState` hook을 사용하여 값을 조회하거나 변경할 수 있다.
<br>
`Value` 컴포넌트와 `Buttons`를 다음과 같이 수정해보자.

```js
// (...)

const Value = () => {
    // useCounterState 함수가 return하는 value는 state와 state변경함수를 담고있는 배열.
    //그 중에서 state만 필요하기 때문에 구조분해할당으로 state만 counter라는 이름으로 받아옴
    const [counter] = useCounterState();

    return return <h1>{counter}</h1>;
}

const Buttons = () => {
    // state변경함수만 필요하기 때문에 구조분해할당으로 state변경함수만 setCounter라는 이름으로 받아옴
    const [, setCounter] = useCounterState();
    const increase = () => setCounter(prev => prev + 1);
    const decrease = () => setCounter(prev => prev - 1);

    return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
```

## 데이터 로직 Provider 단에서 구현하기

여기서 만약 데이터를 어떻게 업데이트 할 지에 대한 로직을 컴포넌트가 아니라 Provider 단에서 구현하고 싶다면 다음과 같이 작성하면 된다.

```js
import { createContext, useContext, useMemo, useState } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  // CounterProvider 컴포넌트 안에서 counter와 actions value로 묶어서 전달
  const [counter, setCounter] = useState(1);

  // actions라는 객체를 만들어 그 안에 변화를 일으키는 함수들을 정의함.
  // 컴포넌트가 리렌더링 될 때마다 함수를 새로만드는 것을 방지하기 위해서 useMemo를 사용
  const actions = useMemo(
    () => ({
      increase() {
        setCounter((prev) => prev + 1);
      },
      decrease() {
        setCounter((prev) => prev - 1);
      },
    }),
    []
  );

  //useMemo를 사용하지 않으면 CounterProvider가 리렌더링 될 때마다 새로운 배열을 만들기 때문에, useContext를 사용하는 컴포넌트에서 Context의 값이 변경된 것으로 간주하여 리렌더링을 하기 때문에 낭비 렌더링이 발생하게된다.
  const value = useMemo(() => [counter, actions], [counter, actions]);

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
};

const useCounter = () => {
  const value = useContext(CounterContext);
  if (value === undefined) {
    throw new Error('useCounterState should be used within CounterProvider');
  }
  return value;
};

function App() {
  return (
    <CounterProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </CounterProvider>
  );
}

const Value = () => {
  const [counter] = useCounter();
  return <h1>{counter}</h1>;
};

function Buttons() {
  const [, actions] = useCounter();

  return (
    <div>
      <button onClick={actions.increase}>+</button>
      <button onClick={actions.decrease}>-</button>
    </div>
  );
}

export default App;
```

## 값과 업데이트 함수를 두 개의 Context로 분리하기

만약 Context에서 관리하는 상태가 빈번하게 업데이트 되지 않는다면 방금 작성한 코드만으로도 충분히 괜찮다. 하지만, 만약에 상태가 빈번하게 업데이트 된다면, 성능적으로 좋지 않다. 실제로 변화가 반영되는 곳은 Value 컴포넌트뿐인데 Buttons 컴포넌트도 리렌더링 되기 때문이다. 우리가 비록 `Value` 를 만드는 과정에서 `useMemo`로 감싸주었지만, 어쨌든 `counter`가 바뀔 때마다 새로운 배열을 만들어 반환하고 있고, `useContext`에서는 이를 감지하여 리렌더링을 하기 때문이다. <br>
<b>이를 고치기 위한 방법은 Context를 하나 더 만드는 것이다. </b>

```js
import { createContext, useContext, useMemo, useState } from 'react';

const CounterValueContext = createContext();
const CounterActionsContext = createContext();

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(1);
  // 의존성 배열이 비워져있기 때문에 처음 렌더링 될 때를 제외하고 재생성되지 않는다. => actions객체만 사용하는 컴포넌트에서는 리렌더링이 일어나지 않는다.
  const actions = useMemo(
    () => ({
      increase() {
        setCounter((prev) => prev + 1);
      },
      decrease() {
        setCounter((prev) => prev - 1);
      },
    }),
    []
  );

  return (
    <CounterActionsContext.Provider value={actions}>
      <CounterValueContext.Provider value={counter}>{children}</CounterValueContext.Provider>
    </CounterActionsContext.Provider>
  );
}

const useCounterValue = () => {
  const value = useContext(CounterValueContext);
  if (value === undefined) {
    throw new Error('useCounterValue should be used within CounterProvider');
  }
  return value;
};

const useCounterActions = () => {
  const value = useContext(CounterActionsContext);
  if (value === undefined) {
    throw new Error('useCounterActions should be used within CounterProvider');
  }
  return value;
};

function App() {
  return (
    <CounterProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </CounterProvider>
  );
}

function Value() {
  console.log('Value');
  const counter = useCounterValue();
  return <h1>{counter}</h1>;
}
function Buttons() {
  console.log('Buttons');
  const actions = useCounterActions();

  return (
    <div>
      <button onClick={actions.increase}>+</button>
      <button onClick={actions.decrease}>-</button>
    </div>
  );
}

export default App;
```

기존의 `CounterContext` 를 `CounterValueContext`와 `CounterActionsContext`로 분리해주었다. 그리고 두 Provider를 모두 사용했고 커스텀 hook 또한 두 개로 분리했다. 이렇게 하고 나면, 버튼을 눌러서 상태에 변화가 일어날 때 `Value` 컴포넌트에서만 리렌더링이 일어난다.<br>
상태를 다루는 Context를 활용하는 과정에서 여러 업데이트 함수가 들어있는 actions 객체를 선언하여 별도의 Context에 넣어주는 방식으로 구현하였다. 이 방식 외에도 , useReducer 를 통해서 상태 업데이트를 하도록 구현하고, dispatch 를 별도의 Context로 넣어주는 방식도 있다. useReducer 방식보다 업데이트 함수들이 들어있는 객체를 바로 선언하는 방식으로 구현한 이유는, Context를 사용하는 측에서 더욱 편하기도 하고, 굳이 액션 객체 및 리듀서 함수를 만들지 않아도 되어서 업데이트 함수의 파라미터를 편하게 설정할 수 있어서 편하기 때문이다.

# 4. Context의 상태에서 배열이나 객체를 다루는 경우

위에서 우리가 사용했던 방식(상태 업데이트 함수들이 들어있는 객체를 바로 선언하여 사용하는 방식)은 배열이나 객체를 다룰 때에도 동일하다. <br>

## 모달 만들기

예를 들어, 화면의 중앙에 문구를 띄우는 모달의 상태를 Context로 작성한다면, 다음과 같이 구현할 수 있다.

```js
const ModalValueContext = createContext();
const ModalActionsContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    visible: false,
    message: '',
  });

  const actions = useMemo(
    () => ({
      open(message) {
        setModal({
          visible: true,
          message,
        });
      },
      close() {
        setModal((prev) => ({
          ...prev,
          visible: false,
        }));
      },
    }),
    []
  );

  return (
    <ModalActionsContext.Provider value={actions}>
      <ModalValueContext.Provider value={modal}>{children}</ModalValueContext.Provider>
    </ModalActionsContext.Provider>
  );
};

const useModalValue = () => {
  const value = useContext(ModalValueContext);

  if (value === undefined) {
    throw new Error('useModalValue should be used within ModalProvider');
  }

  return value;
};

function useModalActions() {
  const value = useContext(ModalActionsContext);

  if (value === undefined) {
    throw new Error('useModalActions should be used within ModalProvider');
  }

  return value;
}
```

이렇게 하면 원하는 곳 어디서든지 다음과 같이 모달을 띄울 수 있다.

```js
const { open } = useModalActions();

const handleSomething = () => {
  open('안녕하세요');
};
```

## 할 일 목록 만들기

```js
import { createContext, useRef, useState, useMemo } from 'react';

const TodosValueContext = createContext();
const TodosActionsContext = createContext();

const TodosProvider = () => {
    const idRef = useRef(3)
  const [(todos, setTodos)] = useState([
    {
      id: 1,
      text: '밥 먹기',
      done: true,
    },
    {
      id: 2,
      text: '잠자기',
      done: false,
    },
  ]);

    const actions = useMemo(() => ({
        add(text) {
            const id =+ idRef.current;
            setTodos(prev => [
                ...prev,
                {
                id,
                text,
                done: false
                }
            ])
        },
        toggle(id) {
            setTodos(prev =>
            prev.map((item) => item.id === id
            ? {
                ...item,
                done: !item.done
            }
            : item
            )
            )
        },
        remove(id) {
            setTodos(prev =>
            prev.filter((item) => item.id !== id)
            )
        }
    }),[])

  return (
    <TodosActionsContext.Provider value={actions}>
      <TodosValueContext.Provider value={todos}>{children}</TodosValueContext.Provider>
    </TodosActionsContext.Provider>
  );
};

function useTodosValue() {
  const value = useContext(TodosValueContext);
  if (value === undefined) {
    throw new Error('useTodosValue should be used within TodosProvider');
  }
  return value;
}

function useTodosActions() {
  const value = useContext(TodosActionsContext);
  if (value === undefined) {
    throw new Error('useTodosActions should be used within TodosProvider');
  }
  return value;
}
```
이렇게 하면, 할 일 항목을 추가할 때는,
```js
const { add } = useTodosActions();

const handleSubmit = () => {
    add(text)
}
```
그리고 각 항목을 보여주는 컴포넌트에서는, 
```js
const { toggle, remove } = useTodosActions();

const handleToggle = () => {
    toggle(id);
}

const handleRemove = () => {
    remove(id);
}
```
이런식으로 구현할 수 있다. 과거에는 위와 같은 작업을 하기 위하여 useReducer를 사용하기도 했었는데, 굳이 액션/리듀서 방식을 사용하는 건 불편하다는 생각이 들어 위와 같은 방법이 더욱 좋다고 생각한다. 

# 5. Context가 꼭 전역적이어야 한다는 생각을 버리자
Contex에서 다루는 값은 꼭 전역적일 필요가 없다. Context는 재사용성이 높은 컴포넌트를 만들 때도 매우 유용하다. 

# 6. 전역 상태 관리 라이브러리는 언제 써야 할까?
상태 관리 라이브러리와 Context는 완전히 별개의 개념임을 잘 이해해야 한다. Context는 전역 상태 관리를 할 수 있는 수단일 뿐이고, 상태 관리 라이브러리는 상태 관리를 더욱 편하고 효율적으로 할 수 있게 해주는 기능을 제공해주는 도구이다. 
## Redux
액션과 리듀서라는 개념을 사용하여, 상태 업데이트 로직을 컴포넌트 밖으로 분리할 수 있게 해주며, 상태가 업데이트 될 때 실제로 의존하는 값이 바뀔 때만 컴포넌트가 리렌더링 되도록 최적화를 해준다. 만약 Context를 쓴다면, 각기 다른 상태마다 새롭게 Context를 만들어주어야 하는데, 이 과정을 생략할 수 있기때문에 편리하다.
## MobX
MobX 의 경우엔 Redux와 마찬가지로 상태 업데이트 로직을 컴포넌트 밖으로 분리할 수 있게 해주고, 함수형 리액티브 프로그래밍 방식을 도입하여 mutable한 상태가 리액트에서도 잘 보여지게 해주고, 상태 업데이트 로직을 더욱 편하게 작성할 수 있게 해주며 최적화도 잘해준다. 
## Recoil, Jotai, Zustand
Context를 일일이 만드는 과정을 생략하고, Hook 기반으로 아주 편하게 전역 상태 관리를 할 수 있게 해준다. 최적화 기능 또한 당연히 있다. 
<br>
전역 상태 라이브러리는 결국 상태 관리를 조금 더 수비게 하기 위해서 사용하는 것이며, 취향에 따라 선택해서 사용하면 된다. 