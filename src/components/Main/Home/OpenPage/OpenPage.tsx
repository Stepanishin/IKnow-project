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