const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on ${PORT}`));