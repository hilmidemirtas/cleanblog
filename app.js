const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const ejs = require('ejs');

const app = express();

//Connect
mongoose.connect('mongodb://localhost/CleanBlog');

//template
app.set("view engine", "ejs");

//middlewares

app.use(express.static('public'));


//routes
app.get('/', (req, res) => {
    res.render('index')
});
app.get('/index', (req, res) => {
    res.render('index')
});
app.get('/about', (req, res) => {
    res.render('about')
});
app.get('/add_post', (req, res) => {
    res.render('add_post')
});
app.get('/post', (req, res) => {
    res.render('post')
});


const port = 3000;

app.listen(port, () => {
    console.log(`sunucu ${port}'da başlatıldı..`)
});

