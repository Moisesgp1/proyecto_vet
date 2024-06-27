const mongoose = require(`mongoose`);
require(`dotenv`).config({path:`config.env`});

const conectarDB =async() =>{
	try {
		await mongoose.connect(process.env.DB_Mongo)
		console.log('DB Conectada');
	} catch (error) {
		console.log('Hubo un error', error);
	}
}

module.exports = conectarDB;
