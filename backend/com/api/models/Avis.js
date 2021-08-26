const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AvisSchema = new Schema({

    Title_Avis: {
        type: String, 
        required : true  
    },
    Description_Avis: {
        type: String, 
        required : true  
    }

 
 
});

const Avis = mongoose.model(" Avis", AvisSchema);
module.exports = Avis;