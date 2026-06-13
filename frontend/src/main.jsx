import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRouter from './app/routers/AppRouter'
import {Provider} from 'react-redux'
import { store } from './app/store.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <AppRouter/>
  </Provider>
)
