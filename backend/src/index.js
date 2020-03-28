const express = require('express'); //importanto todas funcionalidades do express
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({}));
app.use(express.json());
app.use(routes);


app.listen(3333);