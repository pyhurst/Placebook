const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const businessSeed = [
  {
    name: "UFC Gym",
    category: "Gym",
    address: "",
    phone: "312-555-5555",
    reservations: {},
    times: {
        open: 0700,
        close: 2100,
        timeslot_length: 1.5,
        capacity: 15
    }
  },
  {
    name: "Chicago Public Library",
    category: "Library",
    address: "",
    phone: "312-777-3333",
    reservations: {},
    times: {
        open: 0800,
        close: 1700,
        timeslot_length: 2,
        capacity: 20
    }
  },
  {
    name: "Museum of Contemporary Art",
    category: "Education",
    address: "",
    phone: "312-434-4343",
    reservations: {},
    times: {
        open: 1000,
        close: 2000,
        timeslot_length: 2.5,
        capacity: 75
    }
  },
  {
    name: "Pinstripes Bowling",
    category: "Entertainment",
    address: "",
    phone: "312-334-2222",
    reservations: 4,
    times: {
        open: 1200,
        close: 2300,
        timeslot_length: 2.5,
        capacity: 30
    }
  },
  {
    name: "CorePower Yoga",
    category: "Gym",
    address: "",
    phone: "312-334-2222",
    reservations: {},
    times: {
        open: 0800,
        close: 1900,
        timeslot_length: 1,
        capacity: 20
    }
  },
];

const userSeed = [
    {
        username: "johnsmith",
        password: "password1234",
        email: "jsmith@gmail.com",
        reservations: {
            business: "CorePower Yoga",
            timeslot: 1600,
            date: ""
        }
    },
    {
        username: "janedoe",
        password: "mypassword",
        email: "jdoe1@gmail.com",
        reservations: {
            business: "UFC Gym",
            timeslot: 0900,
            date: ""
        }
    },
    {
        username: "",
        password: "",
        email: "",
        reservations: {
            business: "",
            timeslot: 4
        }
    },
    {
        username: "",
        password: "",
        email: "",
        reservations: {
            business: "",
            timeslot: 4
        }
    },
    {
        username: "",
        password: "",
        email: "",
        reservations: {
            business: "",
            timeslot: 4
        }
    },
    {
        username: "",
        password: "",
        email: "",
        reservations: {
            business: "",
            timeslot: 4
        }
    },
    {
        username: "",
        password: "",
        email: "",
        reservations: {
            business: "",
            timeslot: 4
        }
    },

]