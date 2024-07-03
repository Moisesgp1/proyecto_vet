const express = require(`express`);
const router = express.Router();
const UsuarioController = require(`../controllers/usuario.controller`)
const ProductoController = require(`../controllers/productos.controller`)

router.post(`/crear-Usuario`,UsuarioController.crearUsuario)
router.get(`/consultas-Usuarios`,UsuarioController.consultasUsuarios)
router.get(`/consulta-Usuario/:busqueda`,UsuarioController.consultaUsuario)
router.put(`/actulizar-Usuario/:id`,UsuarioController.actualizarUsuario)
router.delete(`/borrar-Usuario/:id`,UsuarioController.BorrarUsuario)


router.post(`/crear-Producto`,ProductoController.crearProducto)
router.get(`/consultas-Productos`,ProductoController.consultasProductos)
router.get(`/consulta-Producto/:busqueda`,ProductoController.consultaProducto)
router.put(`/actualizar-Producto/:id`,ProductoController.actualizarProductos)
router.delete(`/borrar-Producto/:id`,ProductoController.BorrarProducto)



module.exports =router;
