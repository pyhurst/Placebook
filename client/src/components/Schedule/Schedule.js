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

    React.useEffect(() => {
        const newArray = timeblocks();
        setTimeblockState(newArray);
    }, [bizContext]);

    const userCheck = (time, dataSelectedDate) => {
        const user = JSON.parse(localStorage.getItem("currentUser"));

        if (state.username === "") {
            return window.location.href = "/login"
        } else if (localStorage.getItem("type")) {
            return alert("Sorry you are a business account now, please create a non-business account to make reservations.")
        } else {
            for (let i = 0; i < bizContext[0].reservations.length; i++) {
                for (let j = 0; j < bizContext[0].reservations[i].customerIds.length; j++) {
                    if (bizContext[0].reservations[i].customerIds[j] === user._id) {
                        return alert("Sorry you may only reserve 1 spot a day per business! Try another day or business.")
                    }
                }
            }
            const id = user._id
            API.reservation(bizContext[0].businessId,
                {
                    time: time,
                    date: dataSelectedDate,
                    capacity: bizContext[0].times.capacity,
                    customerIds: [id]
                }
            ).then(result => {
                if (result.status === 200) {
                    API.addUserReservation(state._id, {
                        time: time,
                        date: dataSelectedDate,
                        businessId: result.data.business._id,
                        businessName: result.data.business.name
                    }).then(userData => {
                        localStorage.setItem("currentUser", JSON.stringify(userData.data));
                        window.location = ("/user/home")
                    })
                }
            })
                .catch((err) => console.log(err));
        }
    }

    const changeCapacity = (time) => {
        if (bizContext[0].reservations.length === 0) {
            return bizContext[0].times.capacity
        } else {
            for (let i = 0; i < bizContext[0].reservations.length; i++) {
                if (time === bizContext[0].reservations[i].time) {
                    return (bizContext[0].reservations[i].capacity - bizContext[0].reservations[i].customerIds.length);
                }
            }
            return bizContext[0].times.capacity;

        }
    }

    return (
        <div>
            {timeblockState.map((time) => (
                <div className="schedule" data-aos="zoom-in">
                    <h4>Time: {time}</h4>
                    <h4 id={time}>{changeCapacity(time)} spots left!</h4>
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
