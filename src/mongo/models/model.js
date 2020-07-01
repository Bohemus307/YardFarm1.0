/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const Promise = require('bluebird');
const db = require('../connection.js');

// create schema for data
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
});

// create model
const moments = mongoose.model('moments', dataMoment, 'moments');

// create schema for notes db
const noteSchema = mongoose.Schema({
  text: String,
  date: String,
});

// create model for notes db
const Note = mongoose.model('note', noteSchema, 'note');

module.exports = {
  noteSchema,
  Note,
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

  getWeekOfMoments: async (dates) => {
    try {
      // const data = await moments.find({ date: parseInt(start, 0) });
      const data = await moments.find({ date: { $in: dates } });
      return data;
    } catch (err) {
      return console.log('Error in models', err);
    }
  },

  postNote: async (day, note) => {
    try {
      const newNote = JSON.stringify(note);
      const data = new Note({ date: parseInt(day, 0), text: newNote });
      const saveNote = await data.save();
      return data;
    } catch (err) {
      return console.log('Error in models', err);
    }
  },

};
