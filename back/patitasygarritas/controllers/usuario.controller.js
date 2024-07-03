const UsuarioModel = require(`../models/usuario.model`);

exports.crearUsuario = async(req,res) =>{
	try {
		let Usuario = new UsuarioModel(req.body);
		await Usuario.save();
		res.status(200).send({ mensaje: 'Usuario creado correctamente', Usuario});
	} catch (error) {
		console.log(error);
		res.status(500).send("Hubo un problema al crear el usuario");
	}
}

exports.consultasUsuarios = async(req,res) =>{
	try {
		const UsuariosData = await UsuarioModel.find()
		res.status(200).send(UsuariosData)
	} catch (error) {
		console.log(error);
        res.status(500).send("Hubo un problema al consultar los usuarios");
	}
}

exports.consultaUsuario = async(req,res) =>{
	let regexIdMongo = /^[0-9a-fA-F]{24}$/;
	let query = {}
	if(regexIdMongo.test(req.params.busqueda)){
		query = {_id: req.params.busqueda}
	}else{
		query = {nombre: new RegExp(req.params.busqueda,`i`)};
	}try {
		let Datausuario = await UsuarioModel.find(query)
		if (Datausuario.length > 0) {
			res.status (200).send({data:Datausuario})
		}else{
			res.status(404).send({mensaje:"No se encontro usuario",data:[]})
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Hubo un problema con el usuario");
	}
}

exports.actualizarUsuario = async(req,res) => {
	try {
		const {nombre,email,password,fecha_nacimiento,mascota} = req.body;
		let UsuarioData = await UsuarioModel.findById(req.params.id)
		if (!UsuarioData) {
			res.status(404).send({mensaje:"No se encontro usuario"})
			return
		}
		UsuarioData.nombre = nombre;
		UsuarioData.email = email;
		UsuarioData.password = password;
		UsuarioData.fecha_nacimiento = fecha_nacimiento;
		UsuarioData.mascota = mascota;
		
		await UsuarioModel.findByIdAndUpdate(req.params.id, UsuarioData);
		res.status(200).send({mensaje:"Usuario actualizado"});
	} catch (error) {
		console.log(error);
		res.status(500).send("Hubo un problema al actualizar el usuraio")
	}
}

exports.BorrarUsuario = async (req,res) => {
	try {
		let UsuarioData = await UsuarioModel.findById(req.params.id)
		console.log(`UsuarioData:`, UsuarioData);
		if (!UsuarioData) {
			res.status(404).send({mensaje:"No se encontro usuario"})
			return
		}else{
			await UsuarioModel.findByIdAndDelete(req.params.id);
			res.status(200).send({mensaje:"Usuario eliminado"})
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Hubo un problema al eliminar al usuario");
	}
}
