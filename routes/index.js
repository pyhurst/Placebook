const businessController = require("../controllers/placeController");
const router = require("express").Router();

router
  .route("/api/business")
  .get(businessController.findAll)
  .post(postsController.create);

module.exports = router;
