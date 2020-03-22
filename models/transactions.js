const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text: {
		type: String,
		trim: true,
		required: [true, 'The description field is required']
	},
	amount: {
		type: Number,
		required: [true, 'Please add a positive or negative number']
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Transaction', TransactionSchema)