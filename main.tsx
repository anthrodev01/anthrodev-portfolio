import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './styles/fonts.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/projects.css'
import './styles/contact.css'
import './styles/motion.css'

// Lets CSS know JS is running so scroll-reveal starts hidden only when it can
// actually be revealed again (content stays visible without JS).
document.documentElement.classList.add('js')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
