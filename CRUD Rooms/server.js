const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const roomrouter = require('./router/room');
// const corsOptions =require('./config/corsOptions')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public'))

mongoose.connect('mongodb://127.0.0.1:27017/room_types')
    .then(() => {
        console.log("MongoDB is Connected");
        app.listen(8080, () => {
            console.log("Server is Running on Port 8080")
        })
    }).catch(() => {
        console.log("Error Occured")
    })

app.use(roomrouter);