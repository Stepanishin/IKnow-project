import React, { FC, useEffect } from 'react';
import './CourtList.css'
import { Link } from 'react-router-dom';
import { useGetJudgesQuery } from '../../../store/reducers/firebase.api';
import Spinner from '../../UI/Spinner/Spinner';
import ShareTwitterBtn from '../../UI/ShareTwitterBtn/ShareTwitterBtn';

const CourtList: FC = () => {

    const { isLoading, data} = useGetJudgesQuery('')

    useEffect(() => {
        window.scroll(0,0); 
    }, [])

    return (
        <div className='CourtList'>
            <h2 className='CourtList_container_title'>100% of our fees will be shared among the Rektville NFT holders.</h2>
            <h2 className='CourtList_container_title CourtList_container_title_active'>Active Judge</h2>
            <div className='CourtList_cards'>
                {   
                    isLoading
                    ?
                    <Spinner />
                    :
                    data?.map(( card : any) => {   
                        if (card[1].state === 'active' || card[1].state === 'test') {
                        return (
                                    <div className='CourtList_card' key={card[1].name} >
                                        <Link to={`/CourtList/${card[1].name}`} >
                                            <img className='CourtList_avatar' src={card[1].avatar} alt="" />
                                            <h3 className='CourtList_title'>{card[1].name}</h3>
                                            <p className='CourtList_descr' >{card[1].cardDescr}</p>
                                        </Link>
                                    </div>
                        )
                        }
                    })
                }
                </div> 

                {
                    data && data?.filter(card => card[1].state === 'wait').length > 0
                    ?
                    <h2 className='CourtList_container_title CourtList_container_title_wait'>Waiting for results </h2>
                    :
                    <></>
                }
                <div className='CourtList_cards'>
                {   
                    isLoading
                    ?
                    <Spinner />
                    :
                    data?.map(( card : any) => {
                        if (card[1].state === 'wait') {
                        return (
                                <div className='CourtList_card' key={card[1].name}>
                                    <Link to={`/CourtList/${card[1].name}`} >
                                        <img className='CourtList_avatar' src={card[1].avatar} alt="" />
                                        <h3 className='CourtList_title'>{card[1].name}</h3>
                                        <p className='CourtList_title' >{card[1].cardDescr}</p>
                                    </Link>
                                </div>        
                        )
                        }
                    })
                }
            </div>
            

            <h2 className='CourtList_container_title CourtList_container_title_past'>Past Judge</h2>
            <div className='CourtList_cards'>
                {   
                    isLoading
                    ?
                    <Spinner />
                    :
                    data?.map(( card : any) => {
                        if (card[1].state === 'past') {
                        return (
                            <div className='CourtList_card' key={card[1].name}>
                                <Link to={`/CourtList/${card[1].name}`} >
                                    <img className='CourtList_avatar' src={card[1].avatar} alt="" />
                                    <h3 className='CourtList_title'>{card[1].name}</h3>
                                    <p className='CourtList_title' >{card[1].cardDescr}</p>
                                </Link>
                            </div>
                        )
                        }
                    })
                }
            </div>





        </div>
    );
    
};


export default CourtList;