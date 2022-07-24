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

    const widthLESS:string = (((data?.SolForLess! / (data?.SolForLess! + data?.SolForMore!)) * 200) + 'px')
    const LESS: string = (Math.round((data?.SolForLess! / (data?.SolForLess! + data?.SolForMore!)) * 100) + '%')
    const MORE: string = (Math.round(((data?.SolForMore! / (data?.SolForLess! + data?.SolForMore!)) * 100)) + '%')
    



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
                        {
                            data?.price
                            ?
                            <p>Price: {data?.price}</p>
                            :
                            <></>
                        }
                        <p>Date: {data?.date}</p>
                        {
                            data?.twitter
                            ?
                            <a rel='noreferrer' target="_blank" className='card_links' href={data?.twitter}>Twitter</a>
                            :
                            <></>
                        }
                        <br />
                        {
                            data?.discord
                            ?
                            <a rel='noreferrer' target="_blank" className='card_links' href={data?.discord}>Discord</a>
                            :
                            <></>
                        }
                        {
                            data?.quantity
                            ?
                            <p>Items: {data?.quantity}</p>
                            :
                            <></>
                        }

                    <p style={{color: '#00FFFF'}} >100% of our commissions will be shared among NFT Rektville holders</p>
                    </div>
                    {
                        data?.dateToShot
                        ?   <Timer Timerclass={'card_timer'} dateToShot={data?.dateToShot} />
                        :   <></>
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
                                judgePrice={data?.judgePrice}
                                cardDescrMore={data?.cardDescrMore} 
                                wallet={data?.walletForMore} 
                                classN={'SendSolanaBtn_more'}  
                                descr2={'You can get ' + (((data?.SolForLess! * 0.8) + data?.SolForMore! + data?.judgePrice!) / ((data?.SolForMore! + data?.judgePrice!) / data?.judgePrice!)).toFixed(2)}
                                name={data?.name}
                                SolForWhat={'SolForMore'}
                            />
                            <SendSolanaBtn 
                                judgePrice={data?.judgePrice}
                                cardDescrLess={data?.cardDescrLess} 
                                wallet={data?.walletForLess} 
                                classN={'SendSolanaBtn_less'}
                                descr2={'You can get ' + ((data?.SolForLess! + (data?.SolForMore! * 0.8) + data?.judgePrice!) / ((data?.SolForLess! + data?.judgePrice!) / data?.judgePrice!)).toFixed(2)} 
                                name={data?.name}
                                SolForWhat={'SolForLess'}
                            />
                        </div> 
                        :
                        <div className='card_description'>
                            <p>{data?.judgeResult} </p>
                        </div>
                        
                    }
                    
                    {
                        data?.state === 'active'
                        ?
                        <div className='MoreLess_container'>
                            <div className='MORE' ></div>
                            <div className='LESS' style={{width: widthLESS}} >{LESS}</div>
                        </div>
                        :
                        <></>
                    }
                    
                </React.Fragment>
        }
        </div>
    );
};

export default Card;