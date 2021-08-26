const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Voiture_neuf_Schema = new Schema({

    Voiture_name: {
        type: String, 
        required : true  
    },
   Categorie_Id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie",
    },
    Modele_Id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Modele",
    },
    Marque_Id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Marque",
    }
});

const Voiture_neuf = mongoose.model(" Voiture_neuf", Voiture_neuf_Schema);
module.exports = Voiture_neuf;