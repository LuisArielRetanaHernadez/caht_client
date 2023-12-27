import Logo from "../../components/Logo/Logo"


const Menu = () => {


  return (
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
  )
}

export default Menu;