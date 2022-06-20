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
                <h2 className='WhoWeAre_title'>bett + think = earn</h2>
                <div className='WhoWeAre_content'>
                    <h3 className='WhoWeAre_content_title'>who we are</h3>
                    <div className='WhoWeAre_content_description_container'>
                        <p>«I Know» is a first bett2earn web3 platform.There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                        <p>We are web3 first betting platform in digital world NFTs. The project ecosystem will include NFT collection and DAOTicket(NFT2): Iknow betTER(a collection of 888 NFTs priced at 0,8 SOL ) and Iknow DAOTiket(ТАЕ2) (later). Both will have a wide range of utilities and will be used to earn* digital money on the platform.</p>
                        <p>«I Know» is a first bett2earn web3 platform.There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                        <p>We are web3 first betting platform in digital world NFTs. The project ecosystem will include NFT collection and DAOTicket(NFT2): Iknow betTER(a collection of 888 NFTs priced at 0,8 SOL ) and Iknow DAOTiket(ТАЕ2) (later). Both will have a wide range of utilities and will be used to earn* digital money on the platform.</p>
                        <p>«I Know» is a first bett2earn web3 platform.There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                        <p>We are web3 first betting platform in digital world NFTs. The project ecosystem will include NFT collection and DAOTicket(NFT2): Iknow betTER(a collection of 888 NFTs priced at 0,8 SOL ) and Iknow DAOTiket(ТАЕ2) (later). Both will have a wide range of utilities and will be used to earn* digital money on the platform.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhoWeAre;