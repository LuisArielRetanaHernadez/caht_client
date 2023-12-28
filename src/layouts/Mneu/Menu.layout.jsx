// componentes
import Logo from "../../components/Logo/Logo"

// router-dom-v6
import { Outlet } from "react-router";

// style
import "./Menu.layout.css" 
import { Link } from "react-router-dom";

const Menu = () => {


  return (
    <>
      <header className="header">
        <div className="menu">
          <div className="menu__logo">
            <Logo />
          </div>
          <span className="menu__button">Pu</span>
          <nav className="menu__nav">
            <ul className="menu__list">
              <li className="menu__item">
                <Link className="menu__link" to="/logout">Logout</Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>

  )
}

export default Menu;