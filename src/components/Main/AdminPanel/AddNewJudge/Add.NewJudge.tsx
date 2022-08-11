import { useWallet } from '@solana/wallet-adapter-react';
import { child, get, getDatabase, ref, set, update } from 'firebase/database';
import { getDownloadURL, getStorage, ref as refStorage, uploadBytes, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { useGetUsersQuery } from '../../../../store/reducers/firebase.api';
import { adminAccessSlice } from '../../../../store/reducers/getAdminAccess';
import { ICard } from '../../../../types/ICard';
import './AddNewJudge.css'
// import firebase from 'firebase'
// import App from '..//..//..//../App'


const AddNewJudge = () => {

    const { publicKey, sendTransaction } = useWallet();
    const { isLoading : userIsLoading, data : userData } = useGetUsersQuery('')
    const {isAdmin} = useAppSelector(state => state.adminAccessSlice)
    const {adminAccess} = adminAccessSlice.actions
    const dispatch = useAppDispatch()

    const [progress, setProgress] = useState(0);
    const [urlAvatar, setUrlAvatar] = useState('');

    const storage = getStorage();

    const downloadAvatar = (e: any) => {
        e.preventDefault();
        const file: any = e.target[0].files[0];
        uploadFiles(file);
      };

    const uploadFiles = (file: any) => {
        if (!file) return;

        const storageRef = refStorage(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
              const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(prog);
            },
            (error) => console.log(error),
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setUrlAvatar(downloadURL)
                setAddNewEvent({...addNewEvent, avatar: downloadURL})
              });
            }
        );
    }

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

    const showData = () => {
        console.log(addNewEvent)
    }


    return (
        <div className='AddNewJudge_container'>
            {
                isAdmin 
                ?
                <div>
                    
                        <p style={{maxWidth: '700px'}}>
                            <ol>
                                <li>Заполни все обязательные поля</li>
                                <li>Выбери картинку на своём диске. Нажми UPLOAD. Ссылка на картинку должна сама появиться в форме.</li>
                                <li>Проверь правильность заполнения</li>
                                <li>Нажми кнопку отправить</li>
                                <li>Новое событие появится во вкладке COURT. Но будет видно только администраторам.</li>
                                <li>Снова проверяешь правильность заполнения внутри и снаружи карточки События. Проверяешь смотрибельность аватарки, правильность даты. Если что-то не правильно, удаляешь событие и создаёшь его заного</li>
                                <li>Переносишь событие в Active. Теперь его видят все пользователи </li>
                            </ol>
                        </p>

                        <form onSubmit={downloadAvatar} style={{marginTop: '40px', display:'flex', flexDirection: 'column', alignItems: 'start', gap: '10px'}}>
                            <input type="file"
                            id="avatar" name="avatar"
                            accept="image/png, image/jpeg"
                            />
                            <button type="submit">Upload</button>
                            <h3>Uploaded {progress} %</h3>
                        </form>
                            
                        <form className='AddNewJudge_container' onSubmit={sendData} >


                        <label htmlFor="name">Имя карточки*** <input required type="text" name='name' id='name' onChange={handleChange} /></label>

                        <label htmlFor="avatar"> Ссылка на аватарку заполнится сама, когда загрузишь картинку*** <input required type="text" name='avatar' id='avatar' onChange={handleChange} value={urlAvatar} /></label>

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
                </div>
                :
                <></>
            }
            
        </div>
            
    );
};

export default AddNewJudge;