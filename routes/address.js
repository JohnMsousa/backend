<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

router.post("/", addressController.createAddress);

module.exports = router;
=======
const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.post('/', addressController.createAddress);

module.exports = router;
>>>>>>> 83fc9f6ac2240bdf660e5491eca99a5cc8202431
