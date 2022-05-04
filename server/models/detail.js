const mongoose = require('mongoose');

const datailSchema = new mongoose.Schema({
    name:{
        type:String,
        required:'This fild is requird'
    },
    detail:{
        type:String,
        required:'This fild is requid'
    },
    image:{
        type:String,
        required:'This fild is requird'
    },
    cd:{
        type:String,
        required:'This fild is requird'
    },
    category:{
        type:String,
        required:'This fild is requird'
    }

});

module.exports = mongoose.model('detail',datailSchema);