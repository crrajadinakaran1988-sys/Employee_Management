const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');

const routes = require('./routes/expense.routes');
const authRoutes = require('./routes/auth.routes');
const errorHandler = require('./middlewares/error.middleware');


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/', authRoutes);
app.use('/', routes);
app.use(errorHandler);

module.exports = app;