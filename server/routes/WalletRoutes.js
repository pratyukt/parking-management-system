// routes/WalletRoutes.js
const express = require('express');
const { getWalletBalance,  addMoneyToWallet} = require("../controllers/WalletControllers");
const { protect } = require('../middlewares/Jwtmiddleware');

const router = express.Router();

// Get wallet balance
router.get('/balance/:_id', protect, getWalletBalance);

// Add money to wallet
router.post('/add/:_id', protect,addMoneyToWallet);


module.exports = router;
