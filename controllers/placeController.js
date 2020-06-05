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
    console.log(req.body);
    db.Business.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  addReservation: function (req, res) {
    console.log(shortid.generate());
    db.Business.findById({ _id: req.params.id })
      .then((dbModel) => {
        console.log(dbModel);
        console.log(req.body)

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
        console.log(filtered)
        if (filtered.length === 1) {
          console.log('need to push customerid to timeslot')
          filtered[0].customerIds.push(req.body.customerIds[0]);
          console.log(filtered);
          db.Business.updateOne({ _id: dbModel._id, "reservations._id": filtered[0]._id }, 
            {
              $set: {
                reservations: filtered[0]
              }
            }
            ,{ new: true }
          ).then((newRes) => {
            console.log("line 48" + newRes);
            res.json(newRes)
          }).catch((err) => res.status(422).json(err));
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
            res.json(newRes)
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
  updateReservation: function (req, res) {
    db.Business.findOneAndUpdate({ _id: req.params.id, "reservations.time": req.body.time },
      {
        $set: {
          "reservations.$.capacity": req.body.capacity,
          "reservations.$.customerIds": req.body.customerIds,
        }
      },
      { new: true }
    ).then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findReservation: function (req, res) {
    console.log(req.body)
    db.Business.findOne({ _id: req.params.id, "reservations.time": req.body.time, "reservations.date": req.body.date })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
  // conditionalUpdate: function (req, res) {
  //   db.Business.findById({ _id: req.params.id })
  //     .then((dbModel) => {
  //       const newResult = dbModel.data.reservations.filter(e => {
  //         return e.time === req.body.time;
  //       })
  //       res.json(newResult)
  //     })
  //     .catch((err) => res.status(422).json(err));
  // }
};
