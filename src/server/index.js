const config = require('../../config');

const express = require('express')
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

//const Router = require('../router/router.js');


const app = express();

const PORT = config.app.port;

app.use(express.static(path.join(__dirname, '/../../public')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
//app.use('/data', Router);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));