const router = require('express').Router();
const controllers = require('../controllers/controllers.js');

router.get('/day', controllers.getDayOfData);

router.get('/week', controllers.getWeekOfData);

router.post('/note', controllers.postNoteToDb);

router.get('/iotData', controllers.getDataFromIo);

router.get('/allFeedData', controllers.getAllDataForFeed);

// use for fake data
router.get('/iotRandomData', controllers.useFakeDataGenerator);

module.exports = router;
