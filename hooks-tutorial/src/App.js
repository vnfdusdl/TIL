import { useState } from 'react';
import './App.css';
import Average from './Average';
import Counter from './Counter';
import Info from './Info';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <Average />
      <Counter />
      <button onClick={()=>{setVisible(!visible)}}>
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Info />}
    </div>
  );
}

export default App;
