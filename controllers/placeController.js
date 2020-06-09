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
    db.Business.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  addReservation: function (req, res) {
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
        if (filtered.length === 1 && filtered[0].customerIds.length < filtered[0].capacity) {
          const filteredOut = [];
          const array = dbModel;

          for (let i = 0; i < array.reservations.length; i++) {
            if (array.reservations[i]._id !== filtered[0]._id) {
              filteredOut.push(array.reservations[i]);
            }
          }

          filtered[0].customerIds.push(req.body.customerIds[0]);
          const newCapacity = filtered[0].capacity - filtered[0].customerIds.length;
          filteredOut.push(filtered[0]);

          db.Business.findByIdAndUpdate({ _id: dbModel._id },
            {
              $set: {
                reservations: filteredOut
              }
            },
            { new: true }
          ).then((newRes) => {
            const todaysReservations = [];
            for (let i = 0; i < newRes.reservations.length; i++) {
              if (newRes.reservations[i].date === req.body.date) {
                todaysReservations.push(newRes.reservations[i]);
              }
            }
            res.json({
              business: newRes,
              todaysReservations: todaysReservations
            });
          }).catch((err) => res.status(422).json(err));
        } else if (filtered.length === 1 && filtered[0].customerIds.length >= filtered[0].capacity) {
          res.send("sorry capacity is filled for timeslot!")
        } else {
          db.Business.findByIdAndUpdate({ _id: dbModel._id },
            {
              $push: {
                reservations: obj
              }
            },
            { new: true }
          ).then((newRes) => {
            res.json({ business: newRes })
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
      .then((dbModel) => {
        res.json(dbModel)
      })
      .catch((err) => res.status(422).json(err));
  },
  findOneBiz: function (req, res) {
    db.Business.findOne({ ownerId: req.params.id })
      .then(bizModel => {
        const todaysReservations = [];
        for (let i = 0; i < bizModel.reservations.length; i++) {
          if (bizModel.reservations[i].date === req.body.date) {
            todaysReservations.push(bizModel.reservations[i]);
          }
        }
        res.json({
          business: bizModel,
          todaysReservations: todaysReservations
        })
      })
      .catch((err) => res.status(422).json(err));
  },
  findBusiness: function (req, res) {
    db.Business.findById({ _id: req.params.id })
      .then((dbModel) => {
        const todaysReservations = [];
        for (let i = 0; i < dbModel.reservations.length; i++) {
          if (dbModel.reservations[i].date === req.body.date) {
            todaysReservations.push(dbModel.reservations[i]);
          }
        }
        res.json({
          business: dbModel,
          todaysReservations: todaysReservations
        })
      })
      .catch((err) => res.status(422).json(err));
  },
};
