import { type } from 'os';
import React, { FC, useEffect } from 'react';
import './Timer.css'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { timerAndDisableBtnSlice } from '../../../store/reducers/getTimerAndDisablebtnReducer';

interface TimerProps {
    Timerclass?: string,
    DateToMint?: string
}

const Timer:FC<TimerProps> = ({Timerclass, DateToMint}) => {

    const {isTimeToDisable} = useAppSelector(state => state.timerAndDisableBtnSlice)
    const {timerAndDisableBtn} = timerAndDisableBtnSlice.actions
    const dispatch = useAppDispatch()

    useEffect(() => {
        timer();
    }, [])

    async function timer() {
        var nowDate:any = new Date();
        var achiveDate:any = new Date(DateToMint as any);
        var result:any = (achiveDate - nowDate)+1000;
        if (result < 0) {
            var elmnt:any = document.getElementById('timer');
            elmnt.innerHTML = 'has already passed';
            dispatch(timerAndDisableBtn())
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
        elmnt.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
        setTimeout(timer, 1000);
    }
    window.onload = function() {
        timer();
    }


    return (
        <div>
            <div className={Timerclass} id='timer'>
            
            </div>
        </div>
        
    );
};

export default Timer;