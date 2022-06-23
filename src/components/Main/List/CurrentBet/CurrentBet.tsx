import React, { FC } from 'react';
import './CurrentBet.css'

interface Card {
    name?: string,
    price?: number,
    date?: string,
    quantity?: number,
    avatar?: any,
    twitter?: string,
    discord?: string,
};

const data: Array<Card> = [
    {
        name: 'LazySoccer',
        price: 1,
        date: '24.6.2022',
        avatar: 'https://ltdfoto.ru/images/2022/06/23/img.gif',
        twitter: 'www.google.com',
        discord: 'www.yandex.ru',
        quantity: 666,
    },
    {
        name: 'ChokoLabs',
        price: 0.33,
        date: '27.6.2022',
        avatar: 'https://ltdfoto.ru/images/2022/06/23/img.gif',
        twitter: 'www.google.com',
        discord: 'www.yandex.ru',
        quantity: 666,
    },
    {
        name: 'BadBoys',
        price: 1.2,
        date: '15.7.2022',
        avatar: 'https://ltdfoto.ru/images/2022/06/23/img.gif',
        twitter: 'www.google.com',
        discord: 'www.yandex.ru',
        quantity: 666,
    },
]

const CurrentBet: FC = () => {
    return (
        <div className='list'>
            {/* <h2 className='List_title'>Current Judge</h2> */}
            <div className='List_wrap'>
                {
                    data.map(card => {
                        return (
                            <div className='card' key={card.name}>
                                {/* <div className='card_info_wrap'> */}
                                    <img className='card_avatar' src={card.avatar} alt="" />
                                    {/* <img src={require(card.avatar).default} alt="" width="100" height="100" />  */}
                                    <div className='card_description'>
                                        <h3 className='card_title'>{card.name}</h3>
                                        <p>Price: {card.price} sol</p>
                                        <p>Date of mint: {card.date}</p>
                                        <a className='card_links' href={card.twitter}>Twitter</a> <br />
                                        <a className='card_links' href={card.discord}>Discord</a>
                                        <p>Items: {card.quantity}</p>
                                    </div>
                                {/* </div> */}
                                <div className='card_btn_wrap'>
                                    <button>Price will be 1 sol - 2 sol</button>
                                    <button>Price will be 4 or higher</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CurrentBet;