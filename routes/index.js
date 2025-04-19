const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/car', controllers.createCar);
router.get('/car', controllers.getAllCars);
router.get('/car/:id', controllers.getCar);
router.delete('/car/:id', controllers.deleteCar);
router.put('/car/:id', controllers.updateCar);


module.exports = router;


