
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

const {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction
} = require("../controllers/transactionController");

// 🔐 Role-based access control

// Only admin can create
router.post("/", auth, allowRoles("admin"), createTransaction);

// Admin + analyst can read
router.get("/", auth, allowRoles("admin", "analyst"), getTransactions);

// Only admin can update
router.put("/:id", auth, allowRoles("admin"), updateTransaction);

// Only admin can delete
router.delete("/:id", auth, allowRoles("admin"), deleteTransaction);

module.exports = router;