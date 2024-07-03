const mongoose = require(`mongoose`);

const UsuarioSchema = mongoose.Schema({
	nombre:{
		type:String,
		required: true
	},
	email:{
		type:String,
		required:true	
	},
	password:{
		type:String,
		required:true
	},
	fecha_nacimiento:{
		type:String,
		required:true
	},
	mascota:{
		type:String,
		required:true}
	},{
		versionKey: false,
		timestamps:true
	});

	module.exports =mongoose.model(`Usuario`,UsuarioSchema);
