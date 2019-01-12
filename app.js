const express = require('express');
const path = require('path');
const logger = require('morgan');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const celebritiesRoutes = require('./routes/celebrities.router');
const PORT = process.env.PORT || 3000;

const app = express();

require('./config/db.config');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'));

app.use('/celebrities', celebritiesRoutes)

app.listen(PORT, () => console.info(`App listen at ${PORT} port`));