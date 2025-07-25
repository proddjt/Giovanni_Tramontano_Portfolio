import { createRoot } from 'react-dom/client'
import './index.css'
import i18n from './translation/i18n.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
