const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
app.use(express.static('public'));
app.use(express.json());

const connectDB = require('./config/db');
const path = require('path');
connectDB();

//cors 
const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
        //3000,5000,3300
}

app.use(cors(corsOptions));
//Template engine 

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
//Routes

app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} `);
})