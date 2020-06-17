/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const Promise = require('bluebird');
const db = require('../connection.js');

const dataMoment = mongoose.Schema({
  _id: String,
  time: Number,
  date: Number,
  intemp: Number,
  outtemp: Number,
  inhumid: Number,
  outhumid: Number,
  ph: Number,
  ec: Number,
  ppm: Number,
  tds: Number,
  wtemp: Number,
  notes: Array,
});

// create model
const moments = mongoose.model('moments', dataMoment, 'moments');

module.exports = {
  dataMoment,
  moments,
  getDayOfMoments: async (date) => {
    try {
      const data = await moments.find({ date: parseInt(date, 0) });
      return data;
    } catch (err) {
      return console.log('Error in models', err);
    }
  },

  getWeekOfMoments: async (start, end) => {
    try {
      const data = await moments.find({ date: parseInt(start, end, 0) });
      return data;
    } catch (err) {
      return console.log('Error in models', err);
    }
  },

  postNote: async (day, note) => {
    try {
      const data = await moments.find({ id: parseInt(day, 0) });
      const newNote = [note];
      data.note.push(newNote);
      const moment = await data.save();
      return data;
    } catch (err) {
      return console.log('Error in models', err);
    }
  },

};
