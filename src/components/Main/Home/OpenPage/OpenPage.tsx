import React from 'react';
import './OpenPage.css'
import Rectville from '.././img/rektville.gif'

const OpenPage = () => {
    return (
        <div className='home_openPage'>
            <div className='openPage_wrap'>
                <div className='openPage_description'>
                    <h1 className='home_title'>Discover exclusive capabilities in the digital <span className='home_title_NFT'>NFT</span></h1>
                    <p className='home_descr'>The world's largets digital market place for crypto collectibles and non-fungible tokens (NFT's)</p>
                    <button className='home_descr_btn home_descr_btn_deks'>explore more</button>
                </div>
                <img className='openPage_wrap_image' src={Rectville} alt="" />
                <button className='home_descr_btn home_descr_btn_mobile'>explore more</button>
            </div>
        </div>
    );
};

export default OpenPage;