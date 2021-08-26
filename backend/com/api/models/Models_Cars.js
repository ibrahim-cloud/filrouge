const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModeleSchema = new Schema({

    Modele_name: {
        type: String, 
        required : true  
    },
    Modele_Prix: {
        type: String, 
        required : true  
    },
    Modele_Carburant: {
        type: String, 
        required : true  
    },
    Type_boite_vittesse: {
        type: String, 
        required : true  
    },
    puissance_reelle: {
        type: String, 
        required : true  
    },
    puissance_Fiscale: {
        type: String, 
        required : true  
    },
    Nomber_Portes: {
        type: Number, 
        required : true  
    },
    Photos: {
        type: String, 
    },
    Videos: {
        type: String, 
    }
  
 
 
});

const Modele = mongoose.model(" Modele", ModeleSchema);
module.exports = Modele;