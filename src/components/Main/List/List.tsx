import React, { FC, useEffect, useState } from 'react';


// import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

// or only core styles
// import '@splidejs/react-splide/css/core';
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

// const data: Array<Card> = [
//     {
//         name: 'LazySoccer',
//         price: 0.01,
//         date: '24.6.2022',
//         avatar: 'https://i.ibb.co/TbKTXGd/img.gif',
//         twitter: 'www.google.com',
//         discord: 'www.yandex.ru',
//         quantity: 666,
//         borderPrice: 0.1,
//         walletForMore: '8Dx6iP2qLMnaj8uWGLdVwhAhMV4DZ8PvFF6Uy4VCULH',
//         walletForLess: 'A8grZ1aaL9Hm8sC7mtVyiAqdkFf4mB63aBpfq2WR9drt',
//         state: 'active',
//     },
// ]


const List: FC = () => {

    let [cards, setCards] = useState<any[]>([])

    useEffect(() => {
        getCards()
    }, [])

    const getCards = ( ) => {
        const dbRef = ref(getDatabase());
        let table:any = []
        get(child(dbRef, '/Judges')).then((snapshot) => {
        if (snapshot.exists()) {
            let arr: any = Object.entries(snapshot.val())
            console.log(arr)
            // for (let i = 0; i < arr.length; i++) {
            //     if (arr[i][1].DinoRecords) {
            //         table.push(arr[i])
            //     }
            // }
            setCards(Object.entries(Object.fromEntries(arr)))
            // setCards(arr)
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




            {/* <Splide aria-label="My Favorite Images"
                options={ {
                    wheel: true,
                    rewind: true,
                    start:0,
                    speed: 1000,
                  } }
            >
            {
                    data.map(card => {
                        return (
                            <SplideSlide className='card' key={card.name}>
                                    <img className='card_avatar' src={card.avatar} alt="" />
                                    <div className='card_description'>
                                        <h3 className='card_title'>{card.name}</h3>
                                        <p>Price: {card.price} sol</p>
                                        <p>Date of mint: {card.date}</p>
                                        <a className='card_links' href={card.twitter}>Twitter</a> <br />
                                        <a className='card_links' href={card.discord}>Discord</a>
                                        <p>Items: {card.quantity}</p>
                                    </div>
                                <Timer Timerclass={'card_timer'} />
                                <div className='card_btn_wrap'>
                                    <SendSolanaBtn borderPrice={card.borderPrice} descr={'Floor will be more '} wallet={card.walletForMore}  />
                                    <SendSolanaBtn borderPrice={card.borderPrice} descr={'Floor will be less '} wallet={card.walletForLess} />
                                </div>
                            </SplideSlide>
                        )
                    })
                }
            
            </Splide> */}
        </div>
    );
    
};


export default List;