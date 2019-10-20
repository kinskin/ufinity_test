const Teacher = require('../models/index').Teacher;
const Student = require('../models/index').Student;

let error = (error)=>{
    console.log('error', error)
}

module.exports.index = (req,res)=>{
    let info = {
        teacher: [],
    }
    let allTeachers = Teacher.findAll()
    .then(data => data.forEach((data)=>{
        info.teacher.push(data.dataValues)
    }))
    .finally(()=>{res.send(info)})
}

module.exports.create = (req,res)=>{
    let teacherEmail = req.params.teacherName+'@school.com'
    let newEmail = Teacher.create({teacherName: req.params.teacherName, teacherEmail: teacherEmail})
        .then(c=>res.redirect('/teachers'))
        .catch(error)
}

module.exports.show = (req,res)=>{
    let info = {
        teacher: '',
        students: []
    }
    let teacher = Teacher.findByPk(req.params.id)
        .then((data) => {info.teacher = data.dataValues})
        .then(()=>{
            let students = Student.findAll({
                where:{
                    teacherId:req.params.id
                }
            })
            .then(data => data.forEach((data)=>{
                info.students.push(data.dataValues)
            }))
            .finally(()=>res.send(info))
        })
        .catch(error)
}