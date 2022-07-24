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

let thelamports = 0;
// let theWallet = "8Dx6iP2qLMnaj8uWGLdVwhAhMV4DZ8PvFF6Uy4VCULH"

const SendSolanaBtn: FC<ISendSolanaBtnProps> = ({cardDescrMore, cardDescrLess,wallet,classN,name,SolForWhat}) => {

    let alarmTerms: any
    let alarm_sendSucces : any
    useEffect(() => {
        alarmTerms = document.querySelector('.alarm_terms')!
    }, [])

    const db = getDatabase();
    const {isDisabled} = useAppSelector(state => state.termsAndConditionsSlice)
    const {termsAndConditions} = termsAndConditionsSlice.actions
    const {isTimeToDisable} = useAppSelector(state => state.timerAndDisableBtnSlice)
    const {timerAndDisableBtn} = timerAndDisableBtnSlice.actions
    const dispatch = useAppDispatch()


    // let [lamports, setLamports] = useState(price);
    // let lamports: any = judgePrice
    // let [wallet, setWallet] = useState("8Dx6iP2qLMnaj8uWGLdVwhAhMV4DZ8PvFF6Uy4VCULH");
    let theWallet:any= wallet

    const connection = new Connection(clusterApiUrl("mainnet-beta"))
    const { publicKey, sendTransaction } = useWallet();


    const onClick = useCallback( async (e:any) => {

        let judgePrice:number = +(e.target.value)
        
        alarmTerms = document.querySelector('.alarm_terms')!
        alarm_sendSucces = document.querySelector('.alarm_sendSucces')!

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
                    get(child(dbRef,  `/Judges/${name}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        let arr = snapshot.val()

                        const updates:any = {};

                        let solQuantity:any = 0;
                        if (SolForWhat === 'SolForMore') {
                            solQuantity = arr.SolForMore
                        } else if (SolForWhat === 'SolForLess') {
                            solQuantity = arr.SolForLess
                        }

                        updates[`/Judges/${name}` + `/${SolForWhat}/`] = judgePrice + solQuantity;
        
                        get(child(dbRef,  `/Judges/${name}/wallets/${SolForWhat}`)).then((snapshot) => {
                            if (snapshot.exists()) {
                                let userWallet = publicKey.toBase58()
                                let arr = snapshot.val()
                                if (arr.hasOwnProperty(`${userWallet}`)) {
                                    let currentBet = arr[userWallet].bet
                                    updates[`/Judges/${name}/wallets/${SolForWhat}/${userWallet}/bet/`] = currentBet + judgePrice
                                    return update(ref(db), updates);
                                } else {
                                    set(ref(db, `/Judges/${name}/wallets/${SolForWhat}/${userWallet}`), {
                                        'userWallet': userWallet,
                                        'bet': judgePrice,
                                    });
                                }
                            }
                        }).catch((error) => {
                            console.error(error);
                        });
                        

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
    }, [publicKey, sendTransaction, connection]);

    
    

    return (
        <div className='SendSolanaBtn_container'>
            {/* <button onClick={onClick} className={classN}>
              {cardDescrLess} {cardDescrMore} <br />
              <span className='SendSolanaBtn_info' >You send {judgePrice} Sol. {descr2} Sol</span>
            </button> */}

            <div className={classN} >
                <p style={{color: 'black', textAlign:'center'}} >{cardDescrLess} {cardDescrMore}</p>  <br />
                <div className='btnDEMO_container' >
                    <button value={0.1}  onClick={onClick} className='btnDEMO'>
                        0.1 Sol
                    </button>
                    <button value={0.3}  onClick={onClick} className='btnDEMO'>
                        0.3 Sol
                    </button>
                    <button value={0.5}  onClick={onClick} className='btnDEMO'>
                        0.5 Sol
                    </button>
                    <button value={1}  onClick={onClick} className='btnDEMO'>
                        1 Sol
                    </button>
                </div>               
            </div>


            <div className='alarm_terms'>Accept terms and conditions!</div>
            <div className='alarm_sendSucces'>Sending successful!</div>
        </div>
    );
};

export default SendSolanaBtn;