import React, { FC, useEffect } from 'react';
import './Home.css'
import OpenPage from './OpenPage/OpenPage';
import OpenPageV2 from './OpenPageV2/OpenPageV2';
import WhoWeAre from './WhoWeAre/WhoWeAre';

const Home: FC = () => {

    useEffect(() => {
        window.scroll(0,0);
    }, [])

    return (
        <main className='home'>
            <div className='home_wrap'>
                <OpenPageV2 />
                <OpenPage />
                <WhoWeAre />
            </div>
        </main>
    );
};

export default Home;