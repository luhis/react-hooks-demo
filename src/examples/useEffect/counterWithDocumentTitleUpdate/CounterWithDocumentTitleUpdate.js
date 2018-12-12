import React from 'react';
import EffectWrapper from './EffectWrapper';
import StateWrapper from '../../useState/StateWrapper'

const CounterWithDocumentTitleUpdate = ({ count, setCount }) =>
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
      </button>
  </div>;

const effectFuc = ({ count }) => {
  document.title = `You clicked ${count} times`
}

const mapTuple = ([count, setCount]) => ({ count, setCount });

export default StateWrapper(1, mapTuple)(EffectWrapper(effectFuc)(CounterWithDocumentTitleUpdate));
