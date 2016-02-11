/**
 * Module dependencies
 */

import express from 'express';
import http from 'http';

const port = 3000;
const app = express();

// Configurar la ruta de archivos estáticos
//
app.use('/public', express.static(__dirname+ '/public'));

app.get('/',(req,res) => {
	res.sendFile(__dirname+'/index.html');
});

let server = http.createServer(app).listen(port,() =>{
		console.log(`El servidor se esta ejecutando por el puerto ${port}`);

});
