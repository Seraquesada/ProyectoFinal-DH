package com.Grupo5.ProyectoIntegrador.controller;

import com.Grupo5.ProyectoIntegrador.Exceptions.ResourceNotFoundException;
import com.Grupo5.ProyectoIntegrador.entity.Producto;
import com.Grupo5.ProyectoIntegrador.service.ProductoService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
public class ProductoController {
    private final ProductoService productoService;
    private static final Logger logger = Logger.getLogger(CategoriaController.class);

    @Autowired
    public ProductoController(ProductoService productoService) {

        this.productoService = productoService;
    }
    @PostMapping
    public ResponseEntity<Producto> registrarProducto (@RequestBody Producto producto) {
        ResponseEntity<Producto> respuesta;
        respuesta = ResponseEntity.ok(productoService.guardar(producto));
        logger.info("Se registro el producto " + producto.getTitulo());
        return respuesta;
    }
    @GetMapping
    public ResponseEntity<List<Producto>> buscarAllProductos(){
        ResponseEntity<List<Producto>> respuesta;
        respuesta=ResponseEntity.ok(productoService.buscarTodos());
        logger.info("Se busco todos los productos");
        return respuesta;
    }
    @GetMapping("/{id}")
    public ResponseEntity<Producto> buscarProducto(@PathVariable Long id) throws ResourceNotFoundException {
        ResponseEntity<Producto> respuesta;
        Producto producto = productoService.buscar(id);
        if (producto.getId() == null){
            respuesta=ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            logger.error("No se encontro el producto con el id: " + id);
        }
        else {
            respuesta=ResponseEntity.ok(producto);
            logger.info("Se encontro el producto " + producto.getTitulo());
        }
        return respuesta;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarProducto(@PathVariable Long id) throws ResourceNotFoundException {
        productoService.eliminar(id);
        logger.info("Se elimino el producto");
        return ResponseEntity.ok("Se eliminó el producto con id="+id);
    }

    @PutMapping
    public ResponseEntity<Producto> actualizarProducto(@RequestBody Producto producto) throws ResourceNotFoundException {
        ResponseEntity<Producto> respuesta;
        if (productoService.buscar(producto.getId()) != null) {
            logger.info("El producto se actualizo");
            respuesta = ResponseEntity.ok(productoService.actualizar(producto));
        }
        else {
            logger.error("El producto no pudo actualizarse");
            respuesta = ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return respuesta;
    }
}
