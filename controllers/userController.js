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
    //   deleteUserReservation: function (req, res) {
    //     db.User.update(
    //       { _id: req.body.userid },
    //       {
    //         $pull: { reservations: { businessId: req.body.businessId } },
    //       }
    //     );
    //   },
};
