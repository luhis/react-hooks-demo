import React from 'react'

import StateWrapper from './StateWrapper'

const Counter = ({count, setCount, name}) => 
    <div>
      <p>Hi {name}, You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>;

const mapTuple = ([count, setCount]) => ({count, setCount});

export default StateWrapper(1, mapTuple)(Counter);
