const models = require("../database/models");

const createCar = async (req, res) => {
    console.log('creating car');

    try {
        const car = await models.Car.create(req.body);
        return res.status(201).json({ car });
    }
    catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const deleteCar = async (req, res) => {
    console.log('deleting car...');

    try {
        const car = await models.Car.findOne({ where: { id: req.params.id } });
        if (car) {
            console.log(car);
            await car.destroy();
        }
        else {
            return res.status(200).json({ "error ": req.params.id + " no existe" });
        }
        return res.status(200).json({ "deleted ": req.params.id });
    }
    catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const updateCar = async (req, res) => {
    console.log('updating Car...');

    try {
        const car = await models.Car.findOne({ where: { id: req.params.id } });
        if (car) {
            console.log(car);
            car.matricula = req.body.matricula;
            car.modelo = req.body.modelo;
            car.marca = req.body.marca;
            car.age = req.body.age;
            car.color = req.body.color;
            car.cilindros = req.body.cilindros;
            await car.save();
        }
        else {
            return res.status(200).json({ "error ": req.params.id + " no existe" });
        }

        return res.status(200).json({ "updated ": car });
    }
    catch (error) {
        return res.status(500).send({ error: error.message });
    }
};



const getAllCars = async (req, res) => {
    console.log('getting Car');

    try {
        const cars = await models.Car.findAll({
            include: []
        });

        return res.status(200).json({ cars });
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
};


const getCar = async (req, res) => {
    console.log('updating Car...');

    try {
        const car = await models.Car.findOne({ where: { id: req.params.id } });
        if (!car) {
            return res.status(200).json({ "error": req.params.id + " no existe" });
        }

        return res.status(200).json({ "car": car });
    }
    catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = {
    createCar,
    getAllCars,
    deleteCar,
    updateCar,
    getCar
};

