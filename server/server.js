const dotenv = require('dotenv');
const express = require('express')
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
const app = express();
require("./conn")
const customermodel = require("./model/customer")
const AdministratorModel=require('./model/administrator')
app.use(express.json());


const PORT=process.env.PORT



app.get('/', (req, res) =>{
      res.send("nothing is impossible")
})


app.post('/registercustomer', async(req, res) =>{
      const ncustomermodel = new customermodel ({
            name:req.body.name,
            phone:req.body.phone,
            address:req.body.address
      })
      try{
            const postdata= await ncustomermodel .save();
            res.status(200).json({msg:postdata});
      }
      catch{
            res.status(400).json({msg:errror});
      }
})
app.post('/customersignin', async(req,res)=>{
      
       try{
         const {name,phone} = req.body;
         if(!name || !phone){
               return res.status(400).json({error:"plz fill all"})
         }
         const userLogin = await User.findOne({phone:phone});
        // console.log(userLogin)
        if(userLogin){
         const isMatch = await bcrypt.compare(phone,userLogin.phone)
        
        const token =await userLogin.generateAuthToken();
        
        console.log(token);
        res.cookie("jwtoken",token,{
              expires:new Date(Date.now()+25892000000),
              httpOnly:true
        });
        
         if(!isMatch){
          res.json({message:"invalid credintial pass"})
         }else{
          res.json({message:"user signin successfull"})
    }
        }else{
         res.json({message:"invalid credintial"})
        }
        
        
   }catch(err){
         console.log(err);
   }
    })
app.get('/getcustomer',async(req, res)=>{
      try{
           const getcustomer= await customermodel.find();
           res.status(200).json(getcustomer)
      }catch{
            res.status(400).json({msg:"error while getting data"})
      }
})


app.put('/updatecustomer/:id', async(req, res)=>{
      try{
       const updatecustomer = await  customermodel.updateOne({_id:req.params.id},{ $set : {name:req.body.name,  phone:req.body.phone} })
       res.status(200).json({data:updatecustomer})
       } catch  {
            res.status(400).json({err:"error while update"})
      }
})

app.delete('/deletecustomer/:id', async(req, res)=>{
      try{
            const deletecustomer = await customermodel.deleteOne({_id:req.params.id})
            res.status(200).json({data:deletecustomer})
      }catch{
            res.status(400).json({msg:"error while delete"})
      }
})



app.post('/registeradmin',async(req, res)=>{
      const nAdministratorModel = new AdministratorModel({
            name:req.body.name,
            phone:req.body.phone,
            address:req.body.address
      })
      try{
             const admindata = await nAdministratorModel.save();
             res.status(200).json({msg:admindata})
      }catch{
           res.status(400).json({msg:err})
      }
})
app.post('/adminsignin', async(req,res)=>{
      
      try{
        const {name,phone} = req.body;
        if(!name || !phone){
              return res.status(400).json({error:"plz fill all"})
        }
        const userLogin = await User.findOne({phone:phone});
       // console.log(userLogin)
       if(userLogin){
        const isMatch = await bcrypt.compare(phone,userLogin.phone)
       
       const token =await userLogin.generateAuthToken();
       
       console.log(token);
       res.cookie("jwtoken",token,{
             expires:new Date(Date.now()+25892000000),
             httpOnly:true
       });
       
        if(!isMatch){
         res.json({message:"invalid credintial pass"})
        }else{
         res.json({message:"user signin successfull"})
   }
       }else{
        res.json({message:"invalid credintial"})
       }
       
       
  }catch(err){
        console.log(err);
  }
   })
app.get('/getadmininfo',async(req, res)=>{
      try{
           const getadmininfo= await AdministratorModel.find();
           res.status(200).json(getadmininfo)
      }catch{
            res.status(400).json({msg:"error while getting admin data"})
      }
})
app.put('/updatetadmininfo/:id', async(req, res)=>{
      try{
       const updateadmin = await  AdministratorModel.updateOne({_id:req.params.id},{ $set : {name:req.body.name,  phone:req.body.phone} })
       res.status(200).json({data:updateadmin})
       } catch  {
            res.status(400).json({err:"error while update"})
      }
})
app.delete('/deleteadmin/:id', async(req, res)=>{
      try{
            const deleteadmin = await AdministratorModel.deleteOne({_id:req.params.id})
            res.status(200).json({data:deleteadmin})
      }catch{
            res.status(400).json({msg:"error while delete"})
      }
})


app.listen(PORT, ()=>{
console.log("listneing on port no 3001")
})