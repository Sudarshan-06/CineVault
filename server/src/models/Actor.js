const mongoose = require('mongoose');
const ActorScehema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    }
    },
);
module.exports = mongoose.model('Actor', ActorScehema);