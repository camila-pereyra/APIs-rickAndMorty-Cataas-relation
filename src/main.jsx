import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CardApi from './components/CardApi/CardApi'
import Input from './components/Input/input'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Input/>
    <CardApi />
  </StrictMode>,
)
