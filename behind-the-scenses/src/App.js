import React, { useState, useCallback } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraph = useCallback(() => {
    setShowParagraph((prev) => !prev);
  }, []);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraph}>show</Button>
    </div>
  );
}

export default App;
