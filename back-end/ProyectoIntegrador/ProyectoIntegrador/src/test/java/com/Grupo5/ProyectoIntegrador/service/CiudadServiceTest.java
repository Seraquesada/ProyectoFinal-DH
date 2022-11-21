package com.Grupo5.ProyectoIntegrador.service;

import com.Grupo5.ProyectoIntegrador.entity.Ciudad;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class CiudadServiceTest {
    @Autowired
    CiudadService ciudadService;
    @Test
    public void CiudadTest() throws Exception{
        Ciudad ciudad1 = new Ciudad("Catamarca", -28.429150582935314, -65.78580975432385);
        Ciudad ciudad2 = new Ciudad("Jujuy", -24.15159239485633, -65.301496769158);

        //Testeando metodo guardar
        Ciudad ciudadPrueba1 = ciudadService.guardar(ciudad1);
        Ciudad ciudadPrueba2 = ciudadService.guardar(ciudad2);
        assertEquals(1, ciudadPrueba1.getId());
        assertEquals(2,ciudadPrueba2.getId());

        //Testeando metodo listar todos
        List<Ciudad> listaCiudad = ciudadService.buscarTodos();
        assertEquals(2, listaCiudad.size());

        //Testeamos metodo eliminar
        ciudadService.eliminar(1L);
        List<Ciudad> listaCiudad2 = ciudadService.buscarTodos();
        assertEquals(1, listaCiudad2.size());

        //Testeamos metodo actualizar
        Ciudad ciudad3 = new Ciudad(2L,"Formosa", -25.40551598517284, -58.427682968946264);
        ciudadService.actualizar(ciudad3);

        //Testeando metodo buscar
        Ciudad ciudadAct = ciudadService.buscar(2L);
        assertEquals("Formosa", ciudadAct.getNombre());
    }
}