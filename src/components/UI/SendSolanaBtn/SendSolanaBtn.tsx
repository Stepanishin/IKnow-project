import React from 'react';
import { FC, ReactNode, useMemo, useCallback, useState } from 'react';
import './SendSolanaBtn.css'

import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { actions, utils, programs, NodeWallet, Connection} from '@metaplex/js';
import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';

interface SendSolanaBtn_props {
    borderPrice?: number,
    descr?: string
}

let thelamports = 0;
let theWallet = "8Dx6iP2qLMnaj8uWGLdVwhAhMV4DZ8PvFF6Uy4VCULH"

const SendSolanaBtn: FC<SendSolanaBtn_props> = ({borderPrice,descr}) => {

    // let [lamports, setLamports] = useState(price);
    let lamports: any = borderPrice
    let [wallet, setWallet] = useState("8Dx6iP2qLMnaj8uWGLdVwhAhMV4DZ8PvFF6Uy4VCULH");

    const connection = new Connection(clusterApiUrl("mainnet-beta"))
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback( async () => {

        if (!publicKey) throw new WalletNotConnectedError();
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
            <button onClick={onClick} className='SendSolanaBtn'>
              {descr} {borderPrice} Sol
            </button>
        </div>
    );
};

export default SendSolanaBtn;