package com.Grupo5.ProyectoIntegrador.controller;

import com.Grupo5.ProyectoIntegrador.Exceptions.AlreadyExistException;
import com.Grupo5.ProyectoIntegrador.Exceptions.ResourceNotFoundException;
import com.Grupo5.ProyectoIntegrador.entity.Categoria;
import com.Grupo5.ProyectoIntegrador.service.CategoriaService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {
    private final CategoriaService categoriaService;
    private static final Logger logger = Logger.getLogger(CategoriaController.class);

    @Autowired
    public CategoriaController(CategoriaService categoriaService) {

        this.categoriaService = categoriaService;
    }
    @PostMapping
    public ResponseEntity<Categoria> registrarCategoria (@RequestBody Categoria categoria) throws AlreadyExistException {
        ResponseEntity<Categoria> respuesta;
        respuesta = ResponseEntity.ok(categoriaService.guardar(categoria));
        logger.info("Se registro la categoria " + categoria.getTitulo());
        return respuesta;
    }
    @GetMapping
    public ResponseEntity<List<Categoria>> buscarAllCategorias(){
        ResponseEntity<List<Categoria>> respuesta;
        respuesta=ResponseEntity.ok(categoriaService.buscarTodos());
        logger.info("Se busco todas las categorias");
        return respuesta;
    }
    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscarCategoria(@PathVariable Long id) throws ResourceNotFoundException {
        ResponseEntity<Categoria> respuesta;
        Categoria categoria = categoriaService.buscar(id);
        if (categoria.getId() == null){
            respuesta=ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            logger.error("No se encontro la categoria con el id: " + id);
        }
        else {
            respuesta=ResponseEntity.ok(categoria);
            logger.info("Se encontro la categoria " + categoria.getTitulo());
        }
        return respuesta;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCategoria(@PathVariable Long id) throws ResourceNotFoundException {
        categoriaService.eliminar(id);
        logger.info("Se elimino la categoria");
        return ResponseEntity.ok("Se eliminó la categoria con id="+id);
    }

    @PutMapping
    public ResponseEntity<Categoria> actualizarCategoria(@RequestBody Categoria categoria) throws ResourceNotFoundException {
        ResponseEntity<Categoria> respuesta;
        if (categoriaService.buscar(categoria.getId()) != null) {
            logger.info("La categoria se actualizo");
            respuesta = ResponseEntity.ok(categoriaService.actualizar(categoria));
        }
        else {
            logger.error("La categoria no pudo actualizarse");
            respuesta = ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return respuesta;
    }
}
