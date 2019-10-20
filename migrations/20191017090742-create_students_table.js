 'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students',{
        studentId: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        studentName: Sequelize.STRING(255),
        studentEmail: Sequelize.STRING(255),
        teacherId: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            foreignKey: true
        },
        suspension: {
            type: Sequelize.BOOLEAN(),
            allowNull:false,
            defaultValue: 0
        },
        notification: {
            type: Sequelize.BOOLEAN(),
            allowNull: false,
            defaultValue: 0
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    },
    {
        timestamps: true,
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('students')
  }
};