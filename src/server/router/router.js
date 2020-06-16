const router = require('express').Router();
const controllers = require('../server/controllers/controllers.js');

router.get('/day', controllers.getDayOfData);

router.get('/week', controllers.getWeekOfData);

// router.post('/data', );

// router.delete('/data', );

module.exports = router;
