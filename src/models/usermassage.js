const mongoose = require("mongoose");
const validator=require("validator");


const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLength:3,
    },
    email:{
        type:String,
        require:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid value')
            }
        }
    },
    phone:{
        type:Number,
        require:true,
        min:10
    },
    massage:{
        type:String,
        require:true,
        minLength:5
    }
})


//we need to connection
const User =mongoose.model("User",userSchema);

module.exports=User;