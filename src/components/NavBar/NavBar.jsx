import Cart from '../Cart/Cart';
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
            <NavLink to="/category/shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/cepas">
              Cepas
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/vaporizadores">
              Vaporizadores
            </NavLink>
          </li>
        </ul>
      </nav>
      <Cart/>

    </header>
  )
}

export default NavBar