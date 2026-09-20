import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';

import `./styles/main.scss`;

const root = document.getElementById(`root`);

const NEW_COOLDOWN_HS = 5800;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App cooldown={NEW_COOLDOWN_HS} />
  </StrictMode>,
)
