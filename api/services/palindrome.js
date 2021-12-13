const getPalindrome = (str) => {
	const reversed = str.split('').reverse().join('');
	return {
		isPalindrome: str === reversed,
		reversed,
	};
};

module.exports = getPalindrome;
