const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoute = require("./routes/product");
const cors = require("cors");

const Stripe = require("stripe");

dotenv.config();


const stripe = Stripe("stripe")(process.env.STRIPE_KEY);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Product DB Connected 🛍️"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoute);


app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { products } = req.body; 

    
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.title,
          images: [product.img], 
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success", 
      cancel_url: "http://localhost:5173/cart",    
    });
res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5001, () => {
  console.log("Product Service running on Port 5001");
});