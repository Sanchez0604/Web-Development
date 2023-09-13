
import react from 'react';
import '.navbar/css';

export default function NavBar({categoria}){
    return(
        <nav className='nav'>
            <img src="/logo.png"/>
            <a href='#' className='brand'>Fake-Store</a>
            <ul className='nav_menu'>
                <li className='nav_item'><a href='#' className='nav_link'>Home</a></li>
                {/* <li className='nav_item'><a href='#' className='nav_link'>Categorias</a></li> */}
                <li class='nav_item dropdown'><a href='#' class='nav_link'>Categorias</a>
                <ul class='dropdown_menu'>
                    <li class='dropdown_item'><a href='#'>Eletronicos</a></li>
                    <li class='dropdown_item'><a href='#'>Joias</a></li>
                    <li class='dropdown_item'><a href='#'>Categoria 3</a></li>
                </ul>
            </li>
                <li className='nav_item'><a href='#' className='nav_link'>Carrinho</a></li>
            </ul>
        </nav>
    )
}

    