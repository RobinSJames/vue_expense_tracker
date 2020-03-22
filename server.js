const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./db')

dotenv.config({ path: './config.env' });

connectDB();

const transactions = require('./routes/transactions')

const app = express();

app.use(express.json());
app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on ${PORT}`));