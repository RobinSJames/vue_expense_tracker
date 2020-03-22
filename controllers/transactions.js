const Transaction = require('../models/transactions');

// @description Get all transactions
// @route GET /api/v1/transactions
// 
exports.getTransactions = async (req, res, next) => {
  try {
		const transactions = await Transaction.find();
		return res.status(200).json({
			success: true,
			count: transactions.length,
			data: transactions
		})
	} catch (error) {
		return res.status(500).json({
			success: false,
			errorMessage: 'Server Error'
		})
	}
}
// @description Add a single transaction
// @route POST /api/v1/transactions
// 
exports.addTransaction = async (req, res, next) => {
	try {
		const { text, amount } = req.body;
		const transaction = await Transaction.create(req.body);
		return res.status(201).json({
			success: true,
			data: transaction
		})
	} catch (error) {
		if(error.name === 'ValidationError') {
			const messages = Object.values(error.errors).map(element => element.message);
			return res.status(400).json({
				success: false,
				errorMessage: messages
			})
		} else {
			return res.status(500).json({
				success: false,
				errorMessage: 'Server Error'
			})
		}
	}
	
}

// @description Delete a transaction
// @route DELETE /api/v1/transactions/:id
// 
exports.deleteTransaction = async (req, res, next) => {
	try {
		const transaction = await Transaction.findById(req.params.id);
		if(!transaction) {
			return res.status(404).json({
				success: false,
				errorMessage: 'The transaction you\'re looking for is not on our server'
			})
		}
		await transaction.remove();
		return res.status(200).json({
			success: true,
			data: {}
		})
	} catch (error) {
		return res.status(500).json({
			success: false,
			errorMessage: 'Server Error'
		})
	}
}