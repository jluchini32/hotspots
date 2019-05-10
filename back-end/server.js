const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
require('./db/db');




app.use(bodyParser.json());





app.listen(process.env.PORT || 9000, () => {
    console.log('server is running');
})