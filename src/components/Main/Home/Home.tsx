import React from 'react';
import FAQ from './FAQ';
import './Home.css'
import Roadmap from './Roadmap/Roadmap';

const Home = () => {
    return (
        <main className='home'>
            <div className='home_wrap'>
                <h1 className='home_title'>I KNOW</h1>
                <div className="home_descr">
                    <p>The first web3 platform for betting crypto collectibles and non-fungible tokens (NFTs). Discover exclusive capabilities in the digital world.</p>
                    <p>bett+think=earn</p>
                    <p>“I Know” is a first bett2earn web3 platform.</p>
                    <p>We are web3 first betting platform in digital world NFTs</p>
                    <p>The project ecosystem will include NFT collection and DAOTicket(NFT2): Iknow betTER(a collection of 888 NFTs priced at 0,8 SOL ) and Iknow DAOTiket(ТАЕ2) (later). Both will have a wide range of utilities and will be used to earn* digital money on the platform.</p>
                    <p></p>
                </div>
                <h1 className='home_title RoadMap_title'>Road map</h1>
                <Roadmap />
                <h1 className='home_title'>FAQ</h1>
                <FAQ />
            </div>
        </main>
    );
};

export default Home;