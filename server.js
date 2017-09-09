const express = require('express')
const app = express()

app.use(express.static(__dirname));

app.get('/', function (req, res) {
	var options = {
		root: __dirname,
		dotfiles: 'allow',
		headers: {
			'x-timestamp': Date.now(),
			'x-sent': true
		}
	};

	var fileName = 'index.html';
	res.sendFile(fileName, options, function (err) {
		if (err) {
			next(err);
		} else {
			console.log('Sent:', fileName);
		}
	});
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})