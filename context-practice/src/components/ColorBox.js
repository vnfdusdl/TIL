import React from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  return (
    // Consumer 를 통해 색상 조회
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{
            width: '64px',
            height: '64px',
            background: value.color,
          }}
        />
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
