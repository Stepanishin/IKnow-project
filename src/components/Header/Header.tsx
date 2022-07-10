import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../UI/Logo';
import ConnectWallet from '../UI/ConnectWallet/ConnectWallet';
import './Header.css'


const Header: FC = () => {

    let [check, setCheck] = useState(1)

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
        // splide.classList.toggle("dn")
    }

    const showSplide = () => {
        // splide = document.querySelector('.splide')
        // splide.classList.toggle("dn")  
    }

    // const letCheck = () => {
    //     splide = document.querySelector('.splide')
    //     if (toggle.checked === true) {
    //         setCheck(1)
    //         splide.classList.
    //     }
    // }





    return (
        <header className='Header'>
            <div className='Header_wrap'>
                    <Logo />
                <nav className='Header_nav'>
                    <ul className='Header_nav__list'>
                        <Link className='nav__list_link' to={'/'}><li><b>Home</b></li></Link>
                        <Link className='nav__list_link' to={'./List'}><li><b>Court</b></li></Link>
                        {/* <Link className='nav__list_link' to={'./Secret'}><li><b>???</b></li></Link> */}

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
                                        {/* <Link onClick={deleteBurgerMenu} className='header_nav_link header_nav_link_mobile' to={'/'}><li className='header_nav_item'>Home</li></Link>
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link header_nav_link_mobile' to={'/List'}><li className='header_nav_item'>Court</li></Link>
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link header_nav_link_mobile' to={'./Secret'} ><li><b>???</b></li></Link> */}
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link_mobile' to={'/'}><li><b>Home</b></li></Link>
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link_mobile' to={'./List'}><li><b>Court</b></li></Link>
                                        {/* <Link onClick={deleteBurgerMenu} className='header_nav_link_mobile' to={'./Secret'}><li><b>???</b></li></Link> */}
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