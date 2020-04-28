const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');


const app = express();
const port = 4200;

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.use(morgan('dev'));

app.listen(port, () => console.log(`app listening at http://local:${port}`));
