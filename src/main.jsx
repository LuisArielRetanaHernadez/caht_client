import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// redux
import { Provider } from 'react-redux'
import { store } from './app/store.js'


// router-dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Pages
import Login from './Pages/Login/Login.pages.jsx'
import Register from './Pages/Register/Register.page.jsx'
import Menu from './layouts/Mneu/Menu.layout.jsx'
// import Home from './Pages/Home/Home.page.jsx'
// import Chat from './Pages/Chat/Chat.jsx'
// import ListChatLayout from './layouts/ListChat/ListChat.layout.jsx'
import ListChat from './components/ListChat/ListChat.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
    children: [
      {
        path: '/',
        element: <ListChat />,
        // children: [
        //   {
        //     path: '/chat/:id',
        //     element: <Chat />,
        //   },
        //   {
        //     path: '/perfil/:id',
        //     element: <h1>Perfil</h1>
        //   }
        // ]
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
