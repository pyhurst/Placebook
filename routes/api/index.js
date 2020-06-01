const router = require("express").Router();
const busiRoutes = require("./businesses");

// business routes
router.use("/businesses", busiRoutes);

module.exports = router;
