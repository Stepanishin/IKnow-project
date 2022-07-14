import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, get, child } from "firebase/database";
import './Card.css'
import Timer from '../../UI/Timer/Timer';
import SendSolanaBtn from '../../UI/SendSolanaBtn/SendSolanaBtn';
import TermsAndConditions from '../../UI/TermsAndConditions/TermsAndConditions';
import ReturnButton from '../../UI/ReturnButton/ReturnButton';
import { timerAndDisableBtnSlice } from '../../../store/reducers/getTimerAndDisablebtnReducer';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';



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
    SolForLess?: number,
    SolForMore?: number,
    judgePrice?: number,
    solForWhat?: string,
};

const Card: FC = () => {

    let [card, setCard] = useState<ICard | any>([])
    const params = useParams()
    const {isTimeToDisable} = useAppSelector(state => state.timerAndDisableBtnSlice)
    const {timerAndDisableBtn} = timerAndDisableBtnSlice.actions
    const dispatch = useAppDispatch()

    
    useEffect(() => {
        getCard()
        window.scroll(0,0);
        if (isTimeToDisable) {
            dispatch(timerAndDisableBtn())
        }
    }, [])

    const getCard = ( ) => {
        const dbRef = ref(getDatabase());
        let table:any = []
        get(child(dbRef, `/Judges/${params.name}`)).then((snapshot) => {
        if (snapshot.exists()) {
            let arr: any = snapshot.val()
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
            <ReturnButton />
            <img className='card_avatar' src={card.avatar} alt="" />
            <div className='card_description'>
                <h3 className='card_title'>{card.name}</h3>
                <p>Price: {card.price} sol</p>
                <p>Date of mint: {card.date}</p>
                <a rel='noreferrer' target="_blank" className='card_links' href={card.twitter}>Twitter</a> <br />
                <a rel='noreferrer' target="_blank" className='card_links' href={card.discord}>Discord</a>
                <p>Items: {card.quantity}</p>
            </div>
            {
                card.date
                ?   <Timer Timerclass={'card_timer'} DateToMint={card.date} />
                :   'Loading...'
            }
            {
                card.state === 'active'
                ?
                <TermsAndConditions />
                :
                <></>
            }
            {
                card.state === 'active'
                ?
                <div className='card_btn_wrap'>
                    <SendSolanaBtn 
                        borderPrice={card.borderPrice} 
                        judgePrice={card.judgePrice}
                        descr={'Floor will be more '} 
                        wallet={card.walletForMore} 
                        classN={'SendSolanaBtn_more'}  
                        descr2={'You can get ' + (((card.SolForLess * 0.8) + card.SolForMore + card.judgePrice) / ((card.SolForMore + card.judgePrice) / card.judgePrice)).toFixed(2)}
                        name={card.name}
                        SolForWhat={'SolForMore'}
                    />
                    <SendSolanaBtn 
                        borderPrice={card.borderPrice} 
                        judgePrice={card.judgePrice}
                        descr={'Floor will be less '} 
                        wallet={card.walletForLess} 
                        classN={'SendSolanaBtn_less'}
                        descr2={'You can get ' + ((card.SolForLess + (card.SolForMore * 0.8) + card.judgePrice) / ((card.SolForLess + card.judgePrice) / card.judgePrice)).toFixed(2)} 
                        name={card.name}
                        SolForWhat={'SolForLess'}
                    />
                </div> 
                :
                <div className='card_description'>
                    <p>Price after  1h  was : {card.judgeResult} </p>
                </div>
                
            }
        </div>
    );
};

export default Card;