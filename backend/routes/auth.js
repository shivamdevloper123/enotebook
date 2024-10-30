const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming you have a User model defined
const JWT_SECRET = 'Harryisagoodboy@1314';  //sign the token with secret
const fetchuser = require('../middleware/fetchuser');
const emailValidator = require('email-validator'); // New email-validator package
// const axios = require('axios'); // Optional, for external API validation


//Router:1 create a user using POST:"/api/auth/createuser" ,No login required.
router.post('/createuser', [
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be at least 5 characters").isLength({ min: 5 }),
], async (req, res) => {
    try {
        let success = false;
        //if there are Validate no request,return Bad request  and error.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }

        // Additional email format validation with email-validator
        if (!emailValidator.validate(req.body.email)) {
            return res.status(400).json({ success, error: "Invalid email address" });
        }

        // OPTIONAL: Check if email exists using an external API

        // const verifyEmailExists = async (email) => {
        //     try {
        //         const apiKey = process.env.EMAIL_API_KEY; // Your API key
        //         const response = await axios.get(`https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${apiKey}`);
        //         return response.data.data.status === 'valid';
        //     } catch (error) {
        //         console.error("Email verification API error:", error);
        //         return false;
        //     }
        // };

        // const isValidEmail = await verifyEmailExists(req.body.email);
        // if (!isValidEmail) {
        //     return res.status(400).json({ success, error: "Email verification failed" });
        // }


        // Check if the user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "Sorry, a user with this email already exists" });
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
        success = true;
        res.json({ success, authtoken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


// Router:2 Authenticate a user using POST:"/api/auth/login",  login required.
router.post('/login', [
    body('email', 'Enter a valid email ').isEmail(),
    body('password', 'Password cannot be blank ').exists(),
], async (req, res) => {
    try {
        let success = false;
        //if there are Validate no request,return Bad request  and error.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //Using Destructuring method of javascript
        const { email, password } = req.body;

        //Comparing the Email
        let user = await User.findOne({ email });
        if (!user) {
            success = false
            return res.status(400).json({ error: "please try to login with correct credential" })
        }
        //Comparing the  Password
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });

        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error ")
    }
}
)

// Router:3 Get  a user using POST:"/api/auth/getuser", login required.
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error ")
    }
})
module.exports = router;
