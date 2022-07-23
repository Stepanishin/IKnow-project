import React from 'react';
import './WhoWeAre.css'
import Ellipse1 from './img/Ellipse1.png'
import Ellipse2 from './img/Ellipse2.png'

const WhoWeAre = () => {
    return (
        <div className='WhoWeAre'>
                    <img className='WhoWeAre_Ellipse1' src={Ellipse1} alt="" />
                    <img className='WhoWeAre_Ellipse2' src={Ellipse2} alt="" />
                    <div className='WhoWeAre_container'>
                        <div className='WhoWeAre_content'>
                            <h3 className='WhoWeAre_content_title'>who we are</h3>
                            <div className='WhoWeAre_content_description_container'>
                                <p>We`re building a decentralized community of web3, by providing unparalleled value to our members and the Solana ecosystem.</p>
                                <p>The main purpose of the projekt "Rektville" is to create a web3 platform managed by DAO for the community of pioneers and provide them with additional opportunities in the limitless digital world of the NFT.</p>
                                <p>Almost Moon. Almost free mint. Almost DAO. Almost like others. Or not…</p>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default WhoWeAre;