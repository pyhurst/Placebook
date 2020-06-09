const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/placebook");

const businessSeed = [
  {
    name: "UFC Gym",
    image: "https://clubsolutionsmagazine.com/wp-content/uploads/2017/12/16.jpg",
    category: "Gym",
    times: {
      open: 7,
      close: 21,
      timeslot_length: 60,
      capacity: 15,
    },
    address: "644 N Orleans St, Chicago, IL 60654",
    phone: "312-555-5555",
    city: "Chicago",
    ownerId: "5ed798003184ef1988a28b5a",
    reservations: [
      {
        time: "2 PM",
        date: "06/20/20",
        capacity: 15,
        customerIds: ["5ed8f5c1ff864a46106f2e09"],
      },
      {
        time: "5 PM",
        date: "06/20/20",
        capacity: 15,
        customerIds: ["5ed8f5c1ff864a46106f2e09"],
      },
      {
        time: "8 AM",
        date: "06/20/20",
        capacity: 15,
        customerIds: ["5ed8f5c1ff864a46106f2e09"],
      },
    ],
  },
  {
    name: "Chicago Public Library",
    image: "https://pbs.twimg.com/media/DayLQmOVMAA2etO.jpg",
    category: "Education",
    times: {
      open: 8,
      close: 17,
      timeslot_length: 60,
      capacity: 20,
    },
    address: "310 W Division St, Chicago, IL 60610",
    phone: "312-777-3333",
    city: "Chicago",
    ownerId: "5ed798003184ef1988a28b5b",
    reservations: [],
  },
  {
    name: "Museum of Contemporary Art",
    image: "https://assets-production.mcachicago.org/media/attachments/W1siZiIsIjIwMTgvMDEvMzAvMjEvNDQvOWEwMzk1NDEtYjhiNC00ZjM1LWFmMjgtMDVmN2JlNmNjM2QzIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iLHt9XV0/10909607c05_R1_MCA-Exteriors_0174.jpg?sha=efa10ccc39beaaca",
    category: "Education",
    times: {
      open: 10,
      close: 20,
      timeslot_length: 30,
      capacity: 75,
    },
    address: "220 E Chicago Ave, Chicago, IL 60611",
    phone: "312-434-4343",
    city: "Chicago",
    ownerId: "5ed798003184ef1988a28b5c",
    reservations: [],
  },
  {
    name: "Pinstripes Bowling",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/dd/f7/b3/pinstripes-chicago.jpg",
    category: "Entertainment",
    times: {
      open: 12,
      close: 23,
      timeslot_length: 60,
      capacity: 30,
    },
    city: "Chicago",
    ownerId: "5ed798003184ef1988a28b5d",
    address: "435 E Illinois St, Chicago, IL 60611",
    phone: "312-334-2222",
    reservations: [],
  },
  {
    name: "CorePower Yoga",
    image: "https://images.squarespace-cdn.com/content/v1/5bfc6a87f93fd4e73b6c3b29/1580414421273-TXLDZMPZ7YRP6XMF968V/ke17ZwdGBToddI8pDm48kAT_5OwHWIODJo-m1R2vBrMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc1BSSDNYpOOgf6WFGDhOUwth-ckpqd2asWxMoMH8DC68pVgjJeuOSirocRUPz19W0/corepoweryoga1.jpg",
    category: "Gym",
    times: {
      open: 8,
      close: 19,
      timeslot_length: 60,
      capacity: 20,
    },
    city: "Chicago",
    ownerId: "5ed798003184ef1988a28b5e",
    address: "227 E Ontario St Suite 202, Chicago, IL 60611",
    phone: "312-334-2222",
    reservations: [],
  },
  {
    name: "Custom Business",
    image: "https://i1.wp.com/nicfraternity.org/wp-content/uploads/2020/04/small-business.jpg?fit=1592%2C886&ssl=1",
    category: "Other",
    times: {
      open: 8,
      close: 19,
      timeslot_length: 30,
      capacity: 10,
    },
    city: "Chicago",
    ownerId: "5ed798003184ef1988a28b5f",
    address: "200 E Example St Suite 202, Chicago, IL 60610",
    phone: "312-345-4564",
    reservations: [],
  },
];

const userSeed = [
  {
    username: "johnsmith",
    password: "password1234",
    email: "jsmith@gmail.com",
    reservations: [
      {
        business: "CorePower Yoga",
        timeslot: "4 PM",
        date: "2020/06/01",
      },
    ],
  },
  {
    username: "janedoe",
    password: "mypassword",
    email: "jdoe1@gmail.com",
    reservations: [
      {
        business: "UFC Gym",
        timeslot: "9 AM",
        date: "2020/06/01",
      },
    ],
  },
  {
    username: "emilyresch",
    password: "emilyspass",
    email: "eresch@gmail.com",
    reservations: [
      {
        business: "UFC Gym",
        timeslot: "11 AM",
        date: "2020/06/01",
      },
    ],
  },
  {
    username: "philhurst",
    password: "philspass",
    email: "phil@gmail.com",
    reservations: [
      {
        business: "Museum of Contemporary Art",
        timeslot: "2 PM",
        date: "2020/06/03",
      },
    ],
  },
  {
    username: "blapete",
    password: "petespass",
    email: "peter@yahoo.com",
    reservations: [
      {
        business: "Pinstripes Bowling",
        timeslot: "1 PM",
        date: "2020/06/01",
      },
    ],
  },
  {
    username: "jimmyneutron",
    password: "candybars",
    email: "smartypants@gmail.com",
    reservations: [
      {
        business: "Chicago Public Library",
        timeslot: "2 PM",
        date: "2020/06/01",
      },
    ],
  },
  {
    username: "spiderman",
    password: "spiderpass",
    email: "shootwebs@gmail.com",
    reservations: [
      {
        business: "CorePower Yoga",
        timeslot: "8 AM",
        date: "2020/06/02",
      },
    ],
  },
  {
    username: "businessman",
    password: "password",
    email: "mybusiness@gmail.com",
  },
];

db.Business.remove({})
  .then(() => db.Business.collection.insertMany(businessSeed))
  .then((data) => {
    console.log(data.result.n + " business records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " user records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
