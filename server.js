 const express = require('express');
 const app = express();
const db = require('./db');
const bodyparser = require('body-parser');
const StudentRoute = require('./routes/Student_route');

const PORT = 3000;


app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send('THIS IS THE HOME DIRECTRY');
    
});

// Api Calling 
app.use('/Student',StudentRoute);



// Server listening to this Port

 app.listen(PORT ,()=>{
    console.log('Server is running on Port ',PORT);
 })