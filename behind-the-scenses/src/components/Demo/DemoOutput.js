import React, { useEffect } from 'react';

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING');
  return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default React.memo(DemoOutput);
