package com.Grupo5.ProyectoIntegrador.controller;

import com.Grupo5.ProyectoIntegrador.entity.Categoria;
import com.Grupo5.ProyectoIntegrador.entity.Ciudad;
import com.Grupo5.ProyectoIntegrador.service.CategoriaService;
import com.Grupo5.ProyectoIntegrador.service.CiudadService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ciudades")
public class CiudadController {
    private final CiudadService ciudadService;
    private static final Logger logger = Logger.getLogger(CategoriaController.class);

    @Autowired
    public CiudadController(CiudadService ciudadService) {

        this.ciudadService = ciudadService;
    }
    @GetMapping
    public ResponseEntity<List<Ciudad>> buscarAllCiudades(){
        ResponseEntity<List<Ciudad>> respuesta;
        respuesta=ResponseEntity.ok(ciudadService.buscarTodos());
        logger.info("Se buscaron todas lsas ciudades");
        return respuesta;
    }
}
