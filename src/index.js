import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './App'
import './index.css'


const App = () => {
  return (
    <Home />
  )
}

const getRoot = () => { return document.getElementById('root') }
createRoot(getRoot()).render(<App />)
