import React from 'react';
import './OpenPage.css'
import Rektville from '.././img/rektville.gif'
import Ellipse1 from './img/Ellipse1.png'

const OpenPage = () => {
    return (
        <div className='home_openPage'>
            <div className='openPage_wrap'>
                <div className='openPage_description'>
                    <img className='openPage_Ellipse1' src={Ellipse1} alt="" />
                    <p className='home_descr'>The first step was release 
                    of the Rektville NFT collection
                    is the initialNFT collection 
                    of the project — our bonus for
                    early adopters, and thanks 
                    to the original community
                    of the project for their support
                    at an early stage. In total, there 
                    7777 NFTs, you have to 
                    hold the "Rektville" NFT on the
                    wallet to earn digital money and 
                    get more benefits. 
                    You can buy our NFT on <a rel='noreferrer' target="_blank" href="https://magiceden.io/marketplace/rektville" className='home_descr_link'>Magiceden</a>
                    </p>
                </div>
                <img className='openPage_wrap_image' src={Rektville} alt="" />
                
            </div>
        </div>
    );
};

export default OpenPage;