const mongoose = require('mongoose');
const db = require('../connection.js');

// schema for adafruit data
const iotFakeData = mongoose.Schema({
  _id: Number,
  value: String,
  createdAt: String,
  time: String,
  type: String,
});

// create model for iotdata
const IotFakeData = mongoose.model('iotFakeDataPoint', iotFakeData, 'iotFakeDataPoint');

module.exports = {
  IotData,

  saveFakeDataToDB: async (response, feedName) => {
    const docs = response.data.map((item) => new IotFakeData({
      value: item.value,
      createdAt: item.created_at.substring(0, 10),
      time: item.created_at.substring(11, 19),
      type: feedName,
    }));
    IotFakeData.insertMany(docs, (err) => console.log(err));
  },

  getFakeDayOfMoments: async (date, feed) => {
    try {
      const data = await IotFakeData.find({ type: feed, createdAt: date }).lean();
      return data;
    } catch (err) {
      return console.log('Error in models', err);
    }
  },

  getFakeWeekOfMoments: async (dates) => {
    try {
      const data = await IotFakeData.find(
        { createdAt: { $gte: dates[0], $lt: dates[dates.length - 1] } },
      ).lean();
      return data;
    } catch (err) {
      return console.log('Error in models', err);
    }
  },

};
