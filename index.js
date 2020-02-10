const express = require('express');
const bodyParser = require("body-parser");
const { router } = require('./src/router');

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.render('index.html');
});

app.use('/', router);

const port = 3000;
app.listen(port, function () {
	console.log('Server', process.pid, 'listening on port', port);
});
