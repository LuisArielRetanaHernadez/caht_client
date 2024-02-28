// componentes
import Logo from "../../components/Logo/Logo"

// router-dom-v6
import { Outlet } from "react-router";

// style
import "./Menu.layout.css" 
import "../../index.css"

// router-dom-v6
import { Link } from "react-router-dom";

const Menu = () => {

  return (
    <>
      <header className="menu">
        <div className="ml-5rem">
          <Logo />
        </div>
        <nav className="menu__navegation mr-5rem">
          <ul className="menu__list">
            <li className="menu__item position-relative">
              <Link className="avatar">
                <img 
                className="avatar__img"
                src="https://images.pexels.com/photos/15005609/pexels-photo-15005609/free-photo-of-puesta-de-sol-hombre-silueta-tarde.jpeg"
                ></img>
              </Link>

              <ul className="menu__list-sub position-absolute z-index">
                <li className="menu__item menu__item--bg-blue">
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