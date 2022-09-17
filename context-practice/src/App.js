import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

function App() {
  return (
    <div className='App'>
      {/* provider를 이용하면 Context의 value를 변경할 수 있다.  */}
      <ColorContext.Provider value={{ color: 'red' }}>
        <ColorBox />
      </ColorContext.Provider>
    </div>
  );
}

export default App;
