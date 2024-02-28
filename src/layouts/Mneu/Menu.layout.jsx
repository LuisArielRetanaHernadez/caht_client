// componentes
import Logo from "../../components/Logo/Logo"

// router-dom-v6
import { Outlet } from "react-router";

// style
import "./Menu.layout.css" 
import "../../index.css"

// router-dom-v6
import { Link, redirect, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../../features/user/userSlice";

const Menu = () => {

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutAsync())
    return redirect('/login')
  }

  // if is not login
  const { isLogin } = useSelector((state) => state.user)

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <header className="menu">
        <div className="ml-5rem">
          <Logo />
        </div>
        <nav className="menu__navegation mr-5rem">
          <ul className="menu__list position-relative z-index-10">
            <li className="menu__item menu__item--p-0 menu__list-sub--show position-relative">
              <Link className="avatar">
                <img 
                className="avatar__img"
                src="https://images.pexels.com/photos/15005609/pexels-photo-15005609/free-photo-of-puesta-de-sol-hombre-silueta-tarde.jpeg"
                ></img>
              </Link>

              <ul className="menu__list menu__list-sub">
                <li 
                onClick={logout}
                className="menu__item menu__item--bg-blue">
                  <span>Logout</span>
                </li>
              </ul>

            </li>

          </ul>
        </nav>
      </header>
      <Outlet />
    </>

  )
}

export default Menu;