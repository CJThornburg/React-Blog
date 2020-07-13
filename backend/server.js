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



//moirt the route files and allows them to be used for the api CRUD funtionality
const adminsRouter = require('./routes/admins');
const postsRouter = require('./routes/posts');

app.use('/posts', postsRouter);
app.use('/admins', adminsRouter);



// starts the server listiening
app.listen(port, () => {
  console.log(`Server is runniung on port:${port}`);
});
