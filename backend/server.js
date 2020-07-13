const express = require ('express');
const cors = require ('cors');
const mongoose = require ("mongoose");






require('dotenv').config();



// creates express server and which port the server will be on
const app = express();
const port = process.env.Port || 5000;







// cors middlewear and express json allows us to parce json
app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MondoDB database conneciton established successfully");
})


// starts the server listiening
app.listen(port, () => {
  console.log(`Server is runniung on port:${port}`);
});
