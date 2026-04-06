
const Transaction = require("../models/transaction");
const mongoose = require("mongoose");
// CREATE
exports.createTransaction = async (req, res) => {
  try {
    const { amount, type, category, date, note } = req.body;

    if (!amount || !type) {
      return res.status(400).json({ message: "Amount and type required" });
    }

    const transaction = await Transaction.create({
      amount,
      type,
      category,
      date,
      note,
      userId: new mongoose.Types.ObjectId(req.user.id)
    });

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ (GET ALL + FILTER)
exports.getTransactions = async (req, res) => {
  try {
    const { type, category } = req.query;

    let filter = { userId: req.user.id };

    if (type) filter.type = type;
    if (category) filter.category = category;

    const transactions = await Transaction.find(filter).sort({ date: -1 });

    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );

    if (!transaction) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!transaction) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};