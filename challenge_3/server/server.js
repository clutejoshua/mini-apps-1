const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
// const routes = require('./routes/user.js');
const port = process.env.PORT || 8000;
// const config = require('./config');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});




