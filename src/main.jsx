import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Middle from './Middle.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <Middle />
  <Toaster/>
  </>,
)
