const mongoose = require('mongoose');
const db = require('../connection.js');

// schema for adafruit data
const iotData = mongoose.Schema({
  _id: Number,
  value: String,
  createdAt: String,
  time: String,
  type: String,
});
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

// create model for iotdata
const IotData = mongoose.model('iotDataPoint', iotData, 'iotDataPoint');

module.exports = {
  noteSchema,
  Note,
  dataMoment,
  moments,
  IotData,

  saveDataToDB: async (response, feedName) => {
    const docs = response.data.map((item) => new IotData({
      value: item.value,
      createdAt: item.created_at.substring(0, 10),
      time: item.created_at.substring(11, 19),
      type: feedName,
    }));
    IotData.insertMany(docs, (err) => console.log('error in db insert many', err));
  },

  getDayOfMoments: async (date) => {
    try {
      const data = await IotData.find({ createdAt: date });
      return data;
    } catch (err) {
      return console.log('Error in models', err);
    }
  },

  getWeekOfMoments: async (dates) => {
    try {
      // const data = await moments.find({ date: parseInt(start, 0) });
      const data = await IotData.find({ date: { $in: dates } });
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
      return saveNote;
    } catch (err) {
      return console.log('Error in models', err);
    }
  },

};
