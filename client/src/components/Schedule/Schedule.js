import React from 'react';
import "./Schedule.css";

const Schedule = (props) => {
    const [arrayState, setArrayState] = React.useState([]);
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
            array.push("hi");
        }
    }

    React.useEffect(() => {
        const newArray = timeblocks();
        setArrayState(newArray);
    }, []);

    return (
        <div>
            {arrayState.map(e => <div className='schedule'>Hello</div>)}
        </div>
    );
};

export default Schedule;