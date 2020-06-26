import React, { useRef } from "react";
import API from "../../utils/API";
import { Button, Jumbotron } from "reactstrap";
import "./BusinessInput.css";

//FORM TO SIGN UP A BUSINESS
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

    const handleSubmit = (e) => {
        e.preventDefault();
        let storageStatus = JSON.parse(localStorage.getItem("currentUser"));
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
                localStorage.setItem("type", "business");
                window.location = "/business/home"
            })
            .catch((err) => console.log(err));
    };
    return (
        <div id="Signup" className="container">
            <Jumbotron id="busInputJumbo">
                <form>
                <div className="row">
                    <div className="col-sm">
                        <h2>Please fill out this form to add your business.</h2>
                        </div>
                        <div className="col-sm">
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
                        <select placeholder="Choose a category..." ref={categoryRef} name="category" id="categoryInput">
                            <option>Gym</option>
                            <option>Beauty</option>
                            <option>Food Sales</option>
                            <option>Recreation</option>
                            <option>Education</option>
                            <option>Hardware</option>
                            <option>Retail</option>
                            <option>Other</option>
                        </select>
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
                    <div className="col-sm">
                        <label for="openTime">Business Open Time: </label>
                        <br></br>
                        <select defaultValue="4AM" ref={openTimeRef} name="openTime" id="openTimeInput">
                            <option selected="selected">In 24 Hour Time</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                        </select>
                        <br></br>
                        <label for="closeTime">Business Close Time: </label>
                        <br></br>
                         <select defaultValue="9AM" ref={closeTimeRef} name="closeTime" id="closeTimeInput">
                            <option selected="selected">In 24 Hour Time</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                        </select>
                        <br></br>
                        <label for="timeSlotLength">Length of Timeslots (in 30 minute increments): </label>
                        <br></br>
                        {/* <input
                            type="number"
                            name="timeSlotLength"
                            id="timeSlotLengthInput"
                            ref={timeSlotLengthRef}
                        /> */}
                        <select defaultValue="60" ref={timeSlotLengthRef} name="timeSlotLength" id="timeSlotLengthInput">
                            <option selected="selected">Select Interval</option>
                            <option>30</option>
                            <option>60</option>
                        </select>
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
        </div>
    );
};
export default BusinessInputs;
