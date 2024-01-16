import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Header = () => {
    return(
        <div className='header'>
            <Link to='/'>
                <div className='logo'>Movie App</div>
            </Link>       
        </div>
    )
}

export default Header;