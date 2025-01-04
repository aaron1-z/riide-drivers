
const express = require('express');
const { getMap } = require('../controllers/mapController');

const router = express.Router();

router.get('/map', getMap);

module.exports = router;
