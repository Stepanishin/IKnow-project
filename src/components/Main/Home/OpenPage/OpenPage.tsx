import React from 'react';
import './OpenPage.css'
import Rektville from '.././img/rektville.gif'

const OpenPage = () => {
    return (
        <div className='home_openPage'>
            <div className='openPage_wrap'>
                <div className='openPage_description'>
                    <p className='home_descr'>Is it Rug City? Scam Valley? <br></br> <span>No, it's just...</span></p>
                    <button className='home_descr_btn home_descr_btn_deks'>Judge!</button>
                </div>
                <img className='openPage_wrap_image' src={Rektville} alt="" />
                <button className='home_descr_btn home_descr_btn_mobile'>Judge!</button>
            </div>
        </div>
    );
};

export default OpenPage;