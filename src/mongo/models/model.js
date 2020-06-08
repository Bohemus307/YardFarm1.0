const mongoose = require('mongoose');
const Promise = require('bluebird');
const db = require('../connection.js');


const dataMoment = mongoose.schema({
  _id: String,
  time: Number,
  date: Date,
  intemp: Number,
  outtemp: Number,
  inhumid: Number,
  outhumid: Number,
  ph: Number,
  ec: Number,
  ppm: Number,
  tds: Number,
  wtemp: Number,
});

// create model
const moments = mongoose.model('moments', dataMoment, 'dataMoment');

module.exports = { dataMoment, moments,

};
