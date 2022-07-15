import React, { FC, useEffect, useState } from 'react';
import './CourtList.css'
import { Link } from 'react-router-dom';
import { getDatabase, ref, get, child } from "firebase/database";

const CourtList: FC = () => {

    let [cards, setCards] = useState<any[]>([])

    useEffect(() => {
        window.scroll(0,0);
        getCards() 
    }, [])

    const getCards = ( ) => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, '/Judges')).then((snapshot) => {
        if (snapshot.exists()) {
            let arr: any = Object.entries(snapshot.val())
            setCards(Object.entries(Object.fromEntries(arr)))
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
    }   

    return (
        <div className='CourtList'>
            
                {
                    cards.map(card => {   
                        if (card[1].state === 'active') {
                        return (
                            <>
                                <h2 className='CourtList_container_title CourtList_container_title_active'>Active Judge</h2>
                                <div className='CourtList_cards'>
                                    <div className='CourtList_card' key={card[1].name}>
                                        <Link to={`/CourtList/${card[1].name}`} >
                                            <img className='CourtList_avatar' src={card[1].avatar} alt="" />
                                            <h3 className='CourtList_title'>{card[1].name}</h3>
                                            <p className='CourtList_title' >{card[1].borderPrice} Sol after 1h</p>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )
                        }
                    })
                }


            
                {
                    cards.map(card => {
                        if (card[1].state === 'wait') {
                        return (
                            <>
                                <h2 className='CourtList_container_title CourtList_container_title_wait'>Waiting for results </h2>
                                <div className='CourtList_cards'>
                                <div className='CourtList_card' key={card[1].name}>
                                    <Link to={`/CourtList/${card[1].name}`} >
                                        <img className='CourtList_avatar' src={card[1].avatar} alt="" />
                                        <h3 className='CourtList_title'>{card[1].name}</h3>
                                        <p className='CourtList_title' >{card[1].borderPrice} Sol after 1h</p>
                                    </Link>
                                </div>
                                </div>
                            </>
                        )
                        }
                    })
                }
            

            <h2 className='CourtList_container_title'>Past Judge</h2>
            <div className='CourtList_cards'>
                {
                    cards.map(card => {
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