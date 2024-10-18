import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import App1 from './Tampilan/App1.jsx'
import App2 from './Tampilan/App2.jsx'
import App3 from './Tampilan/App3.jsx'


import './index.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
