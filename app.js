
const express = require('express');
const cors=require('cors');
const sequelize=require('./util/database');
const app = express();



const userRoute=require('./routes/user');

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.use(userRoute);

sequelize.sync().then(result=>{
     app.listen(3000);
}).catch(err=>console.log(err));