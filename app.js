/*const http = require("http");

const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, World v3!</h1>");
});
const puerto = 3000;
server.listen(puerto, () => {
  console.log(`escuchando solicitudes`);
});*/


const express = require('express');
const app = express();
const port = 3000;
//middleware
app.use(express.static(__dirname + "/public"));

//rutas
app.get('/', (req, res) => {
  res.send('servidor a su servicio');
})
app.get('/servicios',(req, res) => {
  res.send('estas en la pagina de servicios')
})
app.get('/nosotros',(req, res) => {
  res.send('estas en la pagina de noso')
})
app.get('/acerca de',(req, res) => {
  res.send('estas en la pagina de acerca')
})
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname +"/public/404.html")
})
app.listen(port, () => {
  console.log('servidor a su servicio en el puerto',port);
})

