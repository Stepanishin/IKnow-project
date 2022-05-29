import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header: FC = () => {
    return (
        <header className='Header'>
            <nav className='Header_nav'>
                <ul className='Header_nav__list'>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'./List'}><li>List</li></Link>
                    <Link to={'./Auth'}><li>Auth</li></Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;