import React, { FC, useEffect } from 'react';


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


interface Card {
    name?: string,
    price?: number,
    date?: string,
    quantity?: number,
    avatar?: any,
    twitter?: string,
    discord?: string,
    borderPrice?: number,
};

const data: Array<Card> = [
    {
        name: 'LazySoccer',
        price: 0.01,
        date: '24.6.2022',
        avatar: 'https://ltdfoto.ru/images/2022/06/23/img.gif',
        twitter: 'www.google.com',
        discord: 'www.yandex.ru',
        quantity: 666,
        borderPrice: 0.1,
    },
]


const List = () => {

    return (
        <div className='list'>
            <Splide aria-label="My Favorite Images"
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
                                <div className='card_timer'>
                                    00:00:00
                                </div>
                                <div className='card_btn_wrap'>
                                    <SendSolanaBtn borderPrice={card.borderPrice} descr={'Floor will be more '}  />
                                    <SendSolanaBtn borderPrice={card.borderPrice} descr={'Floor will be less '}  />
                                </div>
                            </SplideSlide>
                        )
                    })
                }
            
            </Splide>
        </div>
    );
    
};


export default List;