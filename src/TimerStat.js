import React from 'react';

const TimerStat = ({time: {hours, minutes, seconds}}) => {
    return ( 
        <div>
            {hours <= 9 ? '0'+hours : hours} : {minutes <= 9 ? '0'+minutes : minutes} : {seconds <= 9 ? '0'+seconds : seconds}
        </div> 
    );
}
 
export default TimerStat;