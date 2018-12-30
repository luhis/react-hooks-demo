import React from 'react'
import {reducerWrapper} from 'hookly';

const initialState = { count: 0 }

function reducer (state, action) {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state
  }
}

function CounterWithReducer ({ initialCount, state, dispatch }) {
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}

export default reducerWrapper(reducer, initialState, ([state, dispatch]) => ({state, dispatch}), ({type: 'reset', payload: initialState.count}))(CounterWithReducer);
