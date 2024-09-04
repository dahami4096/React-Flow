import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FlowProvider } from './context/flowContext.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FlowProvider>
      <App/>
    </FlowProvider>
  </React.StrictMode>
)
