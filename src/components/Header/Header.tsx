import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../UI/Logo';
import ConnectWallet from './ConnectWallet';
import ConnectWalletMobile from './ConnectWalletMobile';
import './Header.css'

type Props = {
    [key: string]: any;
};

const Header: FC = () => {

    let burgerMenu: any
    let toggle: any
    let splide: any

    useEffect(() => {
        burgerMenu = document.querySelector('.nav')
        toggle = document.querySelector("#toggle")
        splide = document.querySelector('.splide')
    }, [])  

    const showWallets = () => {   
        const walletsWrap: any = document.querySelector('.WalletsWindow_wrap')
        const modalBg: any = document.querySelector('.WalletsWindow')
        const walletsWindow: any = document.querySelector('.WalletsWindow')
        walletsWindow.setAttribute('style', 'transform: scale(1);')
        walletsWrap.setAttribute('style', 'transform: scale(1);')
        modalBg.classList.add('modalBg')
    }

    const deleteBurgerMenu = () => {
        burgerMenu.classList.add("dn")
        toggle.checked = false
        burgerMenu.classList.remove("dn")
        splide.classList.remove("dn")
    }

    const showSplide = () => {
        splide = document.querySelector('.splide')
        splide.classList.toggle("dn")
    }





    return (
        <header className='Header'>
            <div className='Header_wrap'>
                {/* <div className='Header_logo'> */}
                    <Logo />
                {/* </div> */}
                <nav className='Header_nav'>
                    <ul className='Header_nav__list'>
                        <Link className='nav__list_link' to={'/'}><li><b>Home</b></li></Link>
                        <Link className='nav__list_link' to={'./List'}><li><b>Court</b></li></Link>
                        <a className='nav__list_link' href='#'><li><b>About us</b></li></a>
                        <Link className='nav__list_link' to={'./RoadMap'}><li><b>Road map</b></li></Link>
                        <a className='nav__list_link' href='#'><li><b>FAQ</b></li></a>
                        <a className='nav__list_link' href='#'><li><b>???</b></li></a>

                    </ul>
                    <ul className='Header_nav__list_mobile'>
                    <input onClick={showSplide} id="toggle" type="checkbox" className='toggle' ></input>
                            <label htmlFor="toggle" className="hamburger">
                                <div className="top-bun"></div>
                                <div className="meat"></div>
                                <div className="bottom-bun"></div>
                            </label>
                            <div className="nav">
                                <div className="nav-wrapper">
                                    <nav className='header_nav_mobile'>
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link header_nav_link_mobile_1' to={'/'}><li className='header_nav_item'>Home</li></Link>
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link header_nav_link_mobile' to={'/List'}><li className='header_nav_item'>Court</li></Link>
                                        <a onClick={deleteBurgerMenu} className='header_nav_link header_nav_link_mobile' href='#'><li><b>About us</b></li></a>
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link header_nav_link_mobile' to={'./RoadMap'}><li><b>Road map</b></li></Link>
                                        <a onClick={deleteBurgerMenu} className='header_nav_link header_nav_link_mobile' href='#'><li><b>FAQ</b></li></a>
                                        <a onClick={deleteBurgerMenu} className='header_nav_link header_nav_link_mobile' href='#'><li><b>???</b></li></a>
                                        <ConnectWalletMobile />
                                    </nav>
                                </div>
                            </div>
                    </ul>
                </nav>
                <ConnectWallet />
            </div>
        </header>
    );
};

export default Header;