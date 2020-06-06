import React from "react";
import "./Schedule.css";
import { useBizContext } from "../../utils/BusinessContext";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";

const Schedule = ({ dataSelectedDate }) => {
    const bizContext = useBizContext();
    const [timeblockState, setTimeblockState] = React.useState([]);
    const array = [];
    const [state, dispatch] = useUserContext();

    function timeblocks() {
        if (bizContext[0].times.timeslot_length === 60) {
            const blockCount = bizContext[0].times.close - bizContext[0].times.open;
            for (let i = 0; i < blockCount; i++) {
                if (bizContext[0].times.open + i === 24) {
                    array.push(bizContext[0].times.open + i - 12 + " AM");
                } else if (bizContext[0].times.open + i === 12) {
                    array.push(bizContext[0].times.open + i + " PM");
                } else if (bizContext[0].times.open + i > 12) {
                    array.push(bizContext[0].times.open + i - 12 + " PM");
                } else {
                    array.push(bizContext[0].times.open + i + " AM");
                }
            }
            return array;
        } else if (bizContext[0].times.timeslot_length === 30) {
            const blockCount =
                (bizContext[0].times.close - bizContext[0].times.open) * 2;
            let oddCount = 0;
            let evenCount = 0;
            for (let i = 0; i < blockCount; i++) {
                if (i % 2 === undefined || i % 2 === 0) {
                    if (bizContext[0].times.open + evenCount === 24) {
                        array.push(bizContext[0].times.open + evenCount - 12 + " AM");
                        evenCount++;
                    } else if (bizContext[0].times.open + evenCount > 12) {
                        array.push(bizContext[0].times.open + evenCount - 12 + " PM");
                        evenCount++;
                    } else if (bizContext[0].times.open + evenCount === 12) {
                        array.push(bizContext[0].times.open + evenCount + " PM");
                        evenCount++;
                    } else {
                        array.push(bizContext[0].times.open + evenCount + " AM");
                        evenCount++;
                    }
                } else {
                    if (bizContext[0].times.open + oddCount === 24) {
                        array.push(bizContext[0].times.open + oddCount - 12 + ":30 AM");
                        oddCount++;
                    } else if (bizContext[0].times.open + oddCount > 12) {
                        array.push(bizContext[0].times.open + oddCount - 12 + ":30 PM");
                        oddCount++;
                    } else if (bizContext[0].times.open + oddCount === 12) {
                        array.push(bizContext[0].times.open + oddCount + ":30 PM");
                        oddCount++;
                    } else {
                        array.push(bizContext[0].times.open + oddCount + ":30 AM");
                        oddCount++;
                    }
                }
            }
            return array;
        } else {
            const blockCount =
                (bizContext[0].times.close - bizContext[0].times.open) * 4;
            for (let i = 0; i < blockCount; i++) {
                array.push(bizContext[0].times.open + i);
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
            setTimeblockState(newArray);
        }, [bizContext]);

        const userCheck = (time, dataSelectedDate) => {
            // API.checkUser().then(result => {
            // console.log(result);
            if (state.username === "") {
                return window.location.href = "/login"
            } else {
                console.log(state)
                console.log(bizContext)
                console.log(time)
                console.log(dataSelectedDate)
                API.reservation(bizContext[0].businessId,
                    {
                        time: time,
                        date: dataSelectedDate,
                        capacity: bizContext[0].times.capacity,
                        customerIds: [state._id]
                    }
                ).then(result => {
                    console.log(result);
                    console.log(result.status)
                    if(result.status === 200) {
                        API.addUserReservation(state._id, {
                            time: time,
                            date: dataSelectedDate,
                            businessId: result.data.business._id
                        }).then(userData => {
                            console.log(userData)
                        })
                    }
                    // console.log(newCapacity);
                })
                // API.getReservation(bizContext[0].businessId, 
                //     {
                //         time: time,
                //         date: dataSelectedDate
                //     }).then(result => {
                //     console.log(result);
                // const newResult = result.data.reservations.filter(res => {
                //     return res.time === time;
                // })
                // console.log(newResult)
                //     if (newResult[0] === undefined) {
                //         API.reservation(bizContext[0].businessId,
                //             {
                //                 time: time,
                //                 date: dataSelectedDate,
                //                 capacity: bizContext[0].times.capacity - 1,
                //                 customerIds: [state._id]
                //             }
                //         ).then(response => {
                //             console.log(response);
                //         })
                //     } else {
                //         console.log(newResult)
                //         newResult[0].capacity--;
                //         newResult[0].customerIds.push(state._id)
                //         API.updateReservation(bizContext[0].businessId, newResult[0])
                //             .then(updatedRes => {
                //                 console.log(updatedRes);
                //             })
                //         console.log(newResult)
                //     }
                // });
                // }
                // })
                    .catch((err) => console.log(err));
            }
        }

        return (
            <div>
                {timeblockState.map((time) => (
                    <div className="schedule">
                        <h4>Time: {time}</h4>
                        <h4>{bizContext[0].times.capacity} spots left!</h4>
                        <button
                            className="reserveBtn"
                            onClick={() => userCheck(time, dataSelectedDate)}
                        >
                            Reserve!
                        </button>

                    </div>
                ))}
            </div>

        )
    };


    export default Schedule;
