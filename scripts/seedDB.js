const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const businessSeed = [
  {
    name: "UFC Gym",
    category: "Gym",
    address: "644 N Orleans St, Chicago, IL 60654",
    phone: "312-555-5555",
    reservations: [],
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
    address: "310 W Division St, Chicago, IL 60610",
    phone: "312-777-3333",
    reservations: [],
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
    address: "220 E Chicago Ave, Chicago, IL 60611",
    phone: "312-434-4343",
    reservations: [],
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
    address: "435 E Illinois St, Chicago, IL 60611",
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
    address: "227 E Ontario St Suite 202, Chicago, IL 60611",
    phone: "312-334-2222",
    reservations: [],
    times: {
        open: 0800,
        close: 1900,
        timeslot_length: 1,
        capacity: 20
    }
  },
  {
    name: "Custom Business",
    category: "Other",
    address: "200 E Example St Suite 202, Chicago, IL 60610",
    phone: "312-345-4564",
    reservations: [],
    times: {
        open: 0800,
        close: 1900,
        timeslot_length: 1,
        capacity: 10
    }
  }
];

const userSeed = [
    {
        username: "johnsmith",
        password: "password1234",
        email: "jsmith@gmail.com",
        reservations: [{
            business: "CorePower Yoga",
            timeslot: 1600,
            date: "2020-06-01"
        }]
    },
    {
        username: "janedoe",
        password: "mypassword",
        email: "jdoe1@gmail.com",
        reservations: [{
            business: "UFC Gym",
            timeslot: 0900,
            date: "2020-06-01"
        }]
    },
    {
        username: "emilyresch",
        password: "emilyspass",
        email: "eresch@gmail.com",
        reservations: [{
            business: "UFC Gym",
            timeslot: 1100,
            date: "2020-06-01"
        }]
    },
    {
        username: "philhurst",
        password: "philspass",
        email: "phil@gmail.com",
        reservations: [{
            business: "Museum of Contemporary Art",
            timeslot: 1300,
            date: "2020-06-03"
        }]
    },
    {
        username: "blapete",
        password: "petespass",
        email: "peter@yahoo.com",
        reservations: [{
            business: "Pinstripes Bowling",
            timeslot: 2130,
            date: "2020-06-01"
        }]
    },
    {
        username: "jimmyneutron",
        password: "candybars",
        email: "smartypants@gmail.com",
        reservations: [{
            business: "Chicago Public Library",
            timeslot: 1000,
            date: "2020-06-01"
        }]
    },
    {
        username: "spiderman",
        password: "spiderpass",
        email: "shootwebs@gmail.com",
        reservations: [{
            business: "CorePower Yoga",
            timeslot: 0800,
            date: "2020-06-02"
        }]
    },
    {
      username: "businessman",
      password: "password",
      email: "mybusiness@gmail.com"
    }

];

db.Business.remove({})
  .then(() => db.Business.collection.insertMany(businessSeed))
  .then(data => {
    console.log(data.result.n + " business records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " user records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


