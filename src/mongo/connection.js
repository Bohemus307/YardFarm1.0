const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dataMoments', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('connected', () => console.log('Connected'));

module.exports = { db };
