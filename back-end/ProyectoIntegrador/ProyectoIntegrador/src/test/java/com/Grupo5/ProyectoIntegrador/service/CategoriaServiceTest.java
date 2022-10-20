package com.Grupo5.ProyectoIntegrador.service;

import com.Grupo5.ProyectoIntegrador.entity.Categoria;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CategoriaServiceTest {
    @Autowired
    CategoriaService categoriaService;

    @Test
    public void CategoriaTest() throws Exception {
        Categoria categoria1 = new Categoria("economico", "muy economico", "www.imagen.com");
        Categoria categoria2 = new Categoria("premium", "muy premium", "www.imagen2.com");

        //Testeando metodo guardar
        Categoria categoriaPrueba1 = categoriaService.guardar(categoria1);
        Categoria categoriaPrueba2 = categoriaService.guardar(categoria2);
        assertEquals(1, categoriaPrueba1.getId());
        assertEquals(2, categoriaPrueba2.getId());

        //Testeando metodo listar todos
        List<Categoria> listaCategorias = categoriaService.buscarTodos();
        assertEquals(2, listaCategorias.size());

        //Testeamos metodo eliminar
        categoriaService.eliminar(1L);
        List<Categoria> listaCategorias2 = categoriaService.buscarTodos();
        assertEquals(1, listaCategorias2.size());

        //Testeamos metodo actualizar
        Categoria categoria3 = new Categoria(2L, "electrico", "muy electrico", "www.imagen3.com");
        categoriaService.actualizar(categoria3);

        //Testeando metodo buscar
        Categoria categoriaAct = categoriaService.buscar(2L);
        assertEquals("electrico", categoriaAct.getTitulo());

    }
}
