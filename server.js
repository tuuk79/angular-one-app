const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test");

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/testing123', function (req, res) {
	res.send('hi Riley!');
});

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
});

app.post("/addproduct", (req, res) => {

});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});