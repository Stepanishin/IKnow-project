import React, { FC } from 'react';
import './List.css'


const List:FC = () => {

    // const [collections, setCollections] = useState<any[]>([])

    // useEffect(() => {
    //     getTokens()
    // }, [])

    // async function getTokens() {

    //     const url = "https://api-mainnet.magiceden.dev/v2/launchpad/collections?offset=0&limit=499"

    //     let requestOptions: any= {
    //         method: 'GET',
    //         redirect: 'follow',

    //       };
          
    //     await fetch(url, requestOptions)
    //         .then(response => response.text())
    //         .then(result => {
    //             console.log(JSON.parse(result))
    //             let data = JSON.parse(result)
    //             let results = []
    //             let date = new Date().toDateString();
    //             for (let i = 0; i < data.length; i++) {
    //                 if (Date.parse(data[i].launchDatetime) > Date.parse(date))  {
    //                     results.push(data[i])
    //                 }
    //             }
    //             const sortedResults = results.sort((a, b) => Date.parse(a.launchDatetime) - Date.parse(b.launchDatetime) )
    //             setCollections(sortedResults)
    //         })
    //         .catch(error => console.log('error', error));
    // }

  

    return (
        <div className='list'>
            <div className='List_wrap'>
                <div className='card'>
                    
                </div>
            </div>
        </div>

    );
    
};


export default List;