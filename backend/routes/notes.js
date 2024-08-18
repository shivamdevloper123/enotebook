const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes')
const {body , validationResult }= require('express-validator')
//Route 1: Get All the Notes using : GET "api/auth/getuser" .Login required

router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    
    try {
        const notes = await Notes.find({user:req.user.id});
        res.json(notes)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error ")
    }
});

//Route 2: Add a new Note using : POST "api/auth/addnote" .Login required

router.post('/addnote',fetchuser,[
    body('title', "Enter a valid title").isLength({ min: 3 }),
   
    
    body('description', "Description must be at least 5 characters").isLength({ min: 5 }),
],async (req,res)=>{
    try {
        const{title,description,tag} = req.body;

        
           //if there are Validate no request,return Bad request  and error.
           const errors = validationResult(req);
           if (!errors.isEmpty()) {
               return res.status(400).json({ errors: errors.array() });
            }
               const note = new Notes ({
                title,description,tag,user:req.user.id     
               });
               const savedNotes = await note.save()
                res.json(savedNotes)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error ")
    }
});
module.exports=router