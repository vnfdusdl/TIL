리액트의 내장 hook 중에 하나인 useEffect는 useState만큼이나 중요하고 또 자주 쓰이는데, 
useEffect의 실행 시점에 대해서 모호하게 알고있어 정확하게 짚고 넘어가야겠다 생각했다. 
useEffect에 전달된 콜백은 컴포넌트가 mount, update, unmount될 때 실행될 수 있는데, 각각의 경우 컴포넌트 내에서 어떤 순서로 실행되는지 확인해보기로 했다.

> 목차  
> 
> [1\. useEffect의 mount 될 때 실행 시점](#1️⃣-mount-될-때-useEffect-실행-시점)
> 
> [2\. useEffect의 update, unmount 될 때 실행 시점](#2️⃣-update,-unmount-될-때-useEffect-실행-시점)
> 
> [3\. 컴포넌트가 중첩되어있을 때 실행 순서](#3️⃣-컴포넌트가-중첩되어있을-때-useEffect-실행-순서)
> 
> [4\. 자식 컴포넌트가 나란히 있을 때 실행 순서](#4️⃣-자식-컴포넌트가-나란히-있을-때-useEffect-실행-순서)
> 
> [5\. 결론](#**🔆결론**)

## 1️⃣ mount 될 때 useEffect 실행 시점
useEffect는 컴포넌트가 mount, update, unmount '될 때' 실행된다. 그런데 이 말이 조금 모호하다.  
컴포넌트가 **렌더링 되면서 함께 실행된다는 것일까, 렌더링 된 후에 실행된다는 것일까?🤔**  
  
결론부터 말하자면 **useEffect의 실행은 컴포넌트의 렌더링과 동시에 일어나는 게 아니라 그 후에 일어난다.**  
  
  
**💭 useEffect의 mount 실행 시점을 확인하기 위해서 다음과 같은 코드를 작성해보았다. 어떤 순서로 콘솔에 출력될까?**

```
import { useEffect } from 'react';

function App() {
  console.log('1');

  useEffect(() => {
    console.log('mount');
  }, []);

  console.log('2');

  return <div className='App'>
  </div>;
}
```


1 -> 2 -> mount 순으로 실행된다.  
컴포넌트가 평가될 때 동시에 useEffect가 실행되는 것이 아니라, **컴포넌트의 렌더링이 끝난 후 useEffect가 실행된다**는 걸 확인할 수 있다.  
  
  

## 2️⃣ update, unmount 될 때 useEffect 실행 시점

앞서서 컴포넌트가 렌더링된 후에 useEffect가 실행되는 것을 보았다. 
그렇다는 건 **update 될 때 또한 컴포넌트의 리렌더링이 완료된 후 useEffect가 실행될 것**이라는 건 쉽게 생각해 볼 수 있다.

useEffect에 전달하는 콜백함수도 return을 가질 수 있는데, 이 return에 함수를 전달할 수 있다. 이를 **클린업(cleanup)함수**라고 한다. 
**클린업 함수는 컴포넌트가 unmount 될 때 실행되는데, 이 클린업 함수의 실행시점을 확인해보자.**

**💭 input을 하나 만들고, input의 state가 변경될 때마다 useEffect가 실행되도록 하였다. 어떤 순서로 실행이 될까?**

```
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  
  console.log('1');

  useEffect(() => {
    console.log('mount');
    return () => {console.log('unmount');}
  }, [input]);

  console.log('2');

  return (
    <div className='App'>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}></input>
    </div>
  );
}
```


컴포넌트가 처음 렌더링 될 때, 즉 mount 될 때는 앞서 본 바와 같이 1, 2, mount 순으로 실행된다.  
그리고 input의 state가 업데이트 되어 컴포넌트가 **리렌더링 되면, 1, 2, unmount, mount 순으로 실행**된다.  
컴포넌트가 재평가되면서 1, 2가 먼저 출력되고, 그다음 unmount 되면서 cleanup 함수가 실행되어 unmount를 출력하고, 그다음 update 되면서 mount를 출력한다.  
즉, **컴포넌트는 리렌더링 될 때, 재평가 => 언마운트 => 업데이트 순으로 진행된다.**  
  
나는 이 코드를 실행시켜보기 전까지는 unmount, 1, 2, mount 순으로 실행될 것이라 생각했다. 
useEffect에 전달된 콜백의 return 에 클린업 함수가 전달된 것이기 때문에, update보다는 초기 mount와 연관되어 있다 생각했기 때문이다. 
그래서 컴포넌트의 재평가가 끝난 뒤에 unmount가 출력되는 것이 의아했다.  
  
재평가가 끝난 후에 useEffect 자체가 다시 실행될 때, 클린업 함수가 먼저 실행되는 건지 확인해보고자 했다.  
  
  
**💭 그래서 이번엔 클린업 함수를 전달하되 의존성 배열을 비워보았다. 이 코드는 어떻게 실행될까?**

```
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  console.log('1');

  useEffect(() => {
    console.log('mount');
    return () => {console.log('unmount');}
  }, []);

  console.log('2');

  return (
    <div className='App'>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}></input>
    </div>
  );
}
```


**의존성 배열을 삭제했더니 unmount가 출력되지 않는다. cleanup 함수가 실행되지 않은 것이다.**  
처음에 나는 의존성 배열을 비우더라도 한 번은 실행될 거라 생각했다. 
useEffect에 전달한 콜백 함수의 return 에 cleanup 함수를 전달한 것이기 때문에, mount되는 시점에 cleanup 함수의 실행이 유예되었다가 컴포넌트가 리렌더링 될 때 바로 실행될 것이라고 생각했기 때문이다. 
그런데 그게 아니라 update 되기 전에 unmount되는 것이었다.  
**클린업 함수가 'unmount 될 때 실행된다' 라는 말이 모호하다면, update 전에 실행된다고 생각하면 될 거 같다.
** 그래서 **의존성 배열이 비어있어 update될 때 useEffect가 실행되지 않는다면, 클린업 함수도 실행되지 않는다.**  
  
  

## 3️⃣ 컴포넌트가 중첩되어있을 때 useEffect 실행 순서

**💭 컴포넌트가 중첩되어있는 경우에는 useEffect의 실행순서는 어떻게 될까?**

```
import './App.css';
import { useEffect } from 'react';

const Inner = () => {
  useEffect(() => {
    console.log('Inner Mount');
  }, []);
  
  return <div> </div>;
};

const Outer = () => {
  useEffect(() => {
    console.log('Outer Mount');
  }, []);

  return (
    <div>
      <Inner />
    </div>
  );
};


function App() {
  useEffect(() => {
    console.log('App mount');
    // return () => {console.log(' App unmount');}
  }, []);

  return (
    <div className='App'>
      <Outer />
    </div>
  );
}


export default App;
```


  
Inner => Outer => App 순서대로 useEffect가 실행된다.  
앞서 확인했듯이 컴포넌트의 렌더링이 완료되는 시점에 useEffect가 실행된다. 
App 컴포넌트의 렌더링이 완료되려면 Outer 컴포넌트의, 그리고 Outer 컴포넌트의 렌더링이 완료되려면 Inner 컴포넌트의 렌더링이 완료되어야 하므로 예상 가능한 결과이다. 
즉, **자식 컴포넌트 => 부모 컴포넌트 순으로 useEffect가 실행된다.**  
  

## 4️⃣ 자식 컴포넌트가 나란히 있을 때 useEffect 실행 순서

**💭 자식 컴포넌트가 나란히 있을 때, 자식 컴포넌트 사이의 실행순서는 어떻게 될까?**

```
import './App.css';
import { useEffect } from 'react';

const One = () => {
  useEffect(() => {
    console.log('One Mount');
  }, []);
  return <div> </div>;
};

const Two = () => {
  useEffect(() => {
    console.log('Two Mount');
  }, []);

  return <div></div>;
};

function App() {
  useEffect(() => {
    console.log('App mount');
  }, []);

  return (
    <div className='App'>
      <One />
      <Two />
    </div>
  );
}

export default App;
```


One => Two => App 컴포넌트 순으로 useEffect가 실행되었다. 
One의 렌더링이 끝나야 실행 컨텍스트가 App 컴포넌트로 돌아오고, 그 후에 함수 Two가 실행 되어 Two 함수의 실행 컨텍스트가 생성되고 평가되므로 이또한 예상 가능한 결과이다.

---

## **🔆결론**

-   useEffect는 컴포넌트의 렌더링(혹은 리렌더링)이 모두 끝난 후에 실행된다.
-   클린업 함수는 리렌더링 이후 업데이트 전에 실행된다.

  
useEffect 실행 시점, 특히 unmount 되는 시점을 제대로 이해하지 못해서 내 뜻대로 코드가 실행되지 않는 경우들이 있었다. 
지금이라도 제대로 정리하고 알게되어 다행이다. 😀
