const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./api-routes');
const cors = require('cors');

const app = express();
app.set('json spaces', 2);

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

apiRoutes(app);

module.exports = app;
