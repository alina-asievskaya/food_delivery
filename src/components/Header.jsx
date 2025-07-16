import {Link} from 'react-router-dom';
import './Header.css';
/*import logo from '../img/logo.png';*/
import { FaShoppingCart } from 'react-icons/fa';

function Header(){
    return(
        <header className="header">
            
              {/* <img src={logo} alt="Логотип" className='logo' />*/}
              <h1 className='title'>Food delivery</h1>
            
            <nav className="nav-links">
                <Link to="/">Главная</Link>
                <Link to="/menu">Меню</Link>
                <Link to="/reservation">Бронирование</Link>
                <Link to="/reviews">Отзывы</Link>
                <Link to="/cart">
                    <FaShoppingCart size={24} />
                </Link>
            </nav>
        </header>
    )
}
export default Header;