package com.Grupo5.ProyectoIntegrador.service;

import com.Grupo5.ProyectoIntegrador.entity.Caracteristica;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class CaracteristicaServiceTest {
    @Autowired
    CaracteristicaService caracteristicaService;
    @Test
    public void CaracteristicaTest() throws Exception{
        Caracteristica caracteristica1 = new Caracteristica("Cantidad de Puertas", "4", 1);
        Caracteristica caracteristica2 = new Caracteristica("Tipo motor", "v8", 2);

        //Testeando metodo guardar
        Caracteristica caracteristicaPrueba1 = caracteristicaService.guardar(caracteristica1);
        Caracteristica caracteristicaPrueba2 = caracteristicaService.guardar(caracteristica2);
        assertEquals(1, caracteristicaPrueba1.getId());
        assertEquals(2,caracteristicaPrueba2.getId());

        //Testeando metodo listar todos
        List<Caracteristica> listaCaracteristica = caracteristicaService.buscarTodos();
        assertEquals(2, listaCaracteristica.size());

        //Testeamos metodo eliminar
        caracteristicaService.eliminar(1L);
        List<Caracteristica> listaCaracteristica2 = caracteristicaService.buscarTodos();
        assertEquals(1, listaCaracteristica2.size());

        //Testeamos metodo actualizar
        Caracteristica caracteristica3 = new Caracteristica(2L,"Tipo llantas", "Montaña", 3);
        caracteristicaService.actualizar(caracteristica3);

        //Testeando metodo buscar
        Caracteristica caracteristicaAct = caracteristicaService.buscar(2L);
        assertEquals("Tipo llantas", caracteristicaAct.getNombre());
    }
}