const Student = require('../models/Student_model');
const express = require('express');
const router = express.Router();



router.get('/',(req,res)=>{
    res.send('This is Home Api');

})

router.post('/user', async(req,res)=>{
    try{
        const data = req.body;
        const newStudent = new Student(data);
        const response = await newStudent.save(data);
        console.log('Data Saved');
        res.status(200).json(response);


    }catch(err){
        console.log(err);
        res.status(500).json({
            error : 'Internal server Error'
        })
    }
})


router.get('/user',async(req,res)=>{
    try{

        const data =req.body;
        const newStudent = new Student(data);
        const response = await Student.find();

        console.log('Data Fatched');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({
            error : 'Internal server Error'
        })

    }
})
module.exports = router;