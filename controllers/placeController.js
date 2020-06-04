const db = require("../models");

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
  update: function (req, res) {
    db.Business.findOneAndUpdate({ _id: req.params.id }, { $push: { reservations: req.body } },{new: true})
      .then((dbModel) => res.json(dbModel))
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
