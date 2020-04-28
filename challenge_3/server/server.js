const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const routes = require('./router.js');
const port = 3000;
const config = xrequire('./config');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});



