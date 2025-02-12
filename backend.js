/* Backend (Node.js + Express + AWS Lambda) */
// File: backend/index.js
const express = require("express");
const serverless = require("serverless-http");
const AWS = require("aws-sdk");
const Stripe = require("stripe");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "E-commerce API is running!" });
});

app.post("/checkout", async (req, res) => {
  const { amount, currency } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports.handler = serverless(app);