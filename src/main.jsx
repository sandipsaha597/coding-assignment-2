import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import AppProvider from './AppContext/AppProvider.jsx'
import {
  TOAST_CONTAINER_POSITION,
  ToastContainer,
} from './customLibraries/MyReactToastify/index.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppProvider>
          <App />
          {/* Using ToastContainer to enable toast notifications in the app */}
          <ToastContainer position={TOAST_CONTAINER_POSITION.TOP_CENTER} />
        </AppProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
