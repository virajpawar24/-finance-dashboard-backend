
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");
const {
  getSummary,
  getCategoryStats
} = require("../controllers/dashboardController");

// Dashboard: analyst + admin
router.get("/summary", auth, allowRoles("admin", "analyst"), getSummary);
router.get("/categories", auth, allowRoles("admin", "analyst"), getCategoryStats)
module.exports = router;