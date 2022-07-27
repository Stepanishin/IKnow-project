import React from 'react';
import './AboutNFT.css'
import Rektville from '.././img/rektville.gif'
import Ellipse1 from './img/Ellipse1.png'

const AboutNFT = () => {
    return (
        <div className='home_AboutNFT'>
            <div className='AboutNFT_wrap'>
                <div className='AboutNFT_description'>
                    <img className='AboutNFT_Ellipse1' src={Ellipse1} alt="" />
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
                    get more benefits. The most interesting thing is that 100% of our fees will be shared between holders of at least 25 Rektville NFTs.
                    You can buy our NFT on <a rel='noreferrer' target="_blank" href="https://magiceden.io/marketplace/rektville" className='home_descr_link'>Magiceden</a>
                    </p>
                </div>
                <img className='AboutNFT_wrap_image' src={Rektville} alt="" />
            </div>
        </div>
    );
};

export default AboutNFT;