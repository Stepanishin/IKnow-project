import React from 'react';
import { FC, ReactNode, useMemo, useCallback, useState } from 'react';
import './SendSolanaBtn.css'

import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { actions, utils, programs, NodeWallet, Connection} from '@metaplex/js';
import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { termsAndConditionsSlice } from '../../../store/reducers/getTermsAndConditionsReducer';

interface SendSolanaBtn_props {
    borderPrice?: number,
    descr?: string,
    wallet?: string,
}

let thelamports = 0;
// let theWallet = "8Dx6iP2qLMnaj8uWGLdVwhAhMV4DZ8PvFF6Uy4VCULH"

const SendSolanaBtn: FC<SendSolanaBtn_props> = ({borderPrice,descr,wallet}) => {

    const {isDisabled} = useAppSelector(state => state.termsAndConditionsSlice)
    const {termsAndConditions} = termsAndConditionsSlice.actions
    const dispatch = useAppDispatch()

    const alarmTerms = document.querySelector('.alarm_terms')!

    

    // let [lamports, setLamports] = useState(price);
    let lamports: any = borderPrice
    // let [wallet, setWallet] = useState("8Dx6iP2qLMnaj8uWGLdVwhAhMV4DZ8PvFF6Uy4VCULH");
    let theWallet:any= wallet

    const connection = new Connection(clusterApiUrl("mainnet-beta"))
    const { publicKey, sendTransaction } = useWallet();


    const onClick = useCallback( async () => {
        
        if (isDisabled) {
            console.log('dfa')
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
            console.log(bal/LAMPORTS_PER_SOL);
        });

        let lamportsI = LAMPORTS_PER_SOL*lamports;
        console.log(publicKey.toBase58());
        console.log("lamports sending: {}", thelamports)
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: new PublicKey(theWallet),
                lamports: lamportsI,
            })
        );

        const signature = await sendTransaction(transaction, connection);

        await connection.confirmTransaction(signature, 'processed');
    }, [publicKey, sendTransaction, connection]);

    
    

    return (
        <div className='SendSolanaBtn_container'>
            <button onClick={onClick} className='SendSolanaBtn' 
                // disabled={isDisabled}
            >
              {descr} {borderPrice} Sol
            </button>
            <div className='alarm_terms'>Accept terms and conditions!</div>
        </div>
    );
};

export default SendSolanaBtn;