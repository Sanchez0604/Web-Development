import{Link} from"react-router-dom"
import react from 'react';
import './navbar.css';

export default function NavBar({categoria}){
    return(
        <nav className='nav'>
            <img src="/logo.png"/>
            <a href='#' className='brand'>Fake-Store</a>
            <ul className='nav_menu'>
                <li className='nav_item'><Link to="/">Home</Link></li>
                <li className='nav_item'><Link to="/">Categorias</Link></li>
                <li className='nav_item'><Link to="/">Carrinho</Link></li>
            </ul>
        </nav>
    )
}

    