import { Schema, Types, model } from "mongoose";

const collection = "reserves";
const schema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "users",
    required: true,
  },
  pay:{
    type:Boolean,
    default:false,
    required:true
  },
/* mount: {
    type: Number,
    required: true,
  },*/
  times: [{
    _id:false,
    date:{
      type:String,
      required:true
    },
    seat:{
      type:String, //Sede Moron, Zona Oeste - Villa del parque 5687
      required:true
    }
  }],

}, { versionKey: false, timestamps: true });

const Reserve = model(collection, schema);

export default Reserve;
