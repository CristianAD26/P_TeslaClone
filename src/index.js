import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './App.js'

document.body.style = 'display:flex; height:100vh;align-items: center;justify-content: center; background-color:black;'

const App = () => {
  return (
    <Home />
  )
}

const getRoot = () => { return document.getElementById('root') }
createRoot(getRoot()).render(<Home />)