import React, { FC } from 'react';
import './List.css'
import avatar from './img/img.gif'
import { Link } from 'react-router-dom';


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
                    <div className='card_info_wrap'>
                        <img src={avatar} alt="" width="100" height="100" />
                        <div>
                            <h3 className='card_title'>Project 1</h3>
                            <p>Price: 2 sol</p>
                            <p>Date of mint: 13.07.24 17-30 CET</p>
                        </div>
                        <div>
                            <Link className='card_links' to="#">Twitter</Link> <br />
                            <Link className='card_links' to="#">Discord</Link>
                            <p>Items: 666</p>
                        </div>
                    </div>
                    <div className='card_btn_wrap'>
                        <button>Price will be 1 sol - 2 sol</button>
                        <button>Price will be 0 sol - 1 sol</button>
                        <button>Price will be 2 sol - 4 sol</button>
                        <button>Price will be 4 or higher</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='card_info_wrap'>
                        <img src={avatar} alt="" width="100" height="100" />
                        <div>
                            <h3 className='card_title'>Project 1</h3>
                            <p>Price: 2 sol</p>
                            <p>Date of mint: 13.07.24 17-30 CET</p>
                        </div>
                        <div>
                            <Link className='card_links' to="#">Twitter</Link> <br />
                            <Link className='card_links' to="#">Discord</Link>
                            <p>Items: 666</p>
                        </div>
                    </div>
                    <div className='card_btn_wrap'>
                        <button>Price will be 1 sol - 2 sol</button>
                        <button>Price will be 0 sol - 1 sol</button>
                        <button>Price will be 2 sol - 4 sol</button>
                        <button>Price will be 4 or higher</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='card_info_wrap'>
                        <img src={avatar} alt="" width="100" height="100" />
                        <div>
                            <h3 className='card_title'>Project 1</h3>
                            <p>Price: 2 sol</p>
                            <p>Date of mint: 13.07.24 17-30 CET</p>
                        </div>
                        <div>
                            <Link className='card_links' to="#">Twitter</Link> <br />
                            <Link className='card_links' to="#">Discord</Link>
                            <p>Items: 666</p>
                        </div>
                    </div>
                    <div className='card_btn_wrap'>
                        <button>Price will be 1 sol - 2 sol</button>
                        <button>Price will be 0 sol - 1 sol</button>
                        <button>Price will be 2 sol - 4 sol</button>
                        <button>Price will be 4 or higher</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='card_info_wrap'>
                        <img src={avatar} alt="" width="100" height="100" />
                        <div>
                            <h3 className='card_title'>Project 1</h3>
                            <p>Price: 2 sol</p>
                            <p>Date of mint: 13.07.24 17-30 CET</p>
                        </div>
                        <div>
                            <Link className='card_links' to="#">Twitter</Link> <br />
                            <Link className='card_links' to="#">Discord</Link>
                            <p>Items: 666</p>
                        </div>
                    </div>
                    <div className='card_btn_wrap'>
                        <button>Price will be 1 sol - 2 sol</button>
                        <button>Price will be 0 sol - 1 sol</button>
                        <button>Price will be 2 sol - 4 sol</button>
                        <button>Price will be 4 or higher</button>
                    </div>
                </div>
            </div>
        </div>

    );
    
};


export default List;