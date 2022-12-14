package com.Grupo5.ProyectoIntegrador.service;

import com.Grupo5.ProyectoIntegrador.entity.Imagen;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class ImagenServiceTest {
    @Autowired
    ImagenService imagenService;
    @Test
    public void ImagenTest() throws Exception{
        Imagen imagen1 = new Imagen("imagen1", "www.imagen1.com");
        Imagen imagen2 = new Imagen("imagen2", "www.imagen2.com");

        //Testeando metodo guardar
        Imagen imagenPrueba1 = imagenService.guardar(imagen1);
        Imagen imagenPrueba2 = imagenService.guardar(imagen2);
        assertEquals(1, imagenPrueba1.getId());
        assertEquals(2,imagenPrueba2.getId());

        //Testeando metodo listar todos
        List<Imagen> listaImagen = imagenService.buscarTodos();
        assertEquals(2, listaImagen.size());

        //Testeamos metodo eliminar
        imagenService.eliminar(1L);
        List<Imagen> listaImagen2 = imagenService.buscarTodos();
        assertEquals(1, listaImagen2.size());

        //Testeamos metodo actualizar
        Imagen imagen3 = new Imagen(2L,"imagen3", "www.imagen3.com");
        imagenService.actualizar(imagen3);

        //Testeando metodo buscar
        Imagen imagenAct = imagenService.buscar(2L);
        assertEquals("imagen3", imagenAct.getTitulo());
    }
}