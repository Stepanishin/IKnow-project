import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../UI/Logo/Logo';
import ConnectWallet from '../UI/ConnectWallet/ConnectWallet';
import './Header.css'
import { useGetUsersQuery } from '../../store/reducers/firebase.api';
import { useWallet } from '@solana/wallet-adapter-react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { adminAccessSlice } from '../../store/reducers/getAdminAccess';


const Header: FC = () => {

    const { data } = useGetUsersQuery('')
    const { publicKey, sendTransaction } = useWallet();
    
    let userWallet = publicKey?.toBase58()!  

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
                        <Link className='nav__list_link' to={'./CourtList'}><li><b>Court</b></li></Link>
                        <Link className='nav__list_link' to={'./Flat'}><li><b>Flat</b></li></Link>
                        {
                            data && userWallet && data[userWallet] && data[userWallet].status === 'admin' 
                            ?
                            <Link className='nav__list_link' to={'./AdminPanel'}><li><b>AdminPanel</b></li></Link>
                            :
                            <></>
                        }
                        
                    </ul>
                    <ul className='Header_nav__list_mobile'>
                    <input id="toggle" type="checkbox" className='toggle' ></input>
                            <label htmlFor="toggle" className="hamburger">
                                <div className="top-bun"></div>
                                <div className="meat"></div>
                                <div className="bottom-bun"></div>
                            </label>
                            <div test-id='zxcvbn' className="nav">
                                <div className="nav-wrapper">
                                    <nav className='header_nav_mobile'>
                                        <Link test-id='qwerty' onClick={deleteBurgerMenu} className='header_nav_link_mobile' to={'/'}><li><b>Home</b></li></Link>
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link_mobile' to={'./CourtList'}><li><b>Court</b></li></Link>
                                        <Link onClick={deleteBurgerMenu} className='header_nav_link_mobile' to={'./Flat'}><li><b>Flat</b></li></Link>
                                        {
                                            data && userWallet && data[userWallet] && data[userWallet].status === 'admin'  
                                            ?
                                            <Link onClick={deleteBurgerMenu} className='header_nav_link_mobile' to={'./AdminPanel'}><li><b>AdminPanel</b></li></Link>
                                            :
                                            <></>
                                        }
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