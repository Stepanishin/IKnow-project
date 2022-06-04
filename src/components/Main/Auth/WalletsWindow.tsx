import React from 'react';
import './WalletsWindows.css'
import PhantomLogo from './img/phantom-logo.png'

const WalletsWindow: React.FC = () => {

    const closeWallets = () => {  
        const walletsWrap: any = document.querySelector('.WalletsWindow_wrap')
        const modalBg: any = document.querySelector('.WalletsWindow')
        const walletsWindow: any = document.querySelector('.WalletsWindow') 
        walletsWrap.setAttribute('style', 'transform: scale(0);')
        setTimeout(closeWindow, 300)
        function closeWindow() {
            walletsWindow.setAttribute('style', 'transform: scale(0);')
        }
        modalBg.classList.remove('modalBg')
    }
    
    return (
        <div className='WalletsWindow'>
            <div className='WalletsWindow_wrap'>
                <ul className='Wallets_list'>
                    <li>
                        <button onClick={closeWallets}>
                            <img src={PhantomLogo} alt="" width='50' height='50' />
                            Phantom
                        </button>
                    </li>
                    <li>
                        <button onClick={closeWallets}>
                            <img src={PhantomLogo} alt="" width='50' height='50' />
                            Phantom
                        </button>
                    </li>
                    <li>
                        <button onClick={closeWallets}>
                            <img src={PhantomLogo} alt="" width='50' height='50' />
                            Phantom
                        </button>
                    </li>
                </ul>
                <button className='closeBtn' onClick={closeWallets}>Exit</button>
            </div>
        </div>
    );
};

export default WalletsWindow;