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

const alert = mongoose.Schema({
  id: {
    type: String,
    index: true,
    unique: true,
  },
  alertid: {
    type: String,
    index: true,
    unique: true,
  },
  alertName: {
    type: String,
    index: true,
    unique: true,
  },
  updated: { type: Date },
  created: { type: Date, default: Date.now },
  minimum: Number,
  maximum: Number,
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
  alert,
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
    IotData.insertMany(docs, (err) => console.log(err));
  },

  getDayOfMoments: async (date, feed) => {
    try {
      const data = await IotData.find({ type: feed, createdAt: date }).lean();
      return data;
    } catch (err) {
      return console.log('Error in models', err);
    }
  },

  getWeekOfMoments: async (dates, type) => {
    try {
      const data = await IotData.find(
        { type, createdAt: { $gte: dates[0], $lt: dates[dates.length - 1] } },
      ).lean();
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
