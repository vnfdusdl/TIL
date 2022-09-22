import React, { useEffect } from 'react';

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING');
    useEffect(() => {
        console.log('useEffect 실행')
    } ,[props.show])
  return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default React.memo(DemoOutput);
