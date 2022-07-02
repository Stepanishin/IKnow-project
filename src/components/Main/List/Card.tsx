import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, get, child } from "firebase/database";
import './Card.css'
import Timer from '../../UI/Timer/Timer';
import SendSolanaBtn from '../../UI/SendSolanaBtn/SendSolanaBtn';
import TermsAndConditions from '../../UI/TermsAndConditions/TermsAndConditions';

interface ICard {
    name?: string,
    price?: number,
    date?: string,
    quantity?: number,
    avatar?: string,
    twitter?: string,
    discord?: string,
    borderPrice?: number,
    walletForMore?: string,
    walletForLess?: string,
    state?: string,
};

const Card: FC = () => {

    let [card, setCard] = useState<ICard | any>([])
    const params = useParams()
    console.log(params)

    useEffect(() => {
        getCard()
    }, [])

    const getCard = ( ) => {
        const dbRef = ref(getDatabase());
        let table:any = []
        get(child(dbRef, `/Judges/${params.name}`)).then((snapshot) => {
        if (snapshot.exists()) {
            let arr: any = snapshot.val()
            console.log(arr)
            setCard(arr)
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
    }

    

    return (
        <div className='card'>
            <img className='card_avatar' src={card.avatar} alt="" />
            <div className='card_description'>
                <h3 className='card_title'>{card.name}</h3>
                <p>Price: {card.price} sol</p>
                <p>Date of mint: {card.date}</p>
                <a className='card_links' href={card.twitter}>Twitter</a> <br />
                <a className='card_links' href={card.discord}>Discord</a>
                <p>Items: {card.quantity}</p>
            </div>
            {
                card.date
                ?   <Timer Timerclass={'card_timer'} DateToMint={card.date} />
                :   'Loading...'
            }
            {/* <Timer Timerclass={'card_timer'} DateToMint={card.date} /> */}
            {/* <input type="checkbox" name="conditions" id="conditions">I accept Terms & conditions</input> */}

            <TermsAndConditions />

            <div className='card_btn_wrap'>
                <SendSolanaBtn borderPrice={card.borderPrice} descr={'Floor will be more '} wallet={card.walletForMore}  />
                <SendSolanaBtn borderPrice={card.borderPrice} descr={'Floor will be less '} wallet={card.walletForLess} />
            </div>     
        </div>
    );
};

export default Card;