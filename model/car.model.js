module.exports = (sequelize, Sequelize) => {
  const Car = sequelize.define("car", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING(1000),
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );

  return Car;
};
