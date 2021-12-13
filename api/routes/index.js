const express = require('express');
const router = express.Router();

const getPalindrome = require('../services/palindrome');

router.get('/', (req, res) => {
	res.json({ message: 'API Fullstack - for toolbox' });
});

router.get('/iecho', (req, res) => {
	const { text } = req.query;
	if (text) {
		res.status(200).json({ text: getPalindrome(text) });
	} else {
		res.status(400).json({ error: 'no text' });
	}
});

module.exports = router;
