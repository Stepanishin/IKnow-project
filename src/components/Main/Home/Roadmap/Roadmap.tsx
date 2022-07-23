import React from 'react';
// import 'antd/dist/antd.css';
import './Roadmap.css';
// import 'antd/lib/timeline/style/index.css'
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import Ellipse3 from './img/Ellipse3.png'
import Ellipse4 from './img/Ellipse4.png'

const Roadmap: React.FC = () => {
    return (
        <div className='Roadmap'>
            <div className='Roadmap_container'>
            <img className='Roadmap_Ellipse3' src={Ellipse3} alt="" />
            <img className='Roadmap_Ellipse4' src={Ellipse4} alt="" /> 
            <h1 className='RoadMap_title'>Road map</h1>
            <Timeline className='Roadmap_' mode="alternate">
            
                <Timeline.Item>
                    Project start - May 2022. <br />
                    The final vision of the project concept and search for artists.
                </Timeline.Item>

                <Timeline.Item color="green">
                    Partnerships & Advisors - June 2022. <br />
                    Deals with potential partners from traditional and crypto markets
                    Team creation
                </Timeline.Item>

                <Timeline.Item>
                    Social networks launch - July 2022. <br />
                    Site development
                    Community building by launching social activity in Discord, Twitter and Telegram
                </Timeline.Item>

                <Timeline.Item>
                    NFT development - July 2022. <br />
                    We're building tools that allow consumers to bet NFTs collections, for creators and developers to promote new NFTs collections in the digital marketplaces world.
                    Selection of the best artists, active development of the arts, and preparation for the Iknow betTER collection mint.
                </Timeline.Item>

                <Timeline.Item>
                    Iknow betTER collection mint - September 2022. <br />
                    888 Iknow betTER NFT for the price of 0.88 SOL are distributed to their new owners. The Iknow betTER is a 100% WhiteList project. We will provide a pre-mint of 88 NFTs for marketing purposes, as well as give out whitelist spots to the most active members of the community and members of the largest DAOs in the Solana ecosystem.
                </Timeline.Item>

                <Timeline.Item>
                    Launch of the Iknow platform - September 2022. <br />
                    “I Know” is a community-centric platform. We work hard to be responsive, close to the ground, and in service to the best interests of our users. 
                </Timeline.Item>

                <Timeline.Item>
                    NFT Snapshot - september - december 2022. <br />
                    We will periodically take random snapshots of our Iknow betTER NFT holders' wallets. In the future, all wallets that hold at least two  Iknow betTER NFTs during each of the snapshots will receive an opportunity to get Iknow DAOTiket(NFT2).
                </Timeline.Item>

                <Timeline.Item>
                    Development of the Iknow DAOTiket(NFT2) collection  - september 2022 <br />
                </Timeline.Item>

                <Timeline.Item>
                    Iknow DAOTiket chat(NFT2) collection mint - october 2022. <br />
                    88 Iknow DAOTicket(NFT2) for the price of 8 SOL are distributed to their new owners.
                    Holding a "Iknow DAOTicket(NFT2)” gives holders access to our discord-based DAO, IKnowDAO, where we deliver interconnectivity via social programs and rewards to the community.
                </Timeline.Item>

                <Timeline.Item>
                    Launch of the DAO and Iknow DAOTiket(NFT2) chat for the holders - december 2022 <br />
                </Timeline.Item>
                
            </Timeline>
            </div>
        </div>
    );
};

export default Roadmap;