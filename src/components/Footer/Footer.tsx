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
                    <Link to="/" className='footer_btn footer_links_dn'><li className='footer_links'>Home</li></Link>
                    <Link to="/List" className='footer_btn footer_links_dn'><li className='footer_links'>Court</li></Link>
                    {/* <Link to="#" className='footer_btn footer_links_dn'><li className='footer_links'>About us</li></Link> */}
                    {/* <Link to="/RoadMap" className='footer_btn footer_links_dn'><li className='footer_links'>Road map</li></Link> */}
                    {/* <Link to="#" className='footer_btn footer_links_dn'><li className='footer_links'>FAQ</li></Link> */}
                    <Link to="#" className='footer_btn footer_links_dn'><li className='footer_links'>???</li></Link>
                    <a href="https://twitter.com/rektvillenft" className='footer_btn'><li className='footer_links'>Twitter</li></a>
                    <Link to="#" className='footer_btn'><li className='footer_links'>Discord</li></Link>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;