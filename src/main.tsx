import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Mainpage } from './pages/mainpage/MainPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Mainpage />
  </StrictMode>,
)
