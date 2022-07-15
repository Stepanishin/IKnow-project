import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../UI/Logo/Logo';
import './Footer.css'

const Footer = () => {

    const goToTop = () => {
        window.scroll(0,0);
    }

    return (
        <footer className='footer'>
            <nav className='footer_nav'>
                <ul className='footer_nav__list'>
                    <Logo />
                    <Link onClick={goToTop} to="/" className='footer_btn footer_links_dn'><li className='footer_links'>Home</li></Link>
                    <Link to="/CourtList" className='footer_btn footer_links_dn'><li className='footer_links'>Court</li></Link>
                    <a rel='noreferrer' target="_blank" href="https://twitter.com/rektvillenft" className='footer_btn'><li className='footer_links'>Twitter</li></a>
                    <a rel='noreferrer' target="_blank" href="https://magiceden.io/marketplace/rektville" className='footer_btn'><li className='footer_links'>Magiceden</li></a>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;