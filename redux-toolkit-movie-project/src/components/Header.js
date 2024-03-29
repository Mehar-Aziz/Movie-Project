import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css';

const Header = () => {
    return(
        <div className='header'>
            <Link to='/'>
                <div className='logo'>Movie App</div>
            </Link>
            <div className='user-image'>
                <img src='{user}' alt='user' />
            </div>
        </div> //add image here at last
    )
}

export default Header;