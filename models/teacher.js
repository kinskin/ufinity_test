const Sequelize = require('sequelize');

module.exports = (sequelize)=>{
    let Teacher = sequelize.define('Teacher', {
        teacherId:{
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        teacherName: Sequelize.STRING(255),
        teacherEmail: Sequelize.STRING(255),
    },{});

    Teacher.associate = (models) =>{
        Teacher.hasMany(models.Student, {
            foreignKey: 'teacherId',
            sourceKey: 'teacherId'
        });
    };
    return Teacher;
};