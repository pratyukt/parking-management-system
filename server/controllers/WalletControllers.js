const Wallet = require("../models/WalletModels");

const getWalletBalance = async (req, res) => {
    try {
        const wallet = await Wallet.findOne({ 
            _id: req.params._id });
        if (!wallet) {
            return res.status(404).json({ message: "Wallet not found" });
        }
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ message: "Error fetching wallet balance", error: error.message });
    }
};


const addMoneyToWallet = async (req, res) => {
    try {
        const { _id } = req.params;
        const { amount } = req.body;

        if (amount <= 0) {
            return res.status(400).json({ message: "Invalid amount" });
        }

        let wallet = await Wallet.findOne({ _id });

        if (!wallet) {
            wallet = await Wallet.create({ _id, balance: amount });
        } else {
            wallet.balance += amount;
            await wallet.save();
        }

        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ message: "Error adding money to wallet", error: error.message });
    }
};

module.exports = {
    getWalletBalance,
    addMoneyToWallet};