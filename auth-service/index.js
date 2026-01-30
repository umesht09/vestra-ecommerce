const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth'); 
const cors = require('cors'); // <--- 1. YE LINE ADD KAREIN (NEW)

const app = express();

dotenv.config();

app.use(cors()); // <--- 2. YE LINE ADD KAREIN (NEW) - Sabse upar hona chahiye
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully! 🟢");
    } catch (error) {
        console.error("MongoDB Connection Failed 🔴", error);
    }
};

connectDB();

app.use('/api/auth', authRoute); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Auth Service chal raha hai Port: ${PORT} par`);
});