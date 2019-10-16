'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
        timestamps: false
    }
  );
  return user;
};