const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
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
userSchema.methods.generateAuthToken= async function(){
      try{
        let token = jwt.sign({_id:this._id}, process.env.SECRETKEY);
        this.tokens=this.tokens.concat({token:token})
        await this.save();
        return token;
  }catch(err){
            console.log(err);
}
}

const customermodel= new mongoose.model("customerdata",userSchema)
module.exports=customermodel;