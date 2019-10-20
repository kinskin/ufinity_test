const Student = require('../models/index').Student;

module.exports.create = (req,res) => {
    let studentEmail = req.params.studentName+'@school.com'
    let newStudent = Student.create({studentName: req.params.studentName, studentEmail: studentEmail, teacherId: req.params.id}).then(data=> console.log(data))
}


module.exports.index = (req,res) => {
    let info = {
        students: []
    }
    let allStudent = Student.findAll().then(data => data.forEach((data)=>{
        info.students.push(data.dataValues)
    }))
    .then(() => {res.send(info)})
}