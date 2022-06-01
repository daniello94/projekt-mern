const mongoose = require("mongoose");


mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME,  {useNewUrlParser: true, useUnifiedTopology: true});


const schema = new mongoose.Schema({
    name:String,
    username:String,
    city:String,
    course:String
});


module.exports = mongoose.model('Student', schema);