module.exports = (app) => {

    const controllersTeacher = require('./controllers/controllersTeacher.js');

    app.get('/teacher/:id', controllersTeacher.show);
    app.get('/teacher/create/:teacherName', controllersTeacher.create);
    app.get('/teachers', controllersTeacher.index);


    const controllersStudent = require('./controllers/controllersStudent.js');
    app.get('/teacher/:id/students/create/:studentName', controllersStudent.create);
    app.get('/students', controllersStudent.index)

};