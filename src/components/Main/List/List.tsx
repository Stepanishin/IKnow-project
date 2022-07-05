import React, { FC, useEffect, useState } from 'react';
import './List.css'
import SendSolanaBtn from '../../UI/SendSolanaBtn/SendSolanaBtn';
import Timer from '../../UI/Timer/Timer';
import { Link } from 'react-router-dom';
import { getDatabase, ref, get, child } from "firebase/database";


interface Card {
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

const List: FC = () => {

    let [cards, setCards] = useState<any[]>([])

    useEffect(() => {
        window.scroll(0,0);
        getCards() 
    }, [])

    const getCards = ( ) => {
        const dbRef = ref(getDatabase());
        let table:any = []
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
        <div className='list'>
            <h2 className='List_container_title'>Active Judge</h2>

            <div className='List_cards'>
                {
                    cards.map(card => {
                        if (card[1].state === 'active') {
                        return (
                            <div className='list_card' key={card[1].name}>
                                <Link to={`/List/${card[1].name}`} >
                                    <img className='list_avatar' src={card[1].avatar} alt="" />
                                    <h3 className='list_title'>{card[1].name}</h3>
                                </Link>
                            </div>
                        )
                        }
                    })
                }
            </div>



            <h2 className='List_container_title'>Past Judge</h2>
            <div className='List_cards'>
                {
                    cards.map(card => {
                        if (card[1].state === 'past') {
                        return (
                            <div className='list_card' key={card[1].name}>
                                <Link to={`/List/${card[1].name}`} >
                                    <img className='list_avatar' src={card[1].avatar} alt="" />
                                    <h3 className='list_title'>{card[1].name}</h3>
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


export default List;