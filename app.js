require('dotenv').config()

const express = require ('express');
const logger =require('morgan');
const bodyParser = require('body-parser');
//Tipon de servidor que realizaremos
const  http = require('http');
//Iniciar y configurar express
const app = express();
//log mostrar informacion en consola
app.use(logger('dev'));
//Parsear las entradas de datos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//Configurar las rutas de bienvenida al servidor 
app.get('/', (req, res) => res.status(200).send({
    message: 'Biendvenido a la API REST de compras',
}))
//configurar puerto del servidor
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
//crear servidor basado en el púerto y caracteristicas de app
const server = http.createServer(app);
server.listen(port);

module.exports = app;