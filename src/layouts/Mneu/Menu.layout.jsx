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
      <header>
        <div>
          <Logo />
          <span>Pu</span>
          <nav>
            <ul>
              <li><Link to="/logout">Logout</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>

  )
}

export default Menu;