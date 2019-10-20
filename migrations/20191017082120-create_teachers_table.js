'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('teachers',{
        teacherId: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        teacherName: Sequelize.STRING(255),
        teacherEmail: Sequelize.STRING(255),
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    },
    {
        timestamps: true,
    })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('teachers')
  }
};