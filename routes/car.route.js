const { Router } = require('express');
const { getAllCars } = require('../controllers/car.controller');

const router = Router();

router.get('/', getAllCars);

module.exports = router;