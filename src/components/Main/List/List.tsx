import React, { FC, useEffect, useState } from 'react';
import './List.css'

const List: FC = () => {

    const [collections, setCollections] = useState<any[]>([])

    useEffect(() => {
        getTokens()
    }, [])

    async function getTokens() {

        let url =  "https://api-mainnet.magiceden.dev/v2/collections?offset=0&limit=10"
        // let url = "https://api-devnet.magiceden.dev/v2/collections?offset=0&limit=200"
        // let url = "https://api-mainnet.magiceden.dev/v2/collections/:symbol/listings?offset=0&limit=20"
        // let url = "https://api-mainnet.magiceden.dev/v2/collections/:symbol/activities?offset=0&limit=100"

        let requestOptions: RequestInit = {
            method: 'GET',
            redirect: 'follow',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
          };
          
        await fetch(url,  requestOptions)
            .then((response) => {
                const result = response.json();
                return result
            })
            .then((data) => {
                // console.log(data)
                setCollections(data)
            })
            // .then(response => response.text())
            // .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    

    return (
        <div className='list'>
            Lists
            <button onClick={getTokens}>GET</button>
            {
                collections.map(item => {
                    return (
                        <div key={item.name} >
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>{item.twitter}</p>
                            <img src={item.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default List;