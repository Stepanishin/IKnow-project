import React, { FC, useEffect, useState } from 'react';
import './CourtList.css'
import { Link } from 'react-router-dom';
import { useGetJudgesQuery, useGetUsersQuery } from '../../../store/reducers/firebase.api';
import Spinner from '../../UI/Spinner/Spinner';
import ShareTwitterBtn from '../../UI/ShareTwitterBtn/ShareTwitterBtn';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useWallet } from '@solana/wallet-adapter-react';
import { adminAccessSlice } from '../../../store/reducers/getAdminAccess';
import { child, get, getDatabase, ref, update } from 'firebase/database';
import { ICard } from '../../../types/ICard';


const CourtList: FC = () => {

    const { isLoading, data} = useGetJudgesQuery('')
    
    const { publicKey, sendTransaction } = useWallet();
    const { isLoading : userIsLoading , data : userData } = useGetUsersQuery('')
    const {isAdmin} = useAppSelector(state => state.adminAccessSlice)
    const {adminAccess} = adminAccessSlice.actions
    const dispatch = useAppDispatch()

    const [result, setResult] = useState('')

    const dataPast = data?.filter((el) => el[1].state === 'past').sort(((a: any,b: any) => a[1].id > b[1].id ? -1 : a[1].id < b[1].id ? 1 : 0))

    useEffect(() => {
        try {
            if (publicKey ) {
                let userWallet = publicKey?.toBase58()!
                if (userData[userWallet] && userData[userWallet].status != undefined && userData[userWallet].status === 'admin') {
                    dispatch(adminAccess())
                }
            }
        } catch (error) {
            console.log(error)
        }
    }, [userIsLoading])
    

    useEffect(() => {
        window.scroll(0,0); 
    }, [])

    const db = getDatabase();
    const updateDb = (url:string, state: string, name?: string) => {
                const dbRef = ref(getDatabase());
                        get(child(dbRef,  `/Judges/${name}`)).then((snapshot) => {
                        if (snapshot.exists()) {

                            let arr = snapshot.val()
                            const updates:any = {};
                            updates[url] = state;
                            return update(ref(db), updates);
        
                        } else {
                            console.log("No data available");
                        }
                        }).catch((error) => {
                        console.error(error);
                        });
    }          

    const getDeleteCard = (e: any) => {
        updateDb(`/Judges/${e.target.name}/state/`, 'delete', e.target.name)
        setTimeout(function(){
            window.location.reload();
        }, 1000);
    }
    const getWaitCard = (e: any) => {
        updateDb(`/Judges/${e.target.name}/state/`, 'wait',e.target.name)
        setTimeout(function(){
            window.location.reload();
        }, 1000);
    }
    const getPastCard = (e: any) => {
        updateDb(`/Judges/${e.target.name}/state/`, 'past',e.target.name)
        setTimeout(function(){
            window.location.reload();
        }, 1000);
    }
    const getActiveCard = (e: any) => {
        updateDb(`/Judges/${e.target.name}/state/`, 'active',e.target.name)
        setTimeout(function(){
            window.location.reload();
        }, 1000);
    }

    const setResultToDBMore = (e: any) => {
        updateDb(`/Judges/${e.target.name}/judgeResult/`, result, e.target.name)
        updateDb(`/Judges/${e.target.name}/result/`, 'more', e.target.name)
        setTimeout(function(){
            window.location.reload();
        }, 1000);
    }

    const setResultToDBLess = (e: any) => {
        updateDb(`/Judges/${e.target.name}/judgeResult/`, result, e.target.name)
        updateDb(`/Judges/${e.target.name}/result/`, 'less', e.target.name)
        setTimeout(function(){
            window.location.reload();
        }, 1000);
    }

    return (
        <div className='CourtList'>
            <h2 className='CourtList_container_title'>100% of our fees will be shared among the Rektville NFT holders.</h2>

            {
                isAdmin
                ?
                <>
                <h2 className='CourtList_container_title CourtList_container_title_active'>Test Judge, only Admins can watch it</h2>
                <div className='CourtList_cards'>
                {   
                    isLoading
                    ?
                    <Spinner />
                    :
                    data?.map(( card : any) => {   
                        if (card[1].state === 'test') {
                        return (
                                    <div className='CourtList_card' key={card[1].name + card[1].id} >
                                        <Link to={`/CourtList/${card[1].name + card[1].id}`} >
                                            <img className='CourtList_avatar' src={card[1].avatar} alt="" />
                                            <h3 className='CourtList_title'>{card[1].name}</h3>
                                            <p className='CourtList_descr' >{card[1].cardDescr}</p>
                                        </Link>
                                        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                                            <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getDeleteCard}>Delete</button>
                                            <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getWaitCard}>Waiting result</button>
                                            <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getPastCard}>Past</button>
                                            <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getActiveCard}>Active</button>
                                        </div>
                                    </div>
                        )
                        }
                    })
                }
                </div> 
                </>
                :
                <></>

            }


            <h2 className='CourtList_container_title CourtList_container_title_active'>Active Judge</h2>
            <div className='CourtList_cards'>
                {   
                    isLoading
                    ?
                    <Spinner />
                    :
                    data?.map(( card : any) => {   
                        if (card[1].state === 'active') {
                        return (
                                    <div className='CourtList_card' key={card[1].name + card[1].id} >
                                        <Link to={`/CourtList/${card[1].name + card[1].id}`} >
                                            <img className='CourtList_avatar' src={card[1].avatar} alt="" />
                                            <h3 className='CourtList_title'>{card[1].name}</h3>
                                            <p className='CourtList_descr' >{card[1].cardDescr}</p>
                                        </Link>
                                        {
                                          isAdmin 
                                          ?
                                          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getDeleteCard}>Delete</button>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getWaitCard}>Waiting result</button>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getPastCard}>Past</button>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getActiveCard}>Active</button>
                                          </div> 
                                          :
                                            <></>
                                        }
                                        
                                    </div>
                        )
                        }
                    })
                }
                </div> 

                {
                    data && data?.filter(card => card[1].state === 'wait').length > 0
                    ?
                    <h2 className='CourtList_container_title CourtList_container_title_wait'>Waiting for results </h2>
                    :
                    <></>
                }
                <div className='CourtList_cards'>
                {   
                    isLoading
                    ?
                    <Spinner />
                    :
                    data?.map(( card : any) => {
                        if (card[1].state === 'wait') {
                        return (
                                <div className='CourtList_card' key={card[1].name + card[1].id}>
                                    <Link to={`/CourtList/${card[1].name + card[1].id}`} >
                                        <img className='CourtList_avatar' src={card[1].avatar} alt="" />
                                        <h3 className='CourtList_title'>{card[1].name}</h3>
                                        <p className='CourtList_descr' >{card[1].cardDescr}</p>
                                    </Link>
                                    {
                                          isAdmin 
                                          ?
                                          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getDeleteCard}>Delete</button>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getWaitCard}>Waiting result</button>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getPastCard}>Past</button>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getActiveCard}>Active</button>

                                             <label htmlFor="name">Write result and push winResult: <input required type="text" name='name' id='name' onChange={(e) => setResult(e.target.value)} /></label>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={setResultToDBMore}>Win MORE</button>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={setResultToDBLess}>Win LESS</button>
                                          </div> 
                                          :
                                            <></>
                                        }
                                </div>        
                        )
                        }
                    })
                }
            </div>
            

            <h2 className='CourtList_container_title CourtList_container_title_past'>Past Judge</h2>
            <div className='CourtList_cards'>
                {   
                    isLoading
                    ?
                    <Spinner />
                    :
                    dataPast?.map(( card : any, index: number) => {
                        if (card[1].state === 'past' && index < 6) {
                        return (
                            <div className='CourtList_card' key={card[1].name + card[1].id}>
                                <Link to={`/CourtList/${card[1].name + card[1].id}`} >
                                    <img className='CourtList_avatar' src={card[1].avatar} alt="" />
                                    <h3 className='CourtList_title'>{card[1].name}</h3>
                                    <p className='CourtList_descr' >{card[1].cardDescr}</p>
                                </Link>
                                {
                                          isAdmin 
                                          ?
                                          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getDeleteCard}>Delete</button>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getWaitCard}>Waiting result</button>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getPastCard}>Past</button>
                                              <button className='CourtList_car_admin_changeStateBtn' name={card[1].name + card[1].id} onClick={getActiveCard}>Active</button>
                                          </div> 
                                          :
                                            <></>
                                }
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