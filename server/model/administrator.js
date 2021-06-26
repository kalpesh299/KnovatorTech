const mongoose = require('mongoose');
const bycrypt =require("bcryptjs")
const jwt =require('jsonwebtoken')

const Adschema = mongoose.Schema({
      name: {
            type:String,
            require:true
      },
      phone : {
            type:Number,
            require:true,
            min:10
       },
       address:{
             type:String,
             require:true
       }
})
Adschema.methods.generateAuthToken= async function(){
      try{
        let token = jwt.sign({_id:this._id}, process.env.SECRETKEY);
        this.tokens=this.tokens.concat({token:token})
        await this.save();
        return token;
  }catch(err){
            console.log(err);
}
}

const AdministratorModel= new mongoose.model('adminsdata',Adschema)
module.exports=AdministratorModel;