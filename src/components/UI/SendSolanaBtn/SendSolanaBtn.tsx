import React, { useEffect } from 'react';
import { FC, ReactNode, useMemo, useCallback, useState } from 'react';
import './SendSolanaBtn.css'

import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { actions, utils, programs, NodeWallet, Connection} from '@metaplex/js';
import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { termsAndConditionsSlice } from '../../../store/reducers/getTermsAndConditionsReducer';
import { getDatabase, ref, get, child, push, update, set } from "firebase/database";
import { timerAndDisableBtnSlice } from '../../../store/reducers/getTimerAndDisablebtnReducer';
import { ISendSolanaBtnProps } from '../../../types/ISendSolanaBtnProps';

const SendSolanaBtn: FC<ISendSolanaBtnProps> = ({cardDescrMore, cardDescrLess,wallet,classN,name,SolForWhat, SolForMore, SolForLess, id}) => {

    let alarmTerms: any
    let alarm_sendSucces : any
    let alarm_sendError : any
    let alarm_loading : any
    let customWindow: any

    useEffect(() => {
        alarmTerms = document.querySelector('.alarm_terms')!
        customWindow = document.querySelector('.SendSolanaBtn__custom_container')!
    }, [])

    const db = getDatabase();
    const {isDisabled} = useAppSelector(state => state.termsAndConditionsSlice)
    const {termsAndConditions} = termsAndConditionsSlice.actions
    const {isTimeToDisable} = useAppSelector(state => state.timerAndDisableBtnSlice)
    const {timerAndDisableBtn} = timerAndDisableBtnSlice.actions
    const dispatch = useAppDispatch()
    const [judgeValue, setJudgeValue] = useState(0)

    let theWallet:any= wallet

    const connection = new Connection(clusterApiUrl("mainnet-beta"))
    const { publicKey, sendTransaction } = useWallet();


    const onClick = useCallback( async (e:any) => {

        alarm_sendError = document.querySelector('.alarm_sendError')!

        try {
            let judgePrice:number = +(e.target.value)
        
        alarmTerms = document.querySelector('.alarm_terms')!
        alarm_sendSucces = document.querySelector('.alarm_sendSucces')!
        alarm_loading = document.querySelector('.alarm_loading')!

        if (isTimeToDisable) {
            return false
        }

        if (isDisabled) {
            alarmTerms.classList.add('alarm_terms_display')

            const closeAlarm =() => {
                alarmTerms.classList.remove('alarm_terms_display')
            }

            setTimeout(closeAlarm, 3000)
            return false
        }

        if (!publicKey) {
            let wl: HTMLElement = document.querySelector('.wallet-adapter-button')!
            if (wl instanceof HTMLElement) {
                    wl.click()         
            }
            
        }

        if (!publicKey) throw new WalletNotConnectedError('connect wallet123');
        
        alarm_loading.classList.add('alarm_loading_display')
        

        connection.getBalance(publicKey).then((bal) => {
        });

        let lamportsI = LAMPORTS_PER_SOL*e.target.value;
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: new PublicKey(theWallet),
                lamports: lamportsI,
            })
        );

        const signature = await sendTransaction(transaction, connection);
        
        await connection.confirmTransaction(signature, 'processed');
        
        const updateDb = () => {

            const dbRef = ref(getDatabase());
                    get(child(dbRef,  `/Judges/${name}${id}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        let arr = snapshot.val()

                        const updates:any = {};

                        let solQuantity:any = 0;
                        if (SolForWhat === 'SolForMore') {
                            solQuantity = arr.SolForMore
                        } else if (SolForWhat === 'SolForLess') {
                            solQuantity = arr.SolForLess
                        }

                        updates[`/Judges/${name}${id}` + `/${SolForWhat}/`] = judgePrice + solQuantity;
        
                        get(child(dbRef,  `/Judges/${name}${id}/wallets/${SolForWhat}`)).then((snapshot) => {
                            if (snapshot.exists()) {
                                let userWallet = publicKey.toBase58()
                                let arr = snapshot.val()
                                if (arr.hasOwnProperty(`${userWallet}`)) {
                                    let currentBet = arr[userWallet].bet
                                    updates[`/Judges/${name}${id}/wallets/${SolForWhat}/${userWallet}/bet/`] = currentBet + judgePrice
                                    return update(ref(db), updates);
                                } else {
                                    set(ref(db, `/Judges/${name}${id}/wallets/${SolForWhat}/${userWallet}`), {
                                        'userWallet': userWallet,
                                        'bet': judgePrice,
                                    });
                                }
                            }
                        }).catch((error) => {
                            console.error(error);
                        });


                        const closeAlarmLoading =() => {
                            alarm_loading.classList.remove('alarm_loading_display')
                        }
                        setTimeout(closeAlarmLoading, 1000)

                        alarm_sendSucces.classList.add('alarm_sendSucces_display')
                        const closeAlarmSucces =() => {
                            alarm_sendSucces.classList.remove('alarm_sendSucces_display')
                        }
                        setTimeout(closeAlarmSucces, 5000)

                        return update(ref(db), updates);
    
                    } else {
                        console.log("No data available");
                    }
                    }).catch((error) => {
                    console.error(error);
                    });
        }
        updateDb()
          } catch (err) {
            const closeAlarmLoading =() => {
                alarm_loading.classList.remove('alarm_loading_display')
            }
            setTimeout(closeAlarmLoading, 0)
            alarm_sendError.classList.add('alarm_sendError_display')
            const closeAlarmError =() => {
                alarm_sendError.classList.remove('alarm_sendError_display')
            }
            setTimeout(closeAlarmError, 5000)
          }

         
    }, [publicKey, sendTransaction, connection ]);
    
    let lala = () => {
        console.log(SolForWhat)
    }

    return (
        <div className='SendSolanaBtn_container'>

            <div className={classN} >
                <p style={{color: 'black', textAlign:'center'}} >{cardDescrLess} {cardDescrMore}</p>  <br />
                <div className='btnDEMO_container' >
                    <button value={0.1}  onClick={onClick} className='btnDEMO'>
                        0.1 SOL <br />
                        <span style={{fontSize: '10px'}}>
                        {
                            SolForLess && SolForMore
                            ?
                            SolForWhat === 'SolForMore'
                            ?
                            " win " + ((SolForMore + (SolForLess * 0.8) + 0.1)  / ((SolForMore + 0.1) / 0.1)).toFixed(2) + " SOL"
                            :
                            " win " + ((SolForLess + (SolForMore * 0.8) + 0.1)  / ((SolForLess + 0.1) / 0.1)).toFixed(2) + " SOL"
                            :
                            <></>
                        }
                        </span>
                        
                    </button>
                    <button value={0.3}  onClick={onClick} className='btnDEMO'>
                        0.3 SOL <br />
                        <span style={{fontSize: '10px'}}>
                        {
                            SolForLess && SolForMore
                            ?
                            SolForWhat === 'SolForMore'
                            ?
                            "win " + (((SolForMore + (SolForLess * 0.8) + 0.3)  / ((SolForMore + 0.3) / 0.1)) * 3).toFixed(2) + " SOL"
                            :
                            "win " + (((SolForLess + (SolForMore * 0.8) + 0.3)  / ((SolForLess + 0.3) / 0.1)) * 3).toFixed(2) + " SOL"
                            :
                            <></>
                        }
                        </span>
                    </button>
                    <p style={{color:'black'}} >Custom amount:</p>
                    <div className='SendSolanaBtn__custom_container'>
                        <input min="0.01" step="0.01" placeholder='SOL' className='SendSolanaBtn__custom_container_input' type="number" onChange={(e: any) => {
                            setJudgeValue(parseFloat(e.target.value))
                            if (e.target.value === '') {
                                setJudgeValue(0)
                            }
                        }} />
                        <button value={judgeValue}  onClick={onClick} className='btnDEMO' style={{fontSize:'14px'}}>
                                Make Judge!<br />
                                    <span style={{fontSize: '10px'}}>
                                    {
                                        SolForLess && SolForMore
                                        ?
                                        SolForWhat === 'SolForMore'
                                        ?
                                        "win " + (((SolForMore + (SolForLess * 0.8) + judgeValue)  / ((SolForMore + judgeValue) / 0.1)) * (judgeValue / 0.1)).toFixed(2) + " SOL"
                                        :
                                        "win " + (((SolForLess + (SolForMore * 0.8) + judgeValue)  / ((SolForLess + judgeValue) / 0.1)) * (judgeValue / 0.1)).toFixed(2) + " SOL"
                                        :
                                        <></>
                                    }
                                    </span>
                        </button>
                    </div>
                        
                </div>      
            </div>


            <div className='alarm_terms'>Accept terms and conditions!</div>
            <div className='alarm_sendSucces'>Sending successful!</div>
            <div className='alarm_sendError'>Something went wrong</div>
            <div className='alarm_loading'>
                <div className="loader">
                    <div className="loader-inner">
                        <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                        
                        </div>
                        <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SendSolanaBtn;