const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

const generateCrudRoutes = require('./routes/crudRoutes');
const articles = require('./models/').Articles;
const user = require('./models/').User;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.use('/articles', generateCrudRoutes(articles));
app.use('/users', generateCrudRoutes(user));

module.exports = app;
