const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:'This fild is requird'
    },
    image:{
        type:String,
        required:'This fild is requird'
    },
    category:{
        type:String,
        required:'This fild is requird'
    },

});

module.exports = mongoose.model('Category',categorySchema);