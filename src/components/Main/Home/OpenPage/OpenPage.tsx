import React from 'react';
import './OpenPage.css'
import Rektville from '.././img/rektville.gif'
import Ellipse1 from './img/Ellipse1.png'
import { Link } from 'react-router-dom';

const OpenPage = () => {
    return (
        <div className='home_openPage'>
            <div className='openPage_wrap'>
                <div className='openPage_description'>
                    <img className='openPage_Ellipse1' src={Ellipse1} alt="" />
                    {/* <p className='home_descr'>Is it Rug City? Scam Valley? <br></br> <span>No, it's just...</span></p> */}
                    <p className='home_descr'>"Court" is a part of the “Rektville” web3 platform, a game that will allow you to earn on the release of new NFT collections in the marketplace. Make your decision! Adjudicate!</p>
                    <p className='home_descr'> Play in court!</p>
                    <Link to={'./List'} ><button className='home_descr_btn home_descr_btn_deks'>Judge!</button></Link>
                </div>
                <Link to={'./List'} ><button className='home_descr_btn home_descr_btn_mobile'>Judge!</button></Link>
                <img className='openPage_wrap_image' src={Rektville} alt="" />
                
            </div>
        </div>
    );
};

export default OpenPage;