import React, { useState, useCallback } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [allowToggle, setAllowToggle] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const allowToggleHandler = useCallback(() => {
    setAllowToggle(true);
  }, []);

  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prev) => !prev);
    }
  }, [allowToggle]);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>allow toggling</Button>
      <Button onClick={toggleParagraph}>show</Button>
    </div>
  );
}

export default App;
