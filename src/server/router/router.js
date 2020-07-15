const router = require('express').Router();
const controllers = require('../controllers/controllers.js');

router.get('/day', controllers.getDayOfData);

router.get('/week', controllers.getWeekOfData);

router.post('/note', controllers.postNoteToDb);

// router.delete('/data', );

module.exports = router;