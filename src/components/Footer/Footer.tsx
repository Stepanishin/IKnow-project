import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../UI/Logo';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <nav className='footer_nav'>
                <ul className='footer_nav__list'>
                    <Logo />
                    <Link to="#" className='footer_btn'><li className='footer_links'>Home</li></Link>
                    <Link to="#" className='footer_btn'><li className='footer_links'>Bets</li></Link>
                    <Link to="#" className='footer_btn'><li className='footer_links'>Twitter</li></Link>
                    <Link to="#" className='footer_btn'><li className='footer_links'>Discord</li></Link>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;