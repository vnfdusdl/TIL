import './App.css';

import CounterContainer from './container/CounterContainer';
import TodosContainer from './container/TodosContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
