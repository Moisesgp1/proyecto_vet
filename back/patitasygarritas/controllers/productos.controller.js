const ProductosModel = require (`../models/productos.model`);

exports.crearProducto = async (req,res) =>{
	try {
		let Producto = new ProductosModel(req.body);
		await Producto.save();
		res.status(200).send({ mensaje:"Producto creado correctamente",Producto});
	} catch (error) {
		console.log(error);
		res.status(500).send("Hubo un problema al crear el producto");
	}
}


exports.consultasProductos =async (req,res) =>{
	try {
		const InfoProducto = await ProductosModel.find()
		res.status(200).send(InfoProducto)
	} catch (error) {
		console.log(error);
        res.status(500).send("Hubo un problema al consultar los productos");
	}
}

exports.consultaProducto = async (req,res) =>{
	let rex = /^[0-9a-fA-F]{24}$/;
	let Jery = {}
	if (rex.test(req.params.busqueda,)) {
		Jery = {_id: req.params.busqueda}
	} else {
		Jery ={nombre_producto: new rex(req.params.busqueda,`i`)};
	}try {
		let Dataproducto = await ProductosModel.find(Jery)
		if (Dataproducto.length > 0) {
			res.status(200).send({data:Dataproducto})
		} else {
			res.status(404).send({mensaje:"No se encontro el producto",data:[]})
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Hubo un problema con el producto");
	}
}

exports.actualizarProductos = async (req,res) =>{
	try {
		const {nombre_producto,descripcion,cantidad,precio,categoria} = req.body;
		let Productodata = await ProductosModel.findById(req.params.id)
		if (!Productodata) {
			res.status(404).send({mensaje:"No se encontro el producto"})
			return
		}
		Productodata.nombre_producto = nombre_producto;
		Productodata.descripcion = descripcion;
		Productodata.cantidad = cantidad;
		Productodata.precio = precio;
		Productodata.categoria = categoria;
		await ProductosModel.findByIdAndUpdate(req.params.id, Productodata);
	} catch (error) {
		console.log(error);
		res.status(500).send("Hubo un problema al actualizar el prodcucto")
	}
}

exports.BorrarProducto =async (req,res) =>{
	try {
		let ProductoData = await ProductosModel.findById(req.params.id)
		console.log(`ProductoData:`,ProductoData);
		if (!ProductoData) {
			res.status(404).send({mensaje:"No se encontro el producto"})
			return
		} else {
			await ProductosModel.findByIdAndDelete(req.params.id)
			res.status(200).send({mensaje:"Producto eliminado"})
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("Hubo un problema al eliminar el producto");
	}
}
