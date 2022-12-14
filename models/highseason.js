'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class highSeason extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      highSeason.belongsTo(models.room, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  highSeason.init(
    {
      description: DataTypes.STRING,
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'highSeason',
    }
  );
  return highSeason;
};
