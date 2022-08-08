import { child, get, getDatabase, ref, set, update } from 'firebase/database';
import React, { useState } from 'react';
import { ICard } from '../../../types/ICard';
import './AdminPanel.css'

const AdminPanel = () => {

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
        }
    });

    const handleChange = (e:any) => {
        const fieldName = e.target.name
        setAddNewEvent({...addNewEvent, [fieldName]: e.target.value})
    }

    const sendData = (e:any) => {
        e.preventDefault()
        const db = getDatabase();
        let nameEvent = addNewEvent.name!
        const updateDb = (nameEvent: string) => {
                const dbRef = ref(getDatabase());
                        get(child(dbRef,  `/Judges/`)).then((snapshot) => {
                        if (snapshot.exists()) {
                            
                            let arr = snapshot.val()
                            const updates:any = {};
                            // updates[`/Judges/${nameEvent}/`] = addNewEvent;
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


    const btnclick = (e:any) => {
        e.preventDefault()
        console.log(addNewEvent)
    }


    return (
        <div className='AdminPanel'>
            <form className='AdminPanel_container'>
                <label htmlFor="name">Имя карточки <input type="text" name='name' id='name' onChange={handleChange} /></label>

                <label htmlFor="avatar">Ссылка на аватарку <input type="text" name='avatar' id='avatar' onChange={handleChange} /></label>

                <label htmlFor="cardDescr">Описание евента на странице со всеми эвентами  <input type="text" name='cardDescr' id='cardDescr' onChange={handleChange} /></label>

                <label htmlFor="cardDescrLess">Описание на кнопке Меньше  <input type="text" name='cardDescrLess' id='cardDescrLess' onChange={handleChange} /></label>

                <label htmlFor="cardDescrMore">Описание на кнопке Больше  <input type="text" name='cardDescrMore' id='cardDescrMore' onChange={handleChange} /></label>

                <label htmlFor="date">Дата, когда это событие произойдет  <input type='datetime-local' name='date' id='date' onChange={handleChange} /></label>

                <label htmlFor="dateToShot">Дата, когда приём ставок должен закрыться  <input type='datetime-local' name='dateToShot' id='dateToShot' onChange={handleChange} /></label>

                <label htmlFor="eventDescr">Описание события внутри карточки  <input type='text' name='eventDescr' id='eventDescr' onChange={handleChange} /></label>

                {/* <label htmlFor="walletForLess">Кошелёк для приёма ставок на МЕНЬШЕ  <input type='text' name='walletForLess' id='walletForLess' onChange={handleChange} /></label>

                <label htmlFor="walletForMore">Кошелёк для приёма ставок на БОЛЬШЕ  <input type='text' name='walletForMore' id='walletForMore' onChange={handleChange} /></label> */}

                <label htmlFor="twitter">twitter Евента  <input type='text' name='twitter' id='twitter' onChange={handleChange} /></label>

                <label htmlFor="discord">discort Евента  <input type='text' name='discord' id='discord' onChange={handleChange} /></label>

                <label htmlFor="website">website Евента  <input type='text' name='website' id='website' onChange={handleChange} /></label>

                <button onClick={btnclick} >Push</button>

                <button onClick={sendData} >Отправить заполненную и проверенную!!! форму на сайт</button>
            </form>
        </div>
    );
};

export default AdminPanel;
