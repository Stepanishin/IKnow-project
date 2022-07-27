import { type } from 'os';
import React, { FC, useEffect } from 'react';
import './Timer.css'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { timerAndDisableBtnSlice } from '../../../store/reducers/getTimerAndDisablebtnReducer';
import { ITimerProps } from '../../../types/ITimerProps';
import { child, get, getDatabase, ref, update } from 'firebase/database';
import { useParams } from 'react-router-dom';

const Timer:FC<ITimerProps> = ({Timerclass, dateToShot}) => {

    const {isTimeToDisable} = useAppSelector(state => state.timerAndDisableBtnSlice)
    const {timerAndDisableBtn} = timerAndDisableBtnSlice.actions
    const dispatch = useAppDispatch()
    const params = useParams()

    useEffect(() => {
        timer();
    }, [])

    async function timer() {
        var nowDate:any = new Date();
        var achiveDate:any = new Date(dateToShot as any);
        var result:any = (achiveDate - nowDate)+1000;
        if (result < 0) {
            var elmnt:any = document.getElementById('timer');
            elmnt.innerHTML = '';
            dispatch(timerAndDisableBtn())

            const db = getDatabase();
            const updateDb = (params: any) => {
                const dbRef = ref(getDatabase());
                        get(child(dbRef,  `/Judges/${params.name}`)).then((snapshot) => {
                        if (snapshot.exists()) {
                            let arr = snapshot.val()
    
                            const updates:any = {};
    
                            updates[`/Judges/${params.name}/state/`] = 'wait';
                            return update(ref(db), updates);
        
                        } else {
                            console.log("No data available");
                        }
                        }).catch((error) => {
                        console.error(error);
                        });
            }
            updateDb(params) 



            return undefined;
        }
        var seconds:any = Math.floor((result/1000)%60);
        var minutes:any = Math.floor((result/1000/60)%60);
        var hours:any = Math.floor((result/1000/60/60)%24);
        var days:any = Math.floor(result/1000/60/60/24);
        if (seconds < 10) seconds = '0' + seconds;
        if (minutes < 10) minutes = '0' + minutes;
        if (hours < 10) hours = '0' + hours;
        var elmnt:any = document.getElementById('timer');
        elmnt.innerHTML ='Deadline for bidding: ' + days + ':' + hours + ':' + minutes + ':' + seconds;
        setTimeout(timer, 1000);
    }
    window.onload = function() {
        timer();
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>

            <div className={Timerclass} id='timer' style={{width: '260px'}}>
            
            </div>
        </div>
        
    );
};

export default Timer;