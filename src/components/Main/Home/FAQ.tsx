import React from 'react';
// import 'antd/dist/antd.css';
import 'antd/lib/collapse/style/index.css'
import './FAQ.css'
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';



const FAQ: React.FC<{}>= () => {

    const { Panel } = Collapse;

    // const show_descr = (e) => {
    //     const descr = document.querySelector('.FAQ_item_description');
    //     descr?.classList.toggle('dn')
    // }

    // const onChange = (key: any) => {
    // console.log(key);
    // };

    return (
        // <div className='FAQ'>
            /* <ul>
                <li>
                    <div className='FAQ_item' onClick={show_descr}>
                        <p className='FAQ_item_title' >What is “I know”?</p>
                        <p className='FAQ_item_description' >“I Know” is a first web3 betting platform in NFTs world. You have to hold the “Iknow betTER”  NFT and Iknow DAOTiket(NFT2) on the wallet to get more benefits and earn digital money.</p>
                    </div>
                </li>
            </ul> */
        /* </div> */
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
            <Panel header="This is panel header 3" key="3" className="FAQ_item">
            <p></p>
            </Panel>
      </Collapse>
    );
};

export default FAQ;