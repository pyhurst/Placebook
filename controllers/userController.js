const db = require("../models");

module.exports = {
  addUserReservation: function (req, res) {
    db.User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          reservations: req.body,
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