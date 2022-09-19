import React from 'react';

import classes from './Input.module.css';

// 사용자 정의 컴포넌트에서 ref를 사용하기 위해서는 React.forwardRef를 사용해야 한다. 
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.Input}>
      <label htmlFor={props.input.id}>{props.label} </label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
