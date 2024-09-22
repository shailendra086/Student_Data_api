const mongoose = require('mongoose');
require('dotenv').config();


//const URL = 'mongodb://127.0.0.1:27017/Student';
//MongodbUrl 
 const URL = process.env.DB_URL;
mongoose.connect(URL);

const db = mongoose.connection;


db.on('connected',()=>{
    console.log('Db is connected');
})
db.on('disconnected',()=>{
    console.log('Db is connected');
})
db.on('error',(err)=>{
    console.log(err);
})


module.exports = db;