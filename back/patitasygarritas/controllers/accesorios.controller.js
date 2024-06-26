const accesoriosModel = require (`../models/accesorios.model`);

exports.crearAccesorio = async (req,res) =>{
	try {
		let accesorios = new accesoriosModel(req.body);
		await accesorios.save();
		res.status(200).send({ mensaje:"Accesorio creado correctamente",accesorios});
	} catch (error) {
		console.log(error);
		res.status(500).send("Hubo un problema al crear el accesorio");
	}
}


exports.consultasAccesorios =async (req,res) =>{
	try {
		const InfoAccesorios = await accesoriosModel.find()
		res.status(200).send(InfoAccesorios)
	} catch (error) {
		console.log(error);
        res.status(500).send("Hubo un problema al consultar los productos");
	}
}

exports.consultaAccesorio = async (req,res) =>{
	let rep = /^[0-9a-fA-F]{24}$/;
	let Yery = {}
	if (rep.test(req.params.busqueda,)) {
		Yery = {_id: req.params.busqueda}
	} else {
		Yery ={nombre_accesorio: new rep(req.params.busqueda,`i`)};
	}try {
		let Dataaccesorio = await accesoriosModel.find(Yery)
		if (Dataaccesorio.length > 0) {
			res.status(200).send({data:Dataaccesorio})
		} else {
			res.status(404).send({mensaje:"No se encontro el accesorio",data:[]})
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Hubo un problema con el accesosio");
	}
}

exports.actualizarAccesorio = async (req,res) =>{
	try {
		const {nombre_accesorio,descripcion,cantidad,precio} = req.body;
		let accesoriodata = await accesoriosModel.findById(req.params.id)
		if (!accesoriodata) {
			res.status(404).send({mensaje:"No se encontro el accesorio"})
			return
		}
		accesoriodata.nombre_accesorio = nombre_accesorio;
		accesoriodata.descripcion = descripcion;
		accesoriodata.cantidad = cantidad;
		accesoriodata.precio = precio;
		await accesoriosModel.findByIdAndUpdate(req.params.id, accesoriodata);
	} catch (error) {
		console.log(error);
		res.status(500).send("Hubo un problema al actualizar el accesorio")
	}
}

exports.BorrarAccesorio =async (req,res) =>{
	try {
		let AccesorioData = await accesoriosModel.findById(req.params.id)
		console.log(`AccesorioData:`,AccesorioData);
		if (!AccesorioData) {
			res.status(404).send({mensaje:"No se encontro el accesorio"})
			return
		} else {
			await accesoriosModel.findByIdAndDelete(req.params.id)
			res.status(200).send({mensaje:"Accesorio eliminado"})
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Hubo un problema al eliminar el producto");
	}
}
