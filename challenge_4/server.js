const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));


app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Listening on port: ${port}`));

