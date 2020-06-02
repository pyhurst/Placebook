import React from 'react';
import "./Schedule.css";

const Schedule = () => {
  const scheduleData = {
    reservations: [
      {
        date: "06-20-20",
        time: 9,
        id: 1
      },
      {
        date: "06-20-20",
        time: 10,
        id: 2
      },
      {
        date: "06-20-20",
        time: 12.5,
        id: 3
      },
      {
        date: "06-21-20",
        time: 15,
        id: 1
      }
    ],
    times: {
      open: 9,
      close: 17,
      timeslot_length: 30,
      capacity: 20
    }
  }
  const [arrayState, setArrayState] = React.useState([]);
  const array = [];

  function pushArray() {
    for (let i = 0; i < 30; i++) {
        array.push("hi");
    }
    return array;
  }

  React.useEffect(() => {
      const newArray = pushArray();
        setArrayState(newArray);
  }, []);


  return (
    <div>
        {arrayState.map(e => <div className='schedule'>Hello</div>)}
    </div>
  );
};

export default Schedule;