const mongoose = require (`mongoose`);

const accesoriosSchema =mongoose.Schema({
	nombre_accesorio:{
		type:String,
		require:true
	},
	descripcion:{
		type:String,
		require:true
	},
	cantidad:{
		type:String,
		require:true
	}, 
	precio:{
		type:String,
		require:true
	}
},{
		versionKey: false,
		timestamps:true
	});
	
	module.exports = mongoose.model(`accesorios`,accesoriosSchema)
