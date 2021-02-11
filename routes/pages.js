const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
    res.render('index.hbs');
});

router.get('/register',(req,res) => {
    res.render('register.hbs');
});

router.get('/login',(req,res) => {
    res.render('login.hbs');
});

router.get('/home',(req,res) => {
    res.render('home.hbs');
});
router.get('/cancel',(req,res) => {
    res.render('cancel.hbs');
});

router.get('/book',(req,res) => {
    res.render('book.hbs');
});

module.exports = router;