const db = require("../model/index");

const Car = db.car;

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll({
      raw: true
    })
    
    res.render('cars/my-cars', {
      cars: cars,
      title: 'My Cars'
    })
  } catch (error) {
    console.log(error);
  }
}

const addNewCar = async (req, res) => {
  try {
    const { imageUrl, name, desc } = req.body;

    await Car.create({
      imageUrl: imageUrl,
      name: name,
      desc: desc
    })

    res.redirect('/car');
  } catch (error) {
    console.log(error);
  }
}

const getCarById = async (req, res) => {
  try {
    const cars = await Car.findAll({
      where: { id: req.params.id },
      raw: true
    })
    
    res.render('cars/car', {
      cars: cars,
      title: 'My Car'
    })
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllCars,
  addNewCar,
  getCarById
}