'use strict';
const {
  Model
} = require('sequelize');
const Serializer = require('sequelize-to-json')

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      models.Book.belongsTo(models.Author, {
        foreignKey: 'AuthorId',
        as: 'author',
        foreignKeyConstraint: true })
    }
  };
  Book.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });

  Book.scheme = () => {
    return {
      include: ['@all', 'author'],
      assoc: {
        author: { include: ['@all']}
      }
    }
  }
  return Book;
};
