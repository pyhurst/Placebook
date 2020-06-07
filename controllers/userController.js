const db = require("../models");
const shortid = require('shortid');

module.exports = {
    addUserReservation: function (req, res) {
        const obj = {
            _id: shortid.generate(),
            date: req.body.date,
            time: req.body.time,
            businessId: req.body.businessId,
            businessName: req.body.businessName
        };
        db.User.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $push: {
                    reservations: obj,
                },
            },
            { new: true }
        )
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    deleteUserReservation: function (req, res) {
        db.User.findById({ _id: req.params.id })
            .then((userModel) => {
                console.log(userModel);
                const filteredOut = [];
                console.log('delete reservatoin')
                console.log(userModel.reservations)
                // console.log(req.body.customerIds[0])
                for (let i = 0; i < userModel.reservations.length; i++) {
                    if (userModel.reservations[i]._id !== req.body.resId) {
                        console.log(userModel.reservations[i]);
                        filteredOut.push(userModel.reservations[i]);
                    }
                }
                // res.json(filteredOut);
                db.User.findByIdAndUpdate(
                    { _id: req.params.id },
                    {
                        $set: {
                            reservations: filteredOut,
                        },
                    },
                    { new: true }
                )
                    .then((dbModel) => res.json(dbModel))
                    .catch((err) => res.status(422).json(err));
            })
            .catch((err) => console.log(err));
    },
};
