import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// redux
import { Provider } from 'react-redux'
import { store } from './app/store.js'


// router-dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Pages
import Home from './Pages/Home/Home.page.jsx'
import Login from './Pages/Login/Login.pages.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    index: true
  },
  {
    path: '/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
