import React from 'react';
import "./Schedule.css";
import { useBizContext } from "../../utils/BusinessContext";


const Schedule = () => {
    const bizContext = useBizContext();
    const [timeblockState, setTimeblockState] = React.useState([]);
    const array = [];

    function timeblocks() {
        // console.log(bizContext[0].times.open)
        if (bizContext[0].times.timeslot_length === 60) {
            const blockCount = bizContext[0].times.close - bizContext[0].times.open;
            pushArray(blockCount);
            return array;
        } else if (bizContext[0].times.timeslot_length === 30) {
            const blockCount = (bizContext[0].times.close - bizContext[0].times.open) * 2;
            for (let i = 0; i < blockCount; i++) {
                array.push(bizContext[0].times.open + i);
            //     if(i % 2 === undefined || i % 2 === 0){
            //         array.push(bizContext[0].times.open + i);
            //     } else {
            //         array.push(bizContext[0].times.open + ":30")
            //     }
            }
            return array;
        } else {
            const blockCount = (bizContext[0].times.close - bizContext[0].times.open) * 4;
            pushArray(blockCount);
            return array;
        }
    }

    function pushArray(blockCount) {
        for (let i = 0; i < blockCount; i++) {
            array.push(bizContext[0].times.open + i);
        }
    }

    React.useEffect(() => {
        const newArray = timeblocks();
        // console.log(newArray)
        setTimeblockState(newArray);
    },[bizContext]);

    return (
        <div>
            {timeblockState.map(e => (
                <div className='schedule' >
                <h4>Time: {e}</h4>
                <h4>{bizContext[0].times.capacity} spots left!</h4>
                <button className="reserveBtn" id={e} >Reserve!</button>
                </div>
            ))}
        </div>
    );
};

export default Schedule;