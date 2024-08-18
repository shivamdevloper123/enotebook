const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming you have a User model defined
const JWT_SECRET = 'Harryisagoodboy@1314';  //sign the token with secret

//create a user using POST:"/api/auth/createuser" ,No login required.
router.post('/createuser', [
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be at least 5 characters").isLength({ min: 5 }),
], async (req, res) => {
    try {
        //if there are Validate no request,return Bad request  and error.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Check if the user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry, a user with this email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Create the user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        });

        // Log the user object to the console
        console.log(JSON.stringify(user, null, 2));
        const data = {
            user: {
                id: user.id
            }

        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        // Send the response
        res.json({authtoken});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
