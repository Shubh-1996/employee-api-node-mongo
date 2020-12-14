const mongoose = require('mongoose');

const dbURI ='mongodb+srv://shubhama123:shubh1234@cluster0.afwtc.mongodb.net/employee?retryWrites=true&w=majority';

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useUnifiedTopology: true,
};

// Establishing connectin with dbURI and option with max pool

mongoose.connect(dbURI, options).then(
  () => {
    console.log('Database connection established!');
  },
  (err) => {
    console.log('Error connecting Database instance due to: ', err);
  }
);

// require any models
require('../models/Task');
