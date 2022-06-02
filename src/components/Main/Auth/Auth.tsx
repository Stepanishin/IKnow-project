import React from 'react';
import './Auth.css'

const Auth = () => {

    const connectWallet = async () => {
        const { solana } = (window as any);

        if (solana) {
          try {
            const response = await solana.connect();
            localStorage.setItem('WalletKey', response.publicKey.toString())
            console.log(localStorage.getItem('WalletKey'))
          } catch (err) {
           // { code: 4001, message: 'User rejected the request.' }
          }
        }     
    };

    return (
        <div className='auth'>
            <button onClick={connectWallet} >Join solana</button>
        </div>
    );
};

export default Auth;