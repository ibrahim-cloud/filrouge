const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ActSchema = new Schema({

    Title_act: {
        type: String, 
        required : true  
    },
    Description_act: {
        type: String, 
        required : true  
    },
    Photo_act : {
        type: String, 
        required : true  
    },
    Tag_act : {
        type: String, 
    }
 
 
});

const Act = mongoose.model(" Act", ActSchema);
module.exports = Act;