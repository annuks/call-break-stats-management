const mongoose = require('mongoose');
// db address on cloud
mongoose.connect(DB="mongodb+srv://annukumarsingh:HdiaunmRTKVFCJd3@cluster0.skfggd8.mongodb.net/call-break-stats");
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error while connection to Database"));


db.once('open', function(){
    console.log('Connection Established with Database (MongoDB):');
});

module.exports = db;