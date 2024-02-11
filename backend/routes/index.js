const express = require('express');
const router = express.Router();
const priceController = require('../controllers/PriceController');
const blockInfoController = require('../controllers/BlockInfoController');
const addressController = require('../controllers/AddressController');

router.get('/address', addressController.getAddressDetails);

router.get('/getblockinfo', blockInfoController.getblockinfo);

router.get('/getethprice', priceController.getPrice);

module.exports = router;
