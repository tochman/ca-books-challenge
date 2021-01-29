'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Books', 'AuthorId', Sequelize.INTEGER)
    await queryInterface.addConstraint('Books', {
      fields: ['AuthorId'],
      references: {
        table: 'Authors',
        field: 'id',
        as: 'author'
      },
      type: 'foreign key',
      name: 'fk_author',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Books', 'authorId'
    )
  }
};
