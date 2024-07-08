const mongoose = require('mongoose');
const express = require('express');
const productRoutes = require('./routes/product.route.js');

//Middlewear
const app = express();
app.use(express.json());//MiddleWear to use JSON Requests.

//Routes
app.use('/api/products', productRoutes);

app.get('/', (req, res)=>{
    res.send("Hello from NodeJs API Server");
});

mongoose
  .connect("mongodb+srv://Rushane_admin:admin%40123@backenddb.4qv2kyw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB", {
  })
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Connection failed!", error);
  });
