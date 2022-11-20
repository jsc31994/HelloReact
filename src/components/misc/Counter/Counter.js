import React, { useEffect, useState } from 'react';
import './Counter.css';

export const Counter = (props) => {
  const { initialCount } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (initialCount !== null) {
      setCount(initialCount);
    }
  }, [])

  const onCount = (operator) => () => {
    if (operator === '-') {
      setCount(count => count-1);
    }
    else if(operator === '+') {
      setCount(count => count+1);
    } else {
      // do nothing
    }
  }
  return (
    <div className='container'>
      <button className='btn' onClick={onCount('-')}>-</button>
      <span className='number'>{count}</span>
      <button className='btn' onClick={onCount('+')}>+</button>
    </div>
  )
}