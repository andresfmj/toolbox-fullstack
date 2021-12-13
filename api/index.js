const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes/index');

app.use(express.json());
app.use(morgan('dev'));

app.use('/', routes);

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
