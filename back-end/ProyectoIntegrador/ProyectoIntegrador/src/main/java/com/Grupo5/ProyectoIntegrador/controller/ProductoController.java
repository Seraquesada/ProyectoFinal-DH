package com.Grupo5.ProyectoIntegrador.controller;

import com.Grupo5.ProyectoIntegrador.Exceptions.ResourceNotFoundException;
import com.Grupo5.ProyectoIntegrador.entity.Producto;
import com.Grupo5.ProyectoIntegrador.entity.Reserva;
import com.Grupo5.ProyectoIntegrador.service.ProductoService;
import com.Grupo5.ProyectoIntegrador.service.ReservaService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/productos")
public class ProductoController {
    private final ProductoService productoService;
    private final ReservaService reservaService;
    private static final Logger logger = Logger.getLogger(CategoriaController.class);

    @Autowired
    public ProductoController(ProductoService productoService, ReservaService reservaService) {
        this.reservaService = reservaService;
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
    public ResponseEntity<List<Producto>> buscarProductosRandom(){
        ResponseEntity<List<Producto>> respuesta;
        respuesta=ResponseEntity.ok(productoService.buscarProductosRandom());
        logger.info("Se buscaron productos random?");
        return respuesta;
    }
    @GetMapping("/filter")
    public ResponseEntity<List<Producto>> filtrarProductos(@RequestParam(required = false, defaultValue = "") String categoria, @RequestParam(required = false, defaultValue = "") String ciudad, @RequestParam(required = false, defaultValue = "")String fechaInicio, @RequestParam(required = false, defaultValue = "")String fechaFinal){
        ResponseEntity<List<Producto>> respuesta = null;
        if(!categoria.isBlank() && !ciudad.isBlank() && fechaInicio.isBlank()) {
            Long categoria_id = Long.valueOf(categoria);
            Long ciudad_id = Long.valueOf(ciudad);
            respuesta = ResponseEntity.ok(productoService.buscarPorCategoriaYCiudad(categoria_id, ciudad_id));
            logger.info("Se filtraron productos por categoria Y ciudad");
        }else if(categoria.isBlank() && ciudad.isBlank() && fechaInicio.isBlank()){
            respuesta=ResponseEntity.ok(productoService.buscarTodos());
            logger.info("Se buscaron todos los productos");
        } else if (categoria.isBlank() && !ciudad.isBlank() && !fechaInicio.isBlank()) {
            Long ciudad_id = Long.valueOf(ciudad);
            LocalDate fechaInicio1 = LocalDate.parse(fechaInicio);
            LocalDate fechaFinal1 = LocalDate.parse(fechaFinal);
            List<Producto> productos = productoService.buscarPorCategoriaOCiudad(0L, ciudad_id);
            List<Reserva> reservasInvalidas = reservaService.buscarReservasInvalidas(fechaInicio1, fechaFinal1);
            for (Reserva reserva:reservasInvalidas) {
                productos.remove(reserva.getProducto());
            }
            respuesta=ResponseEntity.ok(productos);
            logger.info("Se filtraron productos por ciudad y fecha");
        }
        else if (!categoria.isBlank() && ciudad.isBlank() && !fechaInicio.isBlank()) {
            Long categoria_id = Long.valueOf(categoria);
            LocalDate fechaInicio1 = LocalDate.parse(fechaInicio);
            LocalDate fechaFinal1 = LocalDate.parse(fechaFinal);
            List<Producto> productos = productoService.buscarPorCategoriaOCiudad(categoria_id, 0L);
            List<Reserva> reservasInvalidas = reservaService.buscarReservasInvalidas(fechaInicio1, fechaFinal1);
            for (Reserva reserva:reservasInvalidas) {
                productos.remove(reserva.getProducto());
            }
            respuesta=ResponseEntity.ok(productos);
            logger.info("Se filtraron productos por categoria y fecha");
        }
        else if (!categoria.isBlank() && !ciudad.isBlank() && !fechaInicio.isBlank()) {
            Long categoria_id = Long.valueOf(categoria);
            Long ciudad_id = Long.valueOf(ciudad);
            LocalDate fechaInicio1 = LocalDate.parse(fechaInicio);
            LocalDate fechaFinal1 = LocalDate.parse(fechaFinal);
            List<Producto> productos = productoService.buscarPorCategoriaYCiudad(categoria_id, ciudad_id);
            List<Reserva> reservasInvalidas = reservaService.buscarReservasInvalidas(fechaInicio1, fechaFinal1);
            for (Reserva reserva:reservasInvalidas) {
                productos.remove(reserva.getProducto());
            }
            respuesta=ResponseEntity.ok(productos);
            logger.info("Se filtraron productos por categoria y fecha");
        }
        else if (!categoria.isBlank() && ciudad.isBlank() && fechaInicio.isBlank()){
            Long categoria_id = Long.valueOf(categoria);
            respuesta = ResponseEntity.ok(productoService.buscarPorCategoriaOCiudad(categoria_id, 0L));
            logger.info("Se filtraron productos por categoria");
        }
        else if (categoria.isBlank() && !ciudad.isBlank() && fechaInicio.isBlank()){
            Long ciudad_id = Long.valueOf(ciudad);
            respuesta = ResponseEntity.ok(productoService.buscarPorCategoriaOCiudad(0L, ciudad_id));
            logger.info("Se filtraron productos por ciudad");
        } else if (categoria.isBlank() && ciudad.isBlank() && !fechaInicio.isBlank()) {
            List<Producto> productos = productoService.buscarTodos();
            LocalDate fechaInicio1 = LocalDate.parse(fechaInicio);
            LocalDate fechaFinal1 = LocalDate.parse(fechaFinal);
            List<Reserva> reservasInvalidas = reservaService.buscarReservasInvalidas(fechaInicio1, fechaFinal1);
            for (Reserva reserva:reservasInvalidas) {
                productos.remove(reserva.getProducto());
            }
            respuesta=ResponseEntity.ok(productos);
            logger.info("Se filtraron productos por fecha");
        }

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
