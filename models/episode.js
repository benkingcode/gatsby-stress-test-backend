'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Episode.belongsTo(models.Show, {
        foreignKey: 'showId',
        onDelete: 'CASCADE',
      });
    }
  }
  Episode.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      showId: DataTypes.INTEGER,
      season: DataTypes.INTEGER,
      episode: DataTypes.INTEGER,
      duration: DataTypes.INTEGER,
      releaseDate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Episode',
    }
  );
  return Episode;
};
