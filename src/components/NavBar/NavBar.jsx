import CartWidget from '../CartWidget/CartWidget';
import Brand from '../Brand/Brand';
import './NavBar.css';

export const NavBar = () => {
  return (
    <header className='navbar'>

        <Brand className="brand"/>
        <nav>
            <ul className='nav-menu'>
                <li>Login</li>
                <li>Shop</li>
                <li>Quienes Somos</li>
            </ul>
        </nav>
        <CartWidget/>

    </header>
  )
}
