import React from 'react'
import ReactDOM from 'react-dom/client'
import store from'./store/indexStore.tsx'
import App from './App.tsx'
import './index.module.css'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
