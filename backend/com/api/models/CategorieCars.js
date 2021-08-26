const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorieSchema = new Schema({

    Categorie_name: {
        type: String, 
        required : true  
    },
    Description_Categorie: {
        type: String, 
        required : true  
    },
  
 
 
});

const Categorie = mongoose.model(" Categorie", CategorieSchema);
module.exports = Categorie;