const router = require("express").Router();
const placeController = require("../../controllers/placeController");

// Matches with "/api/businesses"
router
    .route("/")
    .get(placeController.findAll)
    .post(placeController.create);

// matches /api/businesses/add, add a new business
// router
//     .route("/add")
//     .post(placeController.create);

// Matches with "/api/businesses/:id"
// router
//     .route("/:id")
//     .get(placeController.findById)
//     .put(placeController.update)
//     .delete(placeController.remove);

router
    .route("/add")
    .post()
module.exports = router;