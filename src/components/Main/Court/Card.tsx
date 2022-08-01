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
import ShareTwitterBtn from '../../UI/ShareTwitterBtn/ShareTwitterBtn';



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
                    {
                            data?.website
                            ?
                            <div className='card_title_container'>
                                <a rel='noreferrer' target="_blank" className='card_title_link' href={data?.website}>{data?.name}</a>
                            </div>
                            :
                            <h3 className='card_title'>{data?.name}</h3>
                        }
                    <div className='card_description'>                       
                        {
                            data?.price
                            ?
                            <p>Price: {data?.price}</p>
                            :
                            <></>
                        }
                        <p>Date of snapshot: {data?.date}</p>
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
                        {
                            data?.eventDescr
                            ?
                            <p className='card_description_eventDescr' >{data?.eventDescr}</p>
                            :
                            <></>
                        }

                    <p style={{color: '#00FFFF'}} >100% of our fees will be shared among the Rektville NFT holders.</p>
                    {/* </div> */}
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
                    </div>
                    {
                        data?.state === 'active'
                        ?
                        <div className='card_btn_wrap'>
                            <SendSolanaBtn 
                                judgePrice={data?.judgePrice}
                                cardDescrMore={data?.cardDescrMore} 
                                wallet={data?.walletForMore} 
                                classN={'SendSolanaBtn_more'}  
                                name={data?.name}
                                SolForWhat={'SolForMore'}
                                SolForLess ={data?.SolForLess}
                                SolForMore = {data?.SolForMore}
                            />
                            <SendSolanaBtn 
                                judgePrice={data?.judgePrice}
                                cardDescrLess={data?.cardDescrLess} 
                                wallet={data?.walletForLess} 
                                classN={'SendSolanaBtn_less'}
                                name={data?.name}
                                SolForWhat={'SolForLess'}
                                SolForLess ={data?.SolForLess}
                                SolForMore = {data?.SolForMore}
                            />
                        </div> 
                        :
                        <div className='card_description_judgeResult'>
                            <p>{data?.judgeResult} </p>
                        </div>
                        
                    }
                    
                    <div className='MoreLess_container'>
                        <div className='MORE' ></div>
                        <div className='LESS' style={{width: widthLESS}} >{LESS}</div>
                    </div>
                    
                    <div className='card_description_judgeResult'>
                    <p><ShareTwitterBtn name={data?.name} /></p>
                    </div>
                    
                    
                </React.Fragment>
        }
        </div>
    );
};

export default Card;