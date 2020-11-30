const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const config = require('../../config');

const Router = require('./router/router.js');

const app = express();

const PORT = config.app.port;
app.use(express.static(path.join(__dirname, '/../../public')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const routes = ['/dashboard', '/alerts', '/controls'];
// for redirect of refresh in front end
app.get(routes, (req, res) => {
  res.sendFile(path.join(__dirname, '/../../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use('/data', Router);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
