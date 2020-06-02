import React from 'react';
import "./Schedule.css";

const Schedule = (props) => {
    const [timeblockState, setTimeblockState] = React.useState([]);
    const array = [];

    function timeblocks() {
        console.log(props.openTime)
        if (props.timeslot === 60) {
            const blockCount = props.closeTime - props.openTime;
            pushArray(blockCount);
            return array;
        } else if (props.timeslot === 30) {
            const blockCount = (props.closeTime - props.openTime) * 2;
            pushArray(blockCount);
            return array;
        } else {
            const blockCount = (props.closeTime - props.openTime) * 4;
            pushArray(blockCount);
            return array;
        }
    }

    function pushArray(blockCount) {
        for (let i = 0; i < blockCount; i++) {
            array.push(props.openTime + i);
        }
    }

    React.useEffect(() => {
        const newArray = timeblocks();
        // console.log(newArray)
        setTimeblockState(newArray);
    }, []);

    return (
        <div>
            {timeblockState.map(e => (
                <div className='schedule' >
                <h4>Time: {e}</h4>
                <h4>{props.capacity} spots left!</h4>
                <button className="reserveBtn" id={e} >Reserve!</button>
                </div>
            ))}
        </div>
    );
};

export default Schedule;