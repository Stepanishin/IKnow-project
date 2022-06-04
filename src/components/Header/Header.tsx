import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header: FC = () => {
    const showWallets = () => {   
        const walletsWrap: any = document.querySelector('.WalletsWindow_wrap')
        const modalBg: any = document.querySelector('.WalletsWindow')
        const walletsWindow: any = document.querySelector('.WalletsWindow')
        walletsWindow.setAttribute('style', 'transform: scale(1);')
        walletsWrap.setAttribute('style', 'transform: scale(1);')
        modalBg.classList.add('modalBg')
    }


    return (
        <header className='Header'>
            <div className='Header_wrap'>
                <div className='Header_logo'>OUR LOGO</div>
                <nav className='Header_nav'>
                    <ul className='Header_nav__list'>
                        <Link to={'/'}><li><b>Home</b></li></Link>
                        <Link to={'./List'}><li><b>List</b></li></Link>
                        <Link to={'./Auth'}><li><b>Auth</b></li></Link>
                    </ul>
                </nav>
                <button onClick={showWallets} className='Header_btn'>Connect wallet</button>
            </div>
        </header>
    );
};

export default Header;