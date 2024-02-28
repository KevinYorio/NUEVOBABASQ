import { Schema, Types, model } from "mongoose";

const collection = "users";
const schema = new Schema({

    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:["user", "admin"],
        default:"user",
        required:true
    },
    certificate:{
        type:Boolean,
        default:false,
        required:true,
    },
    reserves:[{
        type: Types.ObjectId,
        ref: 'reserves', // Referencia al modelo de reserva
    }]

})

const User = model(collection, schema);

export default User;