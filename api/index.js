const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index');

app.use(express.json());
app.use(morgan('dev'));
app.use(
	cors({
		origin: '*',
	})
);

app.use('/', routes);

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
