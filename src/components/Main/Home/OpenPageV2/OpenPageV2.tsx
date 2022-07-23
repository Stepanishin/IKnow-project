import React from 'react';
import './OpenPageV2.css'
import rektville from './img/rektville2.png'
import { Link } from 'react-router-dom';

const OpenPageV2 = () => {
    return (
        <div className='home_openPageV2' >
            <img className='openPageV2_img_rekt' src={rektville} alt="" />
            <div className='openPageV2_container_descr'>
                <p>Is it Rug City? Scam Valley? No, it's just…</p>
                <p>Rektville is a web3 platform for user interaction with the digital NFTs world.</p>
                <p>
                And the first part of platform - “COURT”, a game that will allow you to earn on the release of <span>new NFT collections in the marketplace.</span> 
                </p>
                <p>Make your decision! Adjudicate! Play in court!</p>
                <Link to={'./CourtList'} ><button className='openPageV2_home_descr_btn'>Judge!</button></Link>
            </div>
        </div>
    );
};

export default OpenPageV2;