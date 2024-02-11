const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const Moralis = require("moralis").default;
const cors = require("cors");

require("dotenv").config({ path: ".env" });

app.use(cors());
app.use(express.json());

// Middleware
app.use(express.json());

// Routes
app.use('/', routes);


const MORALIS_API_KEY = process.env.MORALIS_API_KEY;

// Start the server
Moralis.start({
  apiKey: MORALIS_API_KEY,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});