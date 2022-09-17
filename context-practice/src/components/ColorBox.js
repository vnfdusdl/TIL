import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  const  colorCtx  = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: colorCtx.state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: colorCtx.state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
