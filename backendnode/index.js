const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const companyRoutes = require("./routes/company");


const app = express();

app.use(cors());

app.enable("trust proxy");


mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://madhu:test123@cluster0.vfbif.mongodb.net/test", {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use("/api/company", companyRoutes);
app.listen(8000, () => {
    console.log("Hi Sankar, the Server started successfully!");
});