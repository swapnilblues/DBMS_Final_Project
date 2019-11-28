var express = require('express');
var router = express.Router();

var hotel_controller = require('../controllers/hotel');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', hotel_controller.test);

router.post('/create', hotel_controller.hotel_create);

router.get('/:id', hotel_controller.hotel_details);

router.put('/:id/update', hotel_controller.hotel_update);

router.delete('/:id/delete', hotel_controller.hotel_delete);

module.exports = router;