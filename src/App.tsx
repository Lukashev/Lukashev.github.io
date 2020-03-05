import React, { useReducer } from 'react'
import { reducer, initialState, ContextApp } from './store/reducer'
import AppMain from './components/AppMain'

const App = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <AppMain />
    </ContextApp.Provider>
  )
}

export default App
