// componentes
import Logo from "../../components/Logo/Logo"

// router-dom-v6
import { Outlet } from "react-router";

// style
import "./Menu.layout.css" 
import "../../index.css"

// router-dom-v6
import { Link, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../../features/user/userSlice";

const Menu = () => {

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutAsync())
    return redirect('/login')
  }

  return (
    <>
      <header className="menu">
        <div className="ml-5rem">
          <Logo />
        </div>
        <nav className="menu__navegation mr-5rem">
          <ul className="menu__list">
            <li className="menu__item menu__item--p-0 menu__list-sub--show position-relative">
              <Link className="avatar">
                <img 
                className="avatar__img"
                src="https://images.pexels.com/photos/15005609/pexels-photo-15005609/free-photo-of-puesta-de-sol-hombre-silueta-tarde.jpeg"
                ></img>
              </Link>

              <ul className="menu__list-sub menu__list-sub--hidden position-absolute z-index">
                <li 
                onClick={logout}
                className="menu__item menu__item--bg-blue">
                  <spna>Logout</spna>
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