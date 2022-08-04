import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useGetJudgesQuery } from '../../../store/reducers/firebase.api';
import './Flat.css'



const Flat: FC = () => {

    const { publicKey, sendTransaction } = useWallet();
    let { isLoading, data} = useGetJudgesQuery('')

    useEffect(() => {
        window.scroll(0,0); 
    }, [])

    if (publicKey) {
        if (data) {
            let userWallet = publicKey.toBase58()
            data = data.filter((el:any) => {
                return (el[1]?.wallets?.SolForLess.hasOwnProperty(userWallet) || el[1]?.wallets?.SolForMore.hasOwnProperty(userWallet))
            })
        }
    }

    return (
        <div className='Flat_container'>
            {
                publicKey
                ?
                <div>
                    <h2 className='Flat_title'>Your Flat</h2>
                    {/* <p className='Flat_wallet'>Citizen</p> */}
                    <p className='Flat_wallet'>
                        {"" + publicKey.toBase58().slice(0, 3) +"..."+ publicKey.toBase58().slice(publicKey.toBase58().length - 3, publicKey.toBase58().length)}
                    </p>


                    {
                        data && data?.filter(card => card[1].state === 'active').length > 0
                        ?
                        <div className='Flat_judges_container'>
                            <h3 className='Flat_judges_title'>Active Judges</h3>
                            <ul className='Flat_judges_list'>
                                {
                                data?.map(( card : any) => {   
                                    if (card[1].state === 'active') {
                                        let userWallet = publicKey.toBase58()
                                        if (card[1].wallets.SolForLess.hasOwnProperty(userWallet)) {
                                            return (
                                                <div key={card[1].name} className='Flat_judge_wrap' style={{border:' 3px solid #ff65bd'}}>
                                                    <Link style={{color:"#ff65bd"}} to={`/CourtList/${card[1].name}`}><li>{card[1].name}</li></Link>
                                                    <p>Your bet {card[1].wallets.SolForLess[userWallet].bet} SOL</p> 
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={card[1].name} className='Flat_judge_wrap' style={{border:'3px solid #00FFFF'}}>
                                                    <Link style={{color:"#00FFFF"}} to={`/CourtList/${card[1].name}`}><li>{card[1].name}</li></Link>
                                                    <p>Your bet {card[1].wallets.SolForMore[userWallet].bet} SOL</p>
                                                </div>
                                            )
                                        } 
                                    }
                                })
                                }
                            </ul>
                        </div>
                        :
                        <p style={{marginTop: '20px', textAlign:'center'}}>You don`t have active bets -  <Link to={'/CourtList'} className='Flat_linkToCourt' >Judge!</Link> </p>
                    }

{
                        data && data?.filter(card => card[1].state === 'wait').length > 0
                        ?
                        <div className='Flat_judges_container'>
                            <h3 className='Flat_judges_title'>Waiting result</h3>
                            <ul className='Flat_judges_list'>
                                {
                                data?.map(( card : any) => {   
                                    if (card[1].state === 'wait') {
                                        let userWallet = publicKey.toBase58()
                                        if (card[1].wallets.SolForLess.hasOwnProperty(userWallet)) {
                                            return (
                                                <div key={card[1].name} className='Flat_judge_wrap' style={{border:' 3px solid #ff65bd'}}>
                                                    <Link style={{color:"#ff65bd"}} to={`/CourtList/${card[1].name}`}><li>{card[1].name}</li></Link>
                                                    <p>Your bet: {card[1].wallets.SolForLess[userWallet].bet} SOL</p> 
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={card[1].name} className='Flat_judge_wrap' style={{border:'3px solid #00FFFF'}}>
                                                    <Link style={{color:"#00FFFF"}} to={`/CourtList/${card[1].name}`}><li>{card[1].name}</li></Link>
                                                    <p>Your bet {card[1].wallets.SolForMore[userWallet].bet} SOL</p>
                                                </div>
                                            )
                                        } 
                                    }
                                })
                                }
                            </ul>
                        </div>
                        :
                        <></>
                    }

{
                        data && data?.filter(card => card[1].state === 'past').length > 0
                        ?
                        <div className='Flat_judges_container'>
                            <h3 className='Flat_judges_title'>Past Judges</h3>
                            <ul className='Flat_judges_list'>
                                {
                                data?.map(( card : any) => {   
                                    if (card[1].state === 'past') {
                                        let userWallet = publicKey.toBase58()
                                        if (card[1].wallets.SolForLess.hasOwnProperty(userWallet)) {
                                            return (
                                                <div key={card[1].name} className='Flat_judge_wrap' style={{border:' 3px solid #ff65bd'}}>
                                                    <Link style={{color:"#ff65bd"}} to={`/CourtList/${card[1].name}`}><li>{card[1].name}</li></Link>
                                                    <p>Your bet {card[1].wallets.SolForLess[userWallet].bet} SOL</p>
                                                    {
                                                        card[1].result === 'less'
                                                        ?
                                                        <p>Your result <span style={{color:'green'}}>Win</span></p>
                                                        :
                                                        <p>Your result <span style={{color:'red'}}>Lose</span></p>
                                                    } 
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={card[1].name} className='Flat_judge_wrap' style={{border:'3px solid #00FFFF'}}>
                                                    <Link style={{color:"#00FFFF"}} to={`/CourtList/${card[1].name}`}><li>{card[1].name}</li></Link>
                                                    <p>Your bet {card[1].wallets.SolForMore[userWallet].bet} SOL</p>
                                                    {
                                                        card[1].result === 'more'
                                                        ?
                                                        <p>Your result <span style={{color:'green'}}>Win</span></p>
                                                        :
                                                        <p>Your result <span style={{color:'red'}}>Lose</span></p>
                                                    } 
                                                </div>
                                            )
                                        } 
                                    }
                                })
                                }
                            </ul>
                        </div>
                        :
                        <></>
                    }
                    


                </div>              
                :
                <h2 className='Flat_title'>Connect your wallet please</h2>
            }
        </div>
    );
};

export default Flat;