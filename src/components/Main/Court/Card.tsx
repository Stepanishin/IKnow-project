import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Card.css'
import Timer from '../../UI/Timer/Timer';
import SendSolanaBtn from '../../UI/SendSolanaBtn/SendSolanaBtn';
import TermsAndConditions from '../../UI/TermsAndConditions/TermsAndConditions';
import ReturnButton from '../../UI/ReturnButton/ReturnButton';
import { timerAndDisableBtnSlice } from '../../../store/reducers/getTimerAndDisablebtnReducer';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { ICard } from '../../../types/ICard';
import { useGetJudgeQuery } from '../../../store/reducers/firebase.api';
import Spinner from '../../UI/Spinner/Spinner';


const Card: FC = () => {

    const params = useParams()
    const {isTimeToDisable} = useAppSelector(state => state.timerAndDisableBtnSlice)
    const {timerAndDisableBtn} = timerAndDisableBtnSlice.actions
    const dispatch = useAppDispatch()
    const { isLoading, data } = useGetJudgeQuery(params, {
        refetchOnFocus: true,
    })
    
    useEffect(() => {
        window.scroll(0,0);
        if (isTimeToDisable) {
            dispatch(timerAndDisableBtn())
        }
    }, [])

    return (
        <div className='card'>
            {
                isLoading
                ?
                <Spinner />
                :
                <React.Fragment>
                    <ReturnButton />
                    <img className='card_avatar' src={data?.avatar} alt="" />
                    <div className='card_description'>
                        <h3 className='card_title'>{data?.name}</h3>
                        <p>Price: {data?.price} sol</p>
                        <p>Date of mint: {data?.date}</p>
                        <a rel='noreferrer' target="_blank" className='card_links' href={data?.twitter}>Twitter</a> <br />
                        <a rel='noreferrer' target="_blank" className='card_links' href={data?.discord}>Discord</a>
                        <p>Items: {data?.quantity}</p>
                    </div>
                    {
                        data?.date
                        ?   <Timer Timerclass={'card_timer'} DateToMint={data?.date} />
                        :   'Loading...'
                    }
                    {
                        data?.state === 'active'
                        ?
                        <TermsAndConditions />
                        :
                        <></>
                    }
                    {
                        data?.state === 'active'
                        ?
                        <div className='card_btn_wrap'>
                            <SendSolanaBtn 
                                borderPrice={data?.borderPrice} 
                                judgePrice={data?.judgePrice}
                                descr={'Floor will be more '} 
                                wallet={data?.walletForMore} 
                                classN={'SendSolanaBtn_more'}  
                                descr2={'You can get ' + (((data?.SolForLess! * 0.8) + data?.SolForMore! + data?.judgePrice!) / ((data?.SolForMore! + data?.judgePrice!) / data?.judgePrice!)).toFixed(2)}
                                name={data?.name}
                                SolForWhat={'SolForMore'}
                            />
                            <SendSolanaBtn 
                                borderPrice={data?.borderPrice} 
                                judgePrice={data?.judgePrice}
                                descr={'Floor will be less '} 
                                wallet={data?.walletForLess} 
                                classN={'SendSolanaBtn_less'}
                                descr2={'You can get ' + ((data?.SolForLess! + (data?.SolForMore! * 0.8) + data?.judgePrice!) / ((data?.SolForLess! + data?.judgePrice!) / data?.judgePrice!)).toFixed(2)} 
                                name={data?.name}
                                SolForWhat={'SolForLess'}
                            />
                        </div> 
                        :
                        <div className='card_description'>
                            <p>Price after  1h  was : {data?.judgeResult} </p>
                        </div>
                        
                    }
                </React.Fragment>
        }
        </div>
    );
};

export default Card;