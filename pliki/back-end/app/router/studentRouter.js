const express = require('express');

const student = require('../controller/student.controller')

const router = express.Router();

router.post('/all', function (req, res) {
    student.list(function (err, students) {
        if (err) res.send(err);
        res.render('/', { students });
    });
});


router.get('/add', function (req, res) {
    res.send('dodani')
})

router.post('/add', function (req, res) {
    student.add(req.body, function (err, student) {
        if (err) res.send(err);
        res.send(student)
    })
})
router.get('/delate/:id', function (req, res) {
    student.delete(req.params.id, function (err, student) {
        if (err) res.send(err)
        res.send('Usunieto użytkownika')
    })
})
router.get('/upodate/:id', function(req,res){
    student.get(req.params.id,function(err, student){
        if(err) res.send(err)
        res.send('zaktuaizowano',student)
    })
})
module.exports = router;