import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './Context/Context.jsx'
import "./Components/Language/i18n.js"

createRoot(document.getElementById('root')).render(
 <ContextProvider>
  <App/>
 </ContextProvider>
)
