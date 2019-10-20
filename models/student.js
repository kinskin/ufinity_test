const Sequelize = require('sequelize');

module.exports = (sequelize)=>{
    let Student = sequelize.define('Student', {
        studentId:{
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
        }
    },{});

    Student.associate = (models) =>{
        Student.belongsTo(models.Teacher, {
            foreignKey: 'teacherId',
            targetKey: 'teacherId'
        });
    };
    return Student;
};