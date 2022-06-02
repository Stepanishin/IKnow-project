import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <nav className='footer_nav'>
                <ul className='footer_nav__list'>
                    <Link to="#" className='footer_btn'><li className='footer_links'>twitter</li></Link>
                    <Link to="#" className='footer_btn'><li className='footer_links'>discord</li></Link>
                    <Link to="#" className='footer_btn'><li className='footer_links'>telegramm</li></Link>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;