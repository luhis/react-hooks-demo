import React, { Component } from 'react'
import './App.css'
import Counter from './examples/useState/Counter'
import CounterWithDocumentTitleUpdate from './examples/useEffect/counterWithDocumentTitleUpdate/CounterWithDocumentTitleUpdate'
import HooklyCounterWithReducer from './examples/useReducer/HooklyCounterWIthReducer';

class App extends Component {
  render() {
    return (
      <>
        <Counter name="matt from App.js" />
        <Counter name="other thing" />
        <CounterWithDocumentTitleUpdate/>
        <HooklyCounterWithReducer/>
      </>
    )
  }
}

export default App
