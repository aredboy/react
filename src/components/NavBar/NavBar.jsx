import CartWidget from '../CartWidget/CartWidget';
import Brand from '../Brand/Brand';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';


export const NavBar = () => {
  return (
    <header className='navbar'>
      <Link to="/">
        <Brand className="brand"/>
      </Link>
      <nav>
        <ul className='nav-menu'>
          <li>
            <NavLink to="/category/1">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/2">
              Quienes Somos
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/3">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget/>

    </header>
  )
}

export default NavBar