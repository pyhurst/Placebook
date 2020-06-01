import React, { useRef } from "react";
import { useStoreContext } from "../../utils/UserContext";
import API from "../../utils/API";

const Signup = () => {
    const businessNameRef = useRef();
    const categoryRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const phoneRef = useRef();
    const openTimeRef = useRef();
    const closeTimeRef = useRef();
    const timeSlotLengthRef = useRef();
    const capacityRef = useRef();
    // const { username, password, email, reservations } = useContext(UserContext);
    const [state, dispatch] = useStoreContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked');
        console.log(usernameRef.current.value)
        API.addBusiness(
            {
                name: businessNameRef.current.value,
                category: categoryRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                phone: phoneRef.current.value,
                open: openTimeRef.current.value,
                close: closeTimeRef.current.value,
                timeslot_length: timeSlotLengthRef.current.value,
                capacity: capacityRef.current.value,
            }
        )
            .then(result => {
                // console.log(result);
                dispatch(
                    {
                        type: "ADD_USER",
                        username: result.data.username,
                        email: result.data.email,
                        reservations: result.data.reservations
                    }
                )
            })
            .catch(err => console.log(err));

    }

    return (
        <div id="Signup">
            <h1>this is our Signup page</h1>
            <form>
                <label for="businessName">Business Name: </label>
                <input
                    type="text"
                    name="businessName"
                    id="businessNameInput"
                    ref={businessNameRef}
                />
                <label for="category">Category: </label>
                <input
                    type="text"
                    name="category"
                    id="categoryInput"
                    ref={categoryRef}
                />
                <label for="address">Address: </label>
                <input
                    type="text"
                    name="address"
                    id="addressInput"
                    ref={addressRef}
                />
                <label for="city">City: </label>
                <input
                    type="text"
                    name="city"
                    id="cityInput"
                    ref={cityRef}
                />
                <label for="phone">Phone Number: </label>
                <input
                    type="text"
                    name="phone"
                    id="phoneInput"
                    ref={phoneRef}
                />
                <label for="openTime">Business Open Time: </label>
                <input
                    type="number"
                    name="openTime"
                    id="openTimeInput"
                    ref={openTimeRef}
                />
                <label for="closeTime">Business Close Time: </label>
                <input
                    type="number"
                    name="closeTime"
                    id="closeTimeInput"
                    ref={closeTimeRef}
                />
                <label for="timeSlotLength">Length of Timeslots: </label>
                <input
                    type="number"
                    name="timeSlotLength"
                    id="timeSlotLengthInput"
                    ref={timeSlotLengthRef}
                />
                <label for="capacity">Capacity per slot: </label>
                <input
                    type="number"
                    name="capacity"
                    id="capacityInput"
                    ref={capacityRef}
                />
                <button onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;