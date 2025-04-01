// const mongoose = require('mongoose');
// const process = require('process');
// const mongoURI = process.env.MONGODB_URI;

// const connectToMongo = async () => {
//     try {
//         await mongoose.connect(mongoURI, {
            
//             // Add other options if needed
//         });
//         console.log("Connected to Mongo Successfully");
//     } catch (error) {
//         console.error("Failed to connect to Mongo", error);
//     }
// };

// module.exports = connectToMongo;


const mongoose = require('mongoose');
const process = require('process');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    console.error("MONGODB_URI is not defined in environment variables.");
    process.exit(1); // Exit process with failure
}

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1); // Exit on failure
    }
};

module.exports = connectToMongo;
