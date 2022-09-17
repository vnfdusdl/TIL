import './App.css';

import ColorBox from './components/ColorBox';
import SelectColor from './components/SelectColor';
import { ColorProvider } from './contexts/color';

function App() {
  return (
    <div className='App'>
      {/* provider를 이용하면 Context의 value를 변경할 수 있다.  */}
      <ColorProvider value={{ color: 'red' }}>
        <SelectColor />
        <ColorBox />
      </ColorProvider>
    </div>
  );
}

export default App;
