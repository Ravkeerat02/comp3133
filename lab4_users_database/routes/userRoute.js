const express = require('express');
const userModel = require('../model/userModel');
const app = express();


// //http://localhost:3000/users
app.post('/users', async (request, response) => {
    const user = new userModel(request.body);
    try {
      await user.save();
      response.status(201).send(user);
    } catch (err) {
      response.status(500).send(err);
    }
  });




module.exports = app;