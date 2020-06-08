const router = require("express").Router();
const placeController = require("../../controllers/placeController");

// Matches with "/api/businesses"
router.route("/all").get(placeController.findAll).post(placeController.create);


router.route("/add").post(placeController.create);

router.route("/find/:id").post(placeController.findOneBiz)

router.route("/post/:id")
    .post(placeController.findBusiness);


router.route("/add/reservation/:id")
    .post(placeController.addReservation);


// Matches with "/api/businesses/:id"
router.route("/:id")
    .get(placeController.findOne)
// .post(placeController.addReservation);
//   .put(placeController.update)
//   .delete(placeController.remove);

module.exports = router;
