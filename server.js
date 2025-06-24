const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./routes/car.route');
const db = require('./model/index');

require('dotenv').config();

const app = express();

// Initial template engine
app.engine('.hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// Initial router
app.use('/car', router);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await db.sequelize.sync();
    
    app.listen(PORT, (err) => {
      console.log(`Server running on ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}

start();