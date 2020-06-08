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
    pushPastReservation: function (req, res) {
        db.User.findById({ _id: req.params.id })
            .then((userModel) => {
                console.log(userModel);
                const filteredOut = [];
                const filteredIn = [];
                console.log('delete reservatoin')
                // console.log(userModel.reservations)
                // console.log(req.body.customerIds[0])
                for (let i = 0; i < userModel.reservations.length; i++) {
                    if (userModel.reservations[i]._id === req.body.resId) {
                        filteredIn.push(userModel.reservations[i])
                    } else {
                        console.log(userModel.reservations[i]);
                        filteredOut.push(userModel.reservations[i]);
                    }
                    // res.json(filteredOut);
                }

                db.User.findByIdAndUpdate(
                    { _id: req.params.id },
                    {
                        $set: {
                            reservations: filteredOut,
                        },
                        $push: {
                            pastReservations: filteredIn
                        }
                    },
                    { new: true }
                )
                    .then((dbModel) => {
                        console.log(dbModel)
                        res.json(dbModel);
                    })
                    .catch((err) => res.status(422).json(err));

                // db.User.findByIdAndUpdate(
                //     { _id: req.params.id },
                //     {
                //         $set: {
                //             reservations: filteredOut,
                //         },
                //     },
                //     { new: true }
                // )
                //     .then((userResponse) => {
                //         console.log("peter", userResponse)
                //     })
                //     .catch((err) => res.status(422).json(err));
                //     res.json(userResponse)

            })

            .catch((err) => console.log(err));
    },
    deleteUserReservation: function (req, res) {
        db.User.findById({ _id: req.params.id })
            .then((userModel) => {
                console.log(userModel);
                const filteredOut = [];
                console.log('delete reservatoin')
                // console.log(userModel.reservations)
                // console.log(req.body.customerIds[0])
                for (let i = 0; i < userModel.reservations.length; i++) {
                    if (userModel.reservations[i]._id !== req.body.resId) {
                        console.log(userModel.reservations[i]);
                        filteredOut.push(userModel.reservations[i]);
                    }
                }
                // res.json(filteredOut);
                db.Business.findById(req.body.businessId)
                    .then(busModel => {
                        const filtered = busModel.reservations.filter(element => {
                            return element.time === req.body.time && element.date === req.body.date
                        });
                        const updatedReservations = [];
                        for (let i = 0; i < busModel.reservations.length; i++) {
                            if (busModel.reservations[i]._id !== filtered[0]._id) {
                                console.log(busModel.reservations[i]);
                                updatedReservations.push(busModel.reservations[i]);
                            }
                        }
                        db.Business.findByIdAndUpdate({ _id: busModel._id },
                            {
                                $set: {
                                    reservations: updatedReservations
                                }
                            },
                            { new: true }
                        ).then((newRes) => {
                            console.log("hi", newRes)
                            res.json(newRes);
                        }).catch((err) => res.status(422).json(err));
                    })
                    .catch((err) => res.status(422).json(err));

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

                // res.json(filteredOut);

            })
            .catch((err) => console.log(err));
        // res.send("Should've worked")

    },
};
