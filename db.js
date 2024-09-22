const mongoose = require('mongoose');
require('dotenv').config();


 const URL = process.env.DB_URL;
mongoose.connect(URL);

const db = mongoose.connection;


db.on('connected',()=>{
    console.log('Db is connected to Mongodb server');
})
db.on('disconnected',()=>{
    console.log('Db is disconnected');
})
db.on('error',(err)=>{
    console.log(err);
})


module.exports = db;