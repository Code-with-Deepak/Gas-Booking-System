const express = require('express');
const authController = require('../controllers/auth.js');

const router = express.Router();

router.post('/register',authController.register );

router.post('/login',authController.login );

router.post('/book',authController.book );

router.post('/cancel',authController.cancel );

module.exports = router;