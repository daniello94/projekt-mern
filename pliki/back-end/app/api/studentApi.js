const express = require("express");
const router = express.Router();

const student = require('../controller/student.controller')


router.post('/all', function(req, res){
    student.list(function(err, students){
        if(err) {
            res.status(404);
            res.json({
                error: 'student not found'
            });
        } else {
            res.json(students);
        } 
    });
});


router.post('/add', function (req, res) {
    console.log(req.body);
    student.add(req.body, function (err, student) {
        if (err) {
            res.status(404);
            res.json({
                error: 'Student not created'
            })
        } else {
            res.json(student)
        }
    })
})

router.delete('/delete/:id',function(req,res){
    student.delete(req.params.id,function(err,data){
        if(err){
            res.status(404);
            res.json({
                error:"Student not found"
            })
        }else {
            res.json(data)
        }
    })
})
router.put('/upodate/:id', function(req,res){
    student.upodate(req.params.id,req.body,function(err,data){
        if(err){
            res.status(404);
            res.json({
                error:"student not fount"
            })
        }else{
            res.json(data)
        }
    })
})
module.exports = router;