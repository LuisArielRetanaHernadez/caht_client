import React from 'react'
import ReactDOM from 'react-dom/client'

// redux
import { Provider } from 'react-redux'

// redux -> store
import { store } from './app/store.js'

// router-dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Pages
import Login from './Pages/Login/Login.pages.jsx'
import Register from './Pages/Register/Register.page.jsx'
import Chat from './Pages/Chat/Chat.jsx'
import CheckEmail from './Pages/CheckEmail/CheckEmail.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'
import UploadProfile from './Pages/UploadProfile/UploadProfile.jsx'
import User from './Pages/User/User.jsx'

// layouts
import Menu from './layouts/Menu/Menu.layout.jsx'
import ListChatLayout from './layouts/ListChat/ListChat.layout.jsx'

// style
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
    children: [
      {
        path: '/',
        element: <ListChatLayout />,
        children: [
          {
            path: '/chat/:id',
            element: <Chat />,
          }
        ]
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/email/verify/:id',
        element: <CheckEmail />
      },
      {
        path: '/profile/:id',
        element: <User />
      },
      {
        path: '/profile/:id/upload/img',
        element: <UploadProfile />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
