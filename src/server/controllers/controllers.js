/* eslint-disable no-console */
const axios = require('axios').default;
const config = require('../../../config');
const model = require('../../mongo/models/model.js');

module.exports = {

  getDataFromIo: (req, res) => {
    const feedId = req.query.feed_id;
    console.log(feedId);
    axios.get(`https://io.adafruit.com/api/feeds/${feedId}/data/last`, {
      params: {
        'X-AIO-Key': config.app.ioKey,
      },
    })
      .then((response) => res.json({ data: response.data }))
      .catch((err) => res.status(400).json({
        message: 'Failed to retrieve Data from sensor',
        error: err,
      }));
  },

  getDayOfData: (req, res) => {
    const { date } = req.query;

    if (date === undefined) {
      res.status(400).json({
        message: 'Bad request - must include date',
      });
    } else {
      model.getDayOfMoments(date)
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
