const mongoose = require('mongoose');

var carSchema = mongoose.Schema({
    marque : {type : String},
    modele: {type : String},
    description : {type : String},
})

module.exports = mongoose.model('Car', carSchema);