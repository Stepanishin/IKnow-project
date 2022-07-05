import { type } from 'os';
import React, { FC, useEffect } from 'react';
import './Timer.css'

interface TimerProps {
    Timerclass?: string,
    DateToMint?: string
}

const Timer:FC<TimerProps> = ({Timerclass, DateToMint}) => {

    useEffect(() => {
        timer();
    }, [])

    async function timer() {
        // console.log(a3)
        var nowDate:any = new Date();
        // var achiveDate:any = new Date(2022,8,28,17,8,8); //Задаем дату, к которой будет осуществляться обратный отсчет
        // var achiveDate:any = new Date(a0,a1,a2,a3,a4,a5);
        var achiveDate:any = new Date(DateToMint as any);
        var result:any = (achiveDate - nowDate)+1000;
        if (result < 0) {
            var elmnt:any = document.getElementById('timer');
            elmnt.innerHTML = 'has already passed';
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