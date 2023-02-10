const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute');
const SERVER_PORT = 8081;

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://RK_02:ab8UjMGR44roYdJH@cluster0.iu4uasl.mongodb.net/comp3133_db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(userRouter);


app.route("/").get((req,res)=>{
    res.send("<h1>Lab 04 – Mongoose Validation");
})
    

app.listen(SERVER_PORT, () =>{
  console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})