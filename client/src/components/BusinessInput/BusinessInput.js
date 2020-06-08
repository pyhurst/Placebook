import React, { useRef, useContext } from "react";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import DropdownEl from "../Dropdown/Dropdown";
import { Button, Form, FormGroup, Label, Input, Jumbotron } from "reactstrap";

const BusinessInputs = (props) => {
    const businessNameRef = useRef();
    const categoryRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const phoneRef = useRef();
    const openTimeRef = useRef();
    const closeTimeRef = useRef();
    const timeSlotLengthRef = useRef();
    const capacityRef = useRef();
    const photoRef = useRef();
    const userContext = useUserContext();
    // const [state, dispatch] = useUserContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        let storageStatus = JSON.parse(localStorage.getItem("currentUser"));
        console.log("clicked");
        console.log(openTimeRef.current);
        console.log(closeTimeRef.current.value);
        console.log(storageStatus._id);
        API.addBusiness({
            ownerId: storageStatus._id,
            name: businessNameRef.current.value,
            category: categoryRef.current.value,
            address: addressRef.current.value,
            city: cityRef.current.value,
            phone: phoneRef.current.value,
            times: {
                open: openTimeRef.current.value,
                close: closeTimeRef.current.value,
                timeslot_length: timeSlotLengthRef.current.value,
                capacity: capacityRef.current.value,
            },
            image: photoRef.current.value
        })
            .then((result) => {
                console.log(result);
                localStorage.setItem("type", "business");
                window.location = "/business/home"
                // dispatch(
                //     {
                //         type: "ADD_USER",
                //         username: result.data.username,
                //         email: result.data.email,
                //         reservations: result.data.reservations
                //     }
                // )
            })
            .catch((err) => console.log(err));
    };
    // const onSwitch = (e) => {
    //     console.log(e.target.value)
    //   }
    return (
        <div id="Signup" className="container">
            <Jumbotron>
                <form>
                <div className="row">
                    <div className="col">
                        <h2>Please fill out this form to add your business.</h2>
                        </div>
                        <div className="col">
                        <label for="businessName">Business Name: </label>
                        <br></br>
                        <input
                            type="text"
                            name="businessName"
                            id="businessNameInput"
                            ref={businessNameRef}
                        />
                        <br></br>
                        <label for="category">Category: </label>
                        <br></br>
                        <input
                            type="text"
                            name="category"
                            id="categoryInput"
                            ref={categoryRef}
                        />
                        <br></br>
                        <label for="address">Address: </label>
                        <br></br>
                        <input
                            type="text"
                            name="address"
                            id="addressInput"
                            ref={addressRef}
                        />
                        <br></br>
                        <label for="city">City: </label>
                        <br></br>
                        <input
                            type="text"
                            name="city"
                            id="cityInput"
                            ref={cityRef}
                        />
                        <br></br>
                        <label for="phone">Phone Number: </label>
                        <br></br>
                        <input
                            type="text"
                            name="phone"
                            id="phoneInput"
                            ref={phoneRef}
                        />
                    </div>
                    <div className="col">
                        <label for="openTime">Business Open Time: </label>
                        <br></br>
                        <input
                            type="text"
                            name="address"
                            id="addressInput"
                            ref={openTimeRef}
                        />
                        <br></br>
                        <label for="closeTime">Business Close Time: </label>
                        <br></br>
                        <input
                            type="text"
                            name="address"
                            id="addressInput"
                            ref={closeTimeRef}
                        />
                        <br></br>
                        <label for="timeSlotLength">Length of Timeslots (in 30 minute increments): </label>
                        <br></br>
                        <input
                            type="number"
                            name="timeSlotLength"
                            id="timeSlotLengthInput"
                            ref={timeSlotLengthRef}
                        />
                        <br></br>
                        <label for="capacity">Capacity per slot: </label>
                        <br></br>
                        <input
                            type="number"
                            name="capacity"
                            id="capacityInput"
                            ref={capacityRef}
                        />
                        <br></br>
                         <label for="photo">Photo: </label>
                        <br></br>
                        <input
                            type="text"
                            name="photo"
                            id="photoInput"
                            ref={photoRef}
                        />
                        <br></br>
                        <br></br>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col" style={{margin: "auto"}}>
                    <Button onClick={handleSubmit}>Add my business!</Button>
                    </div>
                    </div>
                </form>
                </Jumbotron>
                <div style={{height: "200px"}}></div>        
        </div>
    );
    //     <Form className="container">
    //         <FormGroup>
    //             <Label for="businessName">Business Name</Label>
    //             <Input type="text" name="businessName" id="businessNameInput" placeholder="Name" ref={businessNameRef} />
    //         </FormGroup>
    //         <FormGroup>
    //             <DropdownEl cat="cat" name="category" id="categoryInput" onSwitch={props.onSwitch} />
    //             {/* <select>
    //                 <option value="Gym" onClick={props.onSwitch} ref={categoryRef}>Gym</option>
    //                 <option value="Beauty" onClick={props.onSwitch} ref={categoryRef}>Beauty</option>
    //             </select> */}
    //         </FormGroup>
    //         <FormGroup>
    //             <Label for="address">Business Address</Label>
    //             <Input type="text" name="address" id="addressInput" placeholder="Business Address" ref={addressRef} />
    //         </FormGroup>
    //         <FormGroup>
    //             <Label for="openTime">Opening Time:</Label> <br></br>
    //             <DropdownEl time="times" name="openTime" id="openTimeInput" onSwitch={props.onSwitch} ref={openTimeRef} />
    //         </FormGroup>
    //         <FormGroup>
    //             <Label for="closeTime">Closing Time:</Label> <br></br>
    //             <DropdownEl time="times" name="closeTime" id="closeTimeInput" onSwitch={props.onSwitch} ref={closeTimeRef} />
    //         </FormGroup>
    //         <FormGroup>
    //             <Label for="timeSlotLength">Timeslot Length</Label>
    //             <Input type="number" name="timeSlotLength" id="timeSlotLengthInput" placeholder="Please use increments of 30mins" ref={timeSlotLengthRef} />
    //         </FormGroup>
    //         <FormGroup>
    //             <Label for="capacity">Capacity per Timeslot</Label>
    //             <Input type="number" name="capacity" id="timeSlotLengthInput" placeholder="Please use increments of 30mins" ref={capacityRef} />
    //         </FormGroup>
    //         <Button onClick={handleSubmit}>Add my business!</Button>
    //     </Form>
    // )
};
export default BusinessInputs;
