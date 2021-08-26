const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ForumSchema = new Schema({

    Title_Forum: {
        type: String, 
        required : true  
    },
    Description_Forum: {
        type: String, 
        required : true  
    }

 
 
});

const Forum = mongoose.model("Forum",  ForumSchema);
module.exports = Forum;