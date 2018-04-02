const express =require('express');//framework de nodejs
const app= express();
const path = require('path')//para manejar las rutas

const mongoose = require('mongoose')//para conexion con mongodb
const passport = require('passport')//para configurar la autenticacion
const flash = require('connect-flash')//mandar mensajes para almacenar en el navegador
const morgan = require('morgan')//definir los metodos http para mostrar en consola
const cookieParser = require('cookie-parser')//administrar cookies
const bodyParser = require('body-parser')//info del navegador al servidor
const session = require('express-session')//para manejar sessiones
const auth = require("./app/auth");
const { url } = require('./config/database.js')//url para conexion con base de datos

mongoose.connect(url);//conectar mongoose con el link de la base de datos
require('./config/passport')(passport);//requerir configuracion del passport

//settings
app.set('port', process.env.PORT || 3000);//para conectar en cualquier puerto o el 3000
app.set('views', path.join(__dirname, 'views'));//para obtener las vistas
app.set('view engine','ejs');//modulo de plantilla

//middlewares
app.use(morgan('dev'));//para ver mensajes en consola
app.use(cookieParser());//para poder convertir cookies e interpretarlas
app.use(bodyParser.urlencoded({extended: false}));//la informacion de los formularios, para interpretarla a traves de url
//requerido por passport
app.use(express.static(path.join(__dirname,'public')));//donde estaran los archivos estaticos
app.use(auth.init());

//routes
require('./app/routes.js')(app, passport);//definir donde estan las rutas

//static files


app.listen(app.get('port'), () =>
{
	console.log('server on port', app.get('port'));
});