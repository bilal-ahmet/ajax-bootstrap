const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index.js');

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));

// static file tanımlama
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
app.use('/', indexRouter);

// start server
app.listen(3000, () => {
    console.log('server 3000 portunda çalışıyor...');
})