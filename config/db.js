require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    //database connection
    mongoose.connect("mongodb+srv://Share:wxFO4n3qITRVGw9d@cluster0.ke1gpuy.mongodb.net/inshare?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: true
    });

    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('Database connected.')
    }).on('error', function(err) {
        console.log(err);
    })
}

module.exports = connectDB;