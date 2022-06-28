import React, { FC } from 'react';
import './Home.css'
import OpenPage from './OpenPage/OpenPage';
import WhoWeAre from './WhoWeAre/WhoWeAre';

const Home: FC = () => {
    return (
        <main className='home'>
            <div className='home_wrap'>
                <OpenPage />
                <WhoWeAre />
            </div>
        </main>
    );
};

export default Home;