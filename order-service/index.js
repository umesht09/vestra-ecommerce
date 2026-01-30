const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const orderRoute = require('./routes/order'); 

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Order DB Connected 📦"))
    .catch((err) => console.log(err));


app.use("/api/orders", orderRoute);

const PORT = 5002;
app.listen(PORT, () => {
    console.log(`Order Service running on Port ${PORT}`);
});