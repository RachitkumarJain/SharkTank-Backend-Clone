const mongoose = require("mongoose");
const config = require("./config/config");
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

/**
 * Creating an Express Application
 */
const app = express();

/**
 * Since we are having POST request, the below code lets us to parse data from req in JSON format
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * CORS stands for Cross-Origin Resource Sharing, is an HTTP-header based mechanism that 
 * exposes the current port i.e 8081 to the external port that is accessed by Frontend application.
 */
app.use(cors());
app.options("*", cors());

/**
 * To send all the request to /src/routes/index.js
 */
app.use("/", routes);

/**
 * Connect to the MongoDB and on sucessfully connection spin a server to listen to request on port 8081
 */
mongoose.connect("mongodb://localhost:27017/xharktank", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
    app.listen(8081, () => {
        console.log(`Backend coneected 8081`);
    })
});
