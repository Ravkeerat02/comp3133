const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/restrauntRoute');

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://RK_02:ab8UjMGR44roYdJH@cluster0.iu4uasl.mongodb.net/comp3133_db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(restaurantRouter);

app.listen(3000, () => { console.log('Server is running...') });