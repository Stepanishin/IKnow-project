import { useWallet } from '@solana/wallet-adapter-react';
import { child, get, getDatabase, ref, set, update } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { useGetUsersQuery } from '../../../../store/reducers/firebase.api';
import { adminAccessSlice } from '../../../../store/reducers/getAdminAccess';
import { ICard } from '../../../../types/ICard';
import './AddNewJudge.css'

const AddNewJudge = () => {

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

    const [addNewEvent, setAddNewEvent] = useState<ICard>({
        SolForLess: 0.001,
        SolForMore: 0.001,
        judgeResult: 'Waiting result',
        state: 'test',
        walletForLess: 'FXSGCKWyi19ZiFsUTEHkaN5kyfJYHM3EH5vw7KYbxgme',
        walletForMore: 'FXSGCKWyi19ZiFsUTEHkaN5kyfJYHM3EH5vw7KYbxgme',
        wallets: {
            SolForLess: {
                1: 1
            },
            SolForMore: {
                1: 1
            },
        },
        id: Date.now()
    });

    const handleChange = (e:any) => {
        const fieldName = e.target.name
        setAddNewEvent({...addNewEvent, [fieldName]: e.target.value})
    }

    const sendData = (e:any) => {
        e.preventDefault()
        const db = getDatabase();
        let nameEvent = addNewEvent.name! + addNewEvent.id
        const updateDb = (nameEvent: string) => {
                const dbRef = ref(getDatabase());
                        get(child(dbRef,  `/Judges/`)).then((snapshot) => {
                        if (snapshot.exists()) {
                            
                            let arr = snapshot.val()
                            const updates:any = {};
                            set(ref(db, `/Judges/${nameEvent}/`), addNewEvent);
                            
                            return update(ref(db), updates);
        
                        } else {
                            console.log("No data available");
                        }
                        }).catch((error) => {
                        console.error(error);
                        });
        }
        updateDb(nameEvent)
    }


    return (
        <div className='AddNewJudge_container'>
            {
                isAdmin 
                ?
                <form className='AddNewJudge_container' onSubmit={sendData} >

                    <p style={{maxWidth: '700px'}}>
                        <ol>
                            <li>Заполни все обязательные поля</li>
                            <li>Загрузи картинку на сервис. В после вставь адрес src у HTML-кода для миниатюры. Е сожалению пока так, попробую рещить проблему с удобной загрузкой изображений</li>
                            <li>Проверь правильность заполнения</li>
                            <li>Нажми кнопку отправить</li>
                            <li>Новое событие появится во вкладке COURT. Но будет видно только администраторам.</li>
                            <li>Снова проверяешь правильность заполнения внутри и снаружи карточки События. Проверяешь смотрибельность аватарки, правильность даты. Если что-то не правильно, удаляешь событие и создаёшь его заного</li>
                            <li>Переносишь событие в Active. Теперь его видят все пользователи </li>
                        </ol>
                    </p>

                <label htmlFor="name">Имя карточки*** <input required type="text" name='name' id='name' onChange={handleChange} /></label>

                <label htmlFor="avatar"> <a rel='noreferrer' target="_blank" href="https://imgbb.com/upload">IMGDB</a> Ссылка на аватарку*** <input required type="text" name='avatar' id='avatar' onChange={handleChange} /></label>

                <label htmlFor="cardDescr">Описание евента на странице со всеми эвентами***  <input required type="text" name='cardDescr' id='cardDescr' onChange={handleChange} /></label>

                <label htmlFor="cardDescrLess">Описание на кнопке Меньше***  <input required type="text" name='cardDescrLess' id='cardDescrLess' onChange={handleChange} /></label>

                <label htmlFor="cardDescrMore">Описание на кнопке Больше***  <input required type="text" name='cardDescrMore' id='cardDescrMore' onChange={handleChange} /></label>

                <label htmlFor="date">Дата, когда это событие произойдет***  <input required type='datetime-local' name='date' id='date' onChange={handleChange} /></label>

                <label htmlFor="dateToShot">Дата, когда приём ставок должен закрыться***  <input required type='datetime-local' name='dateToShot' id='dateToShot' onChange={handleChange} /></label>

                <label htmlFor="eventDescr">Описание события внутри карточки  <input type='text' name='eventDescr' id='eventDescr' onChange={handleChange} /></label>

                <label htmlFor="twitter">twitter Евента  <input type='text' name='twitter' id='twitter' onChange={handleChange} /></label>

                <label htmlFor="discord">discort Евента  <input type='text' name='discord' id='discord' onChange={handleChange} /></label>

                <label htmlFor="website">website Евента  <input type='text' name='website' id='website' onChange={handleChange} /></label>

                <input type="submit" value='ОТПРАВИТЬ. Проверь перед отправкой!' />
            </form>
                :
                <></>
            }
        </div>
            
    );
};

export default AddNewJudge;