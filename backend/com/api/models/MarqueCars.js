const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MarqueSchema = new Schema({

    Marque_name: {
        type: String, 
        required : true  
    },
    Description_Marque: {
        type: String, 
        required : true  
    },
    Nationality_Marque : {
        type: String, 
        required : true  
    }
 
 
});

const Marque = mongoose.model(" Marque", MarqueSchema);
module.exports = Marque;