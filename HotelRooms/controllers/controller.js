const express = require('express');
const mongoose = require('mongoose');
const users = require('../models/rooms');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

module.exports.getAllrooms = async (req,res) =>{
    try{
        const findRoom = await users.find({});

        res.json(findRoom);
    }
    catch(error){
        res.status(500).json({error:"Error Showing Rooms"})
    }  
} 

module.exports.getRoomById = async (req,res) =>{
    try{
        const findRoomById = await users.findById(req.params.room_id);

        if(!findRoomById){
            return res.status(404).json({error:"Room not Found"})
        }

        res.json(findRoomById);
    }
    catch(error){
        res.status(500).json({error:"Error Showing Rooms!"})
    }
}

module.exports.createRoom = async (req,res) => {
    try{
        const addRoom = new users(req.body);
        const saveRoom = await addRoom.save();

        res.status(200).json(saveRoom);
    }
    catch{
        res.status(400).json({error:"Room not Created"})
    }
}

module.exports.UpdateRoom = async (req,res) => {
    try{
        const editRoom = await users.findByIdAndUpdate(
            req.params.room_id,
            req.body,
            {new:true}
        );

        if(!editRoom){
           return res.status(404).json({error:"Room not Found"})
        }

        res.json(editRoom)    
    }
    catch{
        res.status(400).json({error:"Invalid Data"})
    }
}

module.exports.deleteRoom = async (req,res) => {
    try{
        const removePayment = await users.deleteOne({ _id: req.params.room_id });

        if(!removePayment){
            return res.status(404).json({error:"Room not Found"})
        }
        
        res.status(200).json({msg:"Room deleted Successfully"})
    }
   catch{
    res.status(400).json({error:"Invalid Data"})
   }
};