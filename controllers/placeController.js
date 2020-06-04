const db = require("../models");
// const { uuid } = require('uuidv4');
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
      // { 
      //   $push: 
      //   { 
      //     reservations: req.body 
      //   } 
      // },
      // {new: true})
      .then((dbModel) => {
        console.log(dbModel);
        const obj = {};
        for (let i = 0; i < dbModel.reservations.length; i++) {
          if(dbModel[i].date === req.body.date){
            if(dbModel[i].time === req.body.time){
              if(dbModel[i].customerIds.length <= dbModel[i].capacity){
                // push customer id into customerids array
              } else {
                // sorry this spot is full, please sign up for another slot
              }
            } else {
              // create reservation object with necessary data
            }
          } else {
            // create reservation object with necessary data
          }
        }

        res.json(dbModel)
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
    db.Business.findOneAndUpdate({_id: req.params.id , "reservations.time": req.body.time}, 
      {
        $set: {
          "reservations.$.capacity": req.body.capacity,
          "reservations.$.customerIds": req.body.customerIds,
        }
      },
      {new: true}
    ).then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
  },
  findReservation: function (req, res) {
    console.log(req.body)
    db.Business.findOne({_id: req.params.id, "reservations.time": req.body.time, "reservations.date": req.body.date})
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
