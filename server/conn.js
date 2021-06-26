const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"})

const DB = process.env.DATABASE 

mongoose.connect(DB,{useNewUrlParser:true,useFindAndModify:false,
      useCreateIndex:true,
      useUnifiedTopology:true}).then(()=>{
            console.log("connection succesfull")
      }).catch((err)=>{
            console.log("err")
      })