import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import MyNav from './MyNav.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyNav />
  </StrictMode>,
)
