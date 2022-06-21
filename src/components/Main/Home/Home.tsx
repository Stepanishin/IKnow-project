import React from 'react';
import FAQ from './FAQ/FAQ';
import './Home.css'
import Roadmap from './Roadmap/Roadmap';
import OpenPage from './OpenPage/OpenPage';
import WhoWeAre from './WhoWeAre/WhoWeAre';

const Home = () => {
    return (
        <main className='home'>
            <div className='home_wrap'>
                <OpenPage />
                <WhoWeAre />
                <Roadmap />
                {/* <FAQ /> */}
            </div>
        </main>
    );
};

export default Home;