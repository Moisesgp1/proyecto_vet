const express = require(`express`)
const conectarDB = require(`./config/Db`);
const cors = require(`cors`);
const app = express();

conectarDB ();

app.use(cors())
app.use(express.json())

app.use(`/api/v1`,require(`./patitasygarritas/routers/routes`))

app.listen(3000,() =>{
	console.log('El servidor se esta ejecutando en http://localhost:3000');
})
