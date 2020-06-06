const db = require("../models");
const shortid = require('shortid');


module.exports = {
  //business CRUD
  findAll: function (req, res) {
    db.Business.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("------------")
    console.log(req.body);
    db.Business.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  addReservation: function (req, res) {
    // console.log(shortid.generate());
    db.Business.findById({ _id: req.params.id })
      .then((dbModel) => {
        const obj = {
          _id: shortid.generate(),
          date: req.body.date,
          time: req.body.time,
          capacity: req.body.capacity,
          customerIds: req.body.customerIds
        };
        const filtered = dbModel.reservations.filter(element => {
          return element.time === req.body.time && element.date === req.body.date
        });
        // console.log('after filtered' + dbModel)
        // const filteredOut = dbModel.reservations.filter(element => {
        //   return element.time !== req.body.time && element.date !== req.body.date
        // });
        if (filtered.length === 1 && filtered[0].customerIds.length < filtered[0].capacity) {
          const customerArray = filtered[0].customerIds
          // console.log("customers", customerArray)
          // console.log("req.body.customerIds", req.body.customerIds)
          const send = res.send("sorry you are in that timeslot");
          for (let j = 0; j < customerArray.length; j++) {
            if(customerArray[j] === req.body.customerIds){
              return send;
            }
          }
          const filteredOut = [];
          console.log('need to push customerid to timeslot')
          console.log(dbModel.reservations)
          const array = dbModel;
          console.log(req.body.customerIds[0])
          for (let i = 0; i < array.reservations.length; i++) {
          //   for (let j = 0; j < array.reservations[i].customerIds.length; j++) {
          //     if(array.reservations[i].customerIds[j] === req.body.customerIds){
          //       return console.log("gotcha")
          //     }
          //   }
            if (array.reservations[i]._id !== filtered[0]._id) {
              console.log(array.reservations[i]);
              filteredOut.push(array.reservations[i]);
            }
          }
          console.log('after for ', filteredOut)
          filtered[0].customerIds.push(req.body.customerIds[0]);
          // console.log(filtered);
          // console.log(filteredOut);
          const newCapacity = filtered[0].capacity- filtered[0].customerIds.length;
          filteredOut.push(filtered[0]);
          // console.log(filteredOut)
          db.Business.findByIdAndUpdate({ _id: dbModel._id },
            {
              $set: {
                reservations: filteredOut
              }
            },
            { new: true }
          ).then((newRes) => {
            console.log("hi", newRes)
            // console.log(newCapacity);
            // newOjb.newCapacity = newCapacity;
            // console.log("bye", newObj)
            // res.json(newRes)
            res.json({
              business: newRes,
              capacity: newCapacity
            });
          }).catch((err) => res.status(422).json(err));
        } else if (filtered.length === 1 && filtered[0].customerIds.length >= filtered[0].capacity) {
          res.send("sorry capacity is filled for timeslot!")
        } else {
          console.log('need to create reservation slot')
          db.Business.findByIdAndUpdate({ _id: dbModel._id },
            {
              $push: {
                reservations: obj
              }
            },
            { new: true }
          ).then((newRes) => {
            res.json({business: newRes})
          }).catch((err) => res.status(422).json(err));
        }
      })
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Business.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOne: function (req, res) {
    db.Business.findById({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // updateReservation: function (req, res) {
  //   db.Business.findOneAndUpdate({ _id: req.params.id, "reservations.time": req.body.time },
  //     {
  //       $set: {
  //         "reservations.$.capacity": req.body.capacity,
  //         "reservations.$.customerIds": req.body.customerIds,
  //       }
  //     },
  //     { new: true }
  //   ).then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // findReservation: function (req, res) {
  //   console.log(req.body)
  //   db.Business.findOne({ _id: req.params.id, "reservations.time": req.body.time, "reservations.date": req.body.date })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // }
};
