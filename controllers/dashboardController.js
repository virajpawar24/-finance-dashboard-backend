const mongoose = require("mongoose");
const Transaction = require("../models/transaction");


// ✅ SUMMARY API
exports.getSummary = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await Transaction.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId)
        }
      },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" }
        }
      }
    ]);

    let income = 0;
    let expense = 0;

    result.forEach(item => {
      if (item._id === "income") income = item.total;
      if (item._id === "expense") expense = item.total;
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      netBalance: income - expense
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// ✅ CATEGORY-WISE STATS (CORRECT)
exports.getCategoryStats = async (req, res) => {
  try {
    const userId = req.user.id;

    const stats = await Transaction.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId)
        }
      },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    res.json(stats);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};