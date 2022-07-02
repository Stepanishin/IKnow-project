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
                {/* <h2 className='WhoWeAre_title'>bett + think = earn</h2> */}
                {/* <h2 className='WhoWeAre_title'>Almost Moon. Almost free mint. Almost DAO. Almost like others. Or not.</h2> */}
                <div className='WhoWeAre_content'>
                    <h3 className='WhoWeAre_content_title'>who we are</h3>
                    <div className='WhoWeAre_content_description_container'>
                        {/* <h4 className='description_title'>About us</h4> */}
                        <p> Is it Rug City? Scam Valley? No, it`s just…"Rektville"!
It is a web3 platform for user interaction with the digital  NFTs world. You have to hold the "Rektville"  NFT on the wallet to get more benefits and earn digital money.</p>
                        {/* <h4 className='description_title'>What is the purpose of "Rektville"?</h4>     */}
                        <p>The main purpose of the projekt "Rektville" is to create a web3 platform managed by DAO for the community of pioneers and provide them with additional opportunities in the limitless digital world of the NFT.</p>
                        {/* <h4 className='description_title'>What is a "Rektville" NFT collection ?</h4>     */}
                        <p>The first step was the release of the "Rektville" NFT collection is the initial NFT collection of the project — our bonus for early adopters, and thanks to the original community of the project for their support at an early stage.</p>
                        {/* <h4 className='description_title'>"Court"</h4>     */}
                        <p>We`re building a decentralized community of web3, by providing unparalleled value to our members and the Solana ecosystem. Almost Moon. Almost free mint. Almost DAO. Almost like others. Or not…</p>
                        {/* <p>"Court" is a part of the “Rektville” web3 platform, a game that will allow you to earn on the release of new NFT collections in the marketplace. Make your decision! Adjudicate! Play in court!

Predict what floor will be one hour after beginning of the final mint tranche or when the secondary market for the project, whichever comes last.
</p> */}
                        {/* <p>Almost Moon. Almost free mint. Almost DAO. Almost like others. Or not…</p> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhoWeAre;