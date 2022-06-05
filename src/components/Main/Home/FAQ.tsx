import React from 'react';
import 'antd/lib/collapse/style/index.css'
import './FAQ.css'
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';



const FAQ: React.FC<{}>= () => {

    const { Panel } = Collapse;

    return (
        <Collapse
            bordered={false}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="FAQ_container"
            accordion
        >
            <Panel header="What is “I know”?" key="1" className="FAQ_item" style={{color: 'white'}}>
            <p>“I Know” is a first web3 betting platform in NFTs world. You have to hold the “Iknow betTER”  NFT and Iknow DAOTiket(NFT2) on the wallet to get more benefits and earn digital money.</p>
            </Panel>

            <Panel header="What is a Iknow betTER collection?" key="2" className="FAQ_item">
            <p>This is the initial NFT collection of the project — our bonus for early adopters, and thanks to the original community of the project for their support at an early stage. In total, there will be 888 Iknow betTER NFTs at a price of 0.88 SOL.

            The main purpose of the existence of the Iknow betTER NFT  is to create a community of early adopters and give them additional opportunities through access to the ability to find out the hidden results of bets on our platform.

            In the future, NFTs from Iknow betTER collection will provide an opportunity to get exclusive  "Iknow DAOTicket(NFT2)”.
            </p>
            </Panel>

            <Panel header="What is a Iknow DAOTiket(NFT2)?" key="3" className="FAQ_item">
            <p>This is an exclusive NFT collection, holders of an "Iknow DAOTicket(NFT2)” get access to earn digital money and our discord-based DAO, IKnowDAO, where we deliver interconnectivity via social programs and rewards to the community.</p>
            </Panel>

            <Panel header="How to get a spot in the Iknow betTER whitelist?" key="4" className="FAQ_item">
            <p>All active, helpful members of the community who show a passion for the project will get a spot in the Iknow betTER collection whitelist. Activity is encouraged, but we’re not going to look at the number of discord invites or your level on the server. It is important for us to create an engaged community passionate about our product.</p>
            </Panel>

            <Panel header="When, where, and how will the mint take place?" key="5" className="FAQ_item">
            <p>We plan to launch the Iknow betTER collection in the second half of september 2022 on one of the largest launchpads. Details about this launch will be announced later.</p>
            </Panel>

            <Panel header="When and where will the collection be listed?" key="6" className="FAQ_item">
            <p>The collection will be listed in the next few hours or even minutes after the mint. We do not plan to list the collection on a large number of marketplaces. We choose quality instead of quantity. We recommend you follow the announcements on our Twitter and Discord.</p>
            </Panel>

            <Panel header="Is there a limit per wallet?" key="7" className="FAQ_item">
            <p>Early adopters (OG) limit — 2 mints per 1 wallet. 
            Whitelist (WL) limit — 1 mint per 1 wallet. 
            There is no planned limit for the public WL.
            </p>
            </Panel>

            <Panel header="How do I find out the rarity of my NFT? Does it affect anything?" key="8" className="FAQ_item">
            <p>The rarity of the NFTs will be available as soon as possible after the mint on our website. There will also be an NFT rarity check by its number on the website. You will just have to enter the number of the NFT, and you will see its traits and Global Ranking. We will also provide official information on rarity to all popular services as soon as possible after the mint.</p>
            </Panel>
      </Collapse>
    );
};

export default FAQ;