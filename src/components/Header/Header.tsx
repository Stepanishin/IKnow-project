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

    useEffect(() => {
        burgerMenu = document.querySelector('.nav')
        toggle = document.querySelector("#toggle")
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
                        <Link className='nav__list_link' to={'./List'}><li><b>Bets</b></li></Link>
                        {/* <Link className='nav__list_link' to={'./Auth'}><li><b>FAQ</b></li></Link>
                        <Link className='nav__list_link' to={'./Train'}><li><b>Train</b></li></Link> */}
                    </ul>
                    <ul className='Header_nav__list_mobile'>
                    <input id="toggle" type="checkbox"></input>
                            <label htmlFor="toggle" className="hamburger">
                                <div className="top-bun"></div>
                                <div className="meat"></div>
                                <div className="bottom-bun"></div>
                            </label>
                            <div className="nav">
                                <div className="nav-wrapper">
                                    <nav className='header_nav_mobile'>
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link header_nav_link_mobile_1' to={'/'}><li className='header_nav_item'>Home</li></Link>
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link header_nav_link_mobile' to={'/List'}><li className='header_nav_item'>Bets</li></Link>
                                        <ConnectWalletMobile />
                                        {/* <Link onClick={deleteBurgerMenu} className='header_nav_link header_nav_link_mobile' to={'/Auth'}><li className='header_nav_item'>Auth</li></Link>
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link header_nav_link_mobile' to={'/Train'}><li className='header_nav_item'>Train</li></Link> */}
                                    </nav>
                                </div>
                            </div>
                    </ul>
                </nav>
                {/* <button onClick={showWallets} className='Header_btn'>Connect wallet</button> */}
                <ConnectWallet />
            </div>
        </header>
    );
};

export default Header;