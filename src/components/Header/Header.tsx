import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../UI/Logo';
import ConnectWallet from '../UI/ConnectWallet/ConnectWallet';
import './Header.css'


const Header: FC = () => {

    let burgerMenu: any
    let toggle: any

    useEffect(() => {
        burgerMenu = document.querySelector('.nav')
        toggle = document.querySelector("#toggle")
    }, [])  

    const deleteBurgerMenu = () => {
        burgerMenu.classList.add("dn")
        toggle.checked = false
        burgerMenu.classList.remove("dn")
    }

    return (
        <header className='Header'>
            <div className='Header_wrap'>
                    <Logo />
                <nav className='Header_nav'>
                    <ul className='Header_nav__list'>
                        <Link className='nav__list_link' to={'/'}><li><b>Home</b></li></Link>
                        <Link className='nav__list_link' to={'./List'}><li><b>Court</b></li></Link>
                    </ul>
                    <ul className='Header_nav__list_mobile'>
                    <input id="toggle" type="checkbox" className='toggle' ></input>
                            <label htmlFor="toggle" className="hamburger">
                                <div className="top-bun"></div>
                                <div className="meat"></div>
                                <div className="bottom-bun"></div>
                            </label>
                            <div className="nav">
                                <div className="nav-wrapper">
                                    <nav className='header_nav_mobile'>
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link_mobile' to={'/'}><li><b>Home</b></li></Link>
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link_mobile' to={'./List'}><li><b>Court</b></li></Link>
                                        <ConnectWallet className={"WalletMultiButtonMobile"} classNameBorder={'WalletBorderContainerMobile'} />
                                    </nav>
                                </div>
                            </div>
                    </ul>
                </nav>
                <ConnectWallet className={"WalletMultiButton"} classNameBorder={'WalletBorderContainer'} />
            </div>
        </header>
    );
};

export default Header;