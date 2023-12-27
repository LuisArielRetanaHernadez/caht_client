// componentes
import Logo from "../../components/Logo/Logo"

// router-dom-v6
import { Outlet } from "react-router";

// style
import "./Menu.layout.css" 

const Menu = () => {


  return (
    <>
      <header>
        <div>
          <Logo />
          <span>Pu</span>
          <nav>
            <ul>
              <li><a href="/logout">Logout</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>

  )
}

export default Menu;