const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
require('./db/db');


app.use(morgan('short'));

app.use(bodyParser.json());



const springController = require('./controllers/springController');
app.use('/hotsprings', springController);



app.listen(process.env.PORT || 9000, () => {
    console.log('server is running on port 9000');
})



