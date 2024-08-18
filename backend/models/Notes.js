const mongoose = require('mongoose');
const NotesSchema = new mongoose.Schema({
    title :{
        type : String,
        required:true

    },
    description:{
        type : String,
       required:true
     

    },
    tag:{
        type : String,
        defult:"General"
        

    },
   date:{
        type : Date,
        defult:Date.now
       

    }
})
module.exports = mongoose.model('notes',NotesSchema)