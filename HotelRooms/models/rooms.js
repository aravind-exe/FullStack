const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
    {
       room_type:{
        type:String,
        required:true,
       },
       room_number:{
        type:String,
        required:true,
        unique:true,
       },
       capacity:{
        type:Number,
        required:true,
       },
       bed_configuration:{
        type:String,
        required:true,
       },
       view:{
        type:String,
       },
       price:{
        type:String,
        required:true,
       },
       discount:{
        type:String,
       },
       check_in:{
        type:Date,
        required:true,
       },
       check_out:{
        type:Date,
        required:true,
       },
    }
);

module.exports = mongoose.model("rooms",roomSchema);