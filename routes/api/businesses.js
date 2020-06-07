const router = require("express").Router();
const placeController = require("../../controllers/placeController");

// Matches with "/api/businesses"
router.route("/all").get(placeController.findAll).post(placeController.create);

// matches /api/businesses/add, add a new business
// router
//     .route("/add")
//     .post(placeController.create);
// router.route('/protected')
//     .get(function(req, res) {
//         if (req.user) {
//             //access granted
//         } else {
//             // send away
//         }
//     })

// router.route("/reserve/:id")
//     .post(placeController.updateReservation)
// // .get(placeController.findReservation)

// router.route("/reservation/:id")
//     .post(placeController.findReservation)

router.route("/add").post(placeController.create);

router.route("/post/:id")
    .post(placeController.findBusiness);





// Matches with "/api/businesses/:id"
router.route("/:id")
    .get(placeController.findOne)
    .post(placeController.addReservation);
//   .put(placeController.update)
//   .delete(placeController.remove);

module.exports = router;
