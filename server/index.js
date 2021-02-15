// server.js

require('dotenv').config({ path: 'variables.env'});
const express = require('express');
const bodyParser = require('body-parser');
const conectarDB = require('./config/db');
const cors = require('cors');

// Creamos el servidor
const app = express();

app.use(express.static('public'));

// Conectamos a la BD
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

// settings
app.set('port', process.env.PORT || 4000);

const server = app.listen(app.get('port'), ()=> {
    console.log(`The Express server is running perfectly → PORT: ${server.address().port}`);
});