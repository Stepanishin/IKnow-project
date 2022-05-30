import React, { FC, useEffect, useState } from 'react';
import './List.css'

const List: FC = () => {

    const [collections, setCollections] = useState<any[]>([])

    useEffect(() => {
        getTokens()
    }, [])

    async function getTokens() {

        const url = "https://api-mainnet.magiceden.dev/v2/launchpad/collections?offset=0&limit=499"

        let requestOptions: RequestInit = {
            method: 'GET',
            redirect: 'follow',
            // credentials: "include",
            
            // mode: 'no-cors',
            // headers : { 
                // 'Content-Type': 'text/plain',
                // "content-type": 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Accept': 'application/json',
            //    }
          };
          
        await fetch(url, requestOptions)
            // .then((response) => {
            //     const result = response.json();
            //     return result
            // })
            // .then((data) => {
            //     let results = []
            //     let date = new Date().toDateString();
            //     for (let i = 0; i < data.length; i++) {
            //         if (Date.parse(data[i].launchDatetime) > Date.parse(date))  {
            //             results.push(data[i])
            //         }
            //     }
            //     const sortedResults = results.sort((a, b) => Date.parse(a.launchDatetime) - Date.parse(b.launchDatetime) )
            //     setCollections(sortedResults)
            // })
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result))
                let data = JSON.parse(result)
                let results = []
                let date = new Date().toDateString();
                for (let i = 0; i < data.length; i++) {
                    if (Date.parse(data[i].launchDatetime) > Date.parse(date))  {
                        results.push(data[i])
                    }
                }
                const sortedResults = results.sort((a, b) => Date.parse(a.launchDatetime) - Date.parse(b.launchDatetime) )
                setCollections(sortedResults)
            })
            .catch(error => console.log('error', error));
    }

    

    return (
        <div className='list'>
            <div className='list_card_container'>
            {
                collections.map(item => {
                    return (
                        <div key={item.name} className='list_card' >
                            <h2>{item.name}</h2>
                            <p>Data: {item.launchDatetime}</p>
                            <p>Price: {item.price} Sol</p>
                            <p>{item.description}</p>
                            <p>{item.twitter}</p>
                            <img src={item.image} alt="" width="50" height="50" />
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default List;