import React, { FC, useEffect } from 'react';
import './CourtList.css'
import { Link } from 'react-router-dom';
import { getDatabase, ref, get, child } from "firebase/database";
import { useGetJudgesQuery } from '../../../store/reducers/firebase.api';

const CourtList: FC = () => {

    const {isError, isLoading, data} = useGetJudgesQuery('')

    useEffect(() => {
        window.scroll(0,0); 
    }, [])

    return (
        <div className='CourtList'>
            
                {   
                    // data.length > 0
                    // ?
                    data?.map(( card : any) => {   
                        if (card[1].state === 'active') {
                        return (
                            <React.Fragment key={card[1].name}>
                                <h2 className='CourtList_container_title CourtList_container_title_active'>Active Judge</h2>
                                <div className='CourtList_cards'>
                                    <div className='CourtList_card'>
                                        <Link to={`/CourtList/${card[1].name}`} >
                                            <img className='CourtList_avatar' src={card[1].avatar} alt="" />
                                            <h3 className='CourtList_title'>{card[1].name}</h3>
                                            <p className='CourtList_title' >{card[1].borderPrice} Sol after 1h</p>
                                        </Link>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                        }
                    })
                    // : <></>
                } 


            
                {
                    data?.map(( card : any) => {
                        if (card[1].state === 'wait') {
                        return (
                            <React.Fragment key={card[1].name}>
                                <h2 key={card[1].name} className='CourtList_container_title CourtList_container_title_wait'>Waiting for results </h2>
                                <div className='CourtList_cards'>
                                <div className='CourtList_card'>
                                    <Link to={`/CourtList/${card[1].name}`} >
                                        <img className='CourtList_avatar' src={card[1].avatar} alt="" />
                                        <h3 className='CourtList_title'>{card[1].name}</h3>
                                        <p className='CourtList_title' >{card[1].borderPrice} Sol after 1h</p>
                                    </Link>
                                </div>
                                </div>
                            </React.Fragment>
                        )
                        }
                    })
                }
            

            <h2 className='CourtList_container_title'>Past Judge</h2>
            <div className='CourtList_cards'>
                {
                    data?.map(( card : any) => {
                        if (card[1].state === 'past') {
                        return (
                            <div className='CourtList_card' key={card[1].name}>
                                <Link to={`/CourtList/${card[1].name}`} >
                                    <img className='CourtList_avatar' src={card[1].avatar} alt="" />
                                    <h3 className='CourtList_title'>{card[1].name}</h3>
                                    <p className='CourtList_title' >{card[1].borderPrice} Sol after 1h</p>
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