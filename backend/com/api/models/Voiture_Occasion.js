const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Voiture_Occaion_Schema = new Schema({

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
    }
});

const Voiture_Occaion = mongoose.model(" Voiture_Occaion", Voiture_Occaion_Schema);
module.exports = Voiture_Occaion;