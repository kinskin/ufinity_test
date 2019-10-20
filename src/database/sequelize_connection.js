import Sequelize from 'sequelize';

const sequelize = new Sequelize('teachers','root','',{
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
});

export default sequelize;
global.sequelize = sequelize;