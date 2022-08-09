import { useWallet } from '@solana/wallet-adapter-react';
import { child, get, getDatabase, ref, set, update } from 'firebase/database';
import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useGetUsersQuery } from '../../../store/reducers/firebase.api';
import { adminAccessSlice } from '../../../store/reducers/getAdminAccess';
import { ICard } from '../../../types/ICard';
import './AdminPanel.css'

const AdminPanel: FC = () => {

    const { publicKey, sendTransaction } = useWallet();
    const { isLoading : userIsLoading, data : userData } = useGetUsersQuery('')
    const {isAdmin} = useAppSelector(state => state.adminAccessSlice)
    const {adminAccess} = adminAccessSlice.actions
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (publicKey ) {
            let userWallet = publicKey?.toBase58()!
            if (userData[userWallet].status === 'admin') {
                dispatch(adminAccess())
            }
        }
    }, [userIsLoading])

    return (
        <div className='AdminPanel'>
            {
            isAdmin
            ?
            <div className='AdminPanel_btn_container'>
                <Link to={'./AddNewJudge'} >Add New Judge</Link>
            </div>
            :
            <></>
            }
            
        </div>
    );
};

export default AdminPanel;
