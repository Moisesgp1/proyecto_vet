const mongoose = require(`mongoose`);

const ProductoSchema = mongoose.Schema({
	nombre_producto:{
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
	
	module.exports = mongoose.model(`productos`,ProductoSchema)
