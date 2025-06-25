const { Router } = require('express');
const { getAllCars, addNewCar, getCarById } = require('../controllers/car.controller');

const router = Router();

router.get('/', getAllCars);
router.post('/add', addNewCar);
router.get('/:id', getCarById);

module.exports = router;