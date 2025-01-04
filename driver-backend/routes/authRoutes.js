const express = require('express');
const { register, login } = require('../controllers/authController');
const googleAuthController = require('../controllers/googleAuthController');
const icpAuthController = require('../controllers/icpAuthController');

const router = express.Router();

// Local authentication
router.post('/register', register);
router.post('/login', login);

// Google authentication
router.use('/google', googleAuthController);

// ICP authentication
router.use('/icp-login', icpAuthController);

module.exports = router;
