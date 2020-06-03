import React from 'react';
import "./Schedule.css";
import { useBizContext } from "../../utils/BusinessContext";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import { Redirect } from 'react-router-dom';


const Schedule = () => {
    const bizContext = useBizContext();
    const [timeblockState, setTimeblockState] = React.useState([]);
    const array = [];
    const [state, dispatch] = useUserContext();


    function timeblocks() {
        // console.log(bizContext[0].times.open)
        if (bizContext[0].times.timeslot_length === 60) {
            const blockCount = bizContext[0].times.close - bizContext[0].times.open;
            for (let i = 0; i < blockCount; i++) {
                array.push(bizContext[0].times.open + i);
            }
            return array;
        } else if (bizContext[0].times.timeslot_length === 30) {
            const blockCount = (bizContext[0].times.close - bizContext[0].times.open) * 2;
            let oddCount = 0
            let evenCount = 0
            for (let i = 0; i < blockCount; i++) {
                // array.push(bizContext[0].times.open + i);
                if (i % 2 === undefined || i % 2 === 0) {
                    array.push(bizContext[0].times.open + evenCount);
                    evenCount++;
                } else {
                    array.push(bizContext[0].times.open + oddCount + ":30")
                    oddCount++;
                }
            }
            return array;
        } else {
            const blockCount = (bizContext[0].times.close - bizContext[0].times.open) * 4;
            // let oddCount = 0
            // let evenCount = 0
            for (let i = 0; i < blockCount; i++) {
                array.push(bizContext[0].times.open + i);
                //     if(i % 2 === undefined || i % 2 === 0){
                //         array.push(bizContext[0].times.open + evenCount);
                //         evenCount++;
                //     } else {
                //         array.push(bizContext[0].times.open + oddCount + ":15")
                //         oddCount++;
                //     }
            }
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
    }, [bizContext]);

    const userCheck = () => {
        API.checkUser().then(result => {
            // console.log(result);
            if (result === null) {
                return window.location.href = "/login"
            } else {
                console.log(state)
            }
        })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            {timeblockState.map(e => (
                <div className='schedule' >
                    <h4>Time: {e}</h4>
                    <h4>{bizContext[0].times.capacity} spots left!</h4>
                    <button className="reserveBtn" id={e} onClick={userCheck} >Reserve!</button>
                </div>
            ))}
        </div>
    );
};

export default Schedule;