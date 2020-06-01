const router = require("express").Router();
const userRoutes = require("./user");
const busiRoutes = require("./businesses");

router.use("/user", userRoutes);

// business routes
router.use("/businesses", busiRoutes);

module.exports = router;
