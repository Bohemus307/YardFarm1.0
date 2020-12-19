const axios = require('axios').default;
const config = require('../../../config');
const model = require('../../mongo/models/model.js');

module.exports = {

  getDataFromIo: (req, res) => {
    const feedId = req.query.feed_id;
    axios.get(`https://io.adafruit.com/api/feeds/${feedId}/data/last`, {
      params: {
        'X-AIO-Key': config.app.ioKey,
      },
    })
      .then((response) => res.status(200).json({ data: response.data }))
      .catch((err) => res.status(400).json({
        message: 'Failed to retrieve Data from sensor',
        error: err,
      }));
  },

  getAllDataForFeed: (req, res) => {
    const feedId = req.query.feed_id;
    const feedName = req.query.feed_name;
    axios.get(`https://io.adafruit.com/api/feeds/${feedId}/data`, {
      params: {
        'X-AIO-Key': config.app.ioKey,
      },
    })
      .then((data) => model.saveDataToDB(data, feedName))
      .then(() => res.status(200).json({
        message: 'success getting and saving data',
      }))
      .catch((err) => res.status(400).json({
        message: 'Failed to retrieve Data from sensor',
        error: err,
      }));
  },

  getDayOfData: (req, res) => {
    const { date } = req.query;
    const { type } = req.query;

    if (date === undefined) {
      res.status(400).json({
        message: 'Bad request - must include date',
      });
    } else {
      model.getDayOfMoments(date, type)
        .then((data) => res.status(200).json({
          message: 'Success retrieving Data',
          moments: data,
        }))
        .catch((err) => res.status(400).json({
          message: 'Failed to find Data',
          error: err,
        }));
    }
  },

  getWeekOfData: (req, res) => {
    const { dates } = req.query;
    if (dates === undefined) {
      res.status(400).json({
        message: 'Bad request - must include dates',
      });
    } else {
      model.getWeekOfMoments(dates)
        .then((data) => res.json({
          message: 'Success retrieving Data',
          moments: data,
        }))
        .catch((err) => res.status(400).json({
          message: 'Failed to find Data',
          error: err,
        }));
    }
  },

  postNoteToDb: (req, res) => {
    const { note } = req.body;
    const day = req.body.id;
    if (note === undefined || day === undefined) {
      res.status(400).json({
        message: 'Bad request - must include date and a note',
      });
    } else {
      model.postNote(day, note)
        .then((data) => res.json({
          message: 'Success Posting Data',
          moments: data,
        }))
        .catch((err) => res.status(400).json({
          message: 'Failed to Post Data',
          error: err,
        }));
    }
  },

};
