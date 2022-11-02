package com.Grupo5.ProyectoIntegrador.service;

import com.Grupo5.ProyectoIntegrador.entity.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class ProductoServiceTest {
    @Autowired
    ProductoService productoService;
    @Autowired
    CaracteristicaService caracteristicaService;
    @Autowired
    CiudadService ciudadService;
    @Autowired
    ImagenService imagenService;
    @Autowired
    CategoriaService categoriaService;

    @Test
    public void ProductoTest() throws Exception {
        Categoria categoria1 = new Categoria("Sedan", "Vehiculo de cuatro puertas y baúl. Ideal para cuatro personas y dos valijas grandes.", "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
        Categoria categoria2 = new Categoria("Sport Utility Vehicle", "Los SUVs  son  para uso en caminos mantenidos, ya sean pavimentados, de grava o de tierra. Amplios y con baul integrado, ideales para aventureros!", "https://imageio.forbes.com/specials-images/imageserve/5d389da195e0230008f6724a/2020-Ford-Explorer/0x0.jpg?format=jpg&crop=4560,2565,x430,y658,safe&width=960");
        Categoria categoriaGuardada1 = categoriaService.guardar(categoria1);
        Categoria categoriaGuardada2 = categoriaService.guardar(categoria2);
        Ciudad ciudad1 = new Ciudad("Catamarca", -28.429150582935314, -65.78580975432385);
        Ciudad ciudad2 = new Ciudad("Cordoba",-30.776425257706205, -64.1885096801536);
        Ciudad ciudadGuardada1 = ciudadService.guardar(ciudad1);
        Ciudad ciudadGuardada2 = ciudadService.guardar(ciudad2);
        List<Imagen> imagenes=new ArrayList<>();
        List<Caracteristica> caracteristicas = new ArrayList<>();
        Producto producto1 = new Producto("bmw", "auto genial", ciudadGuardada1, categoriaGuardada1, imagenes, caracteristicas);
        Producto producto2 = new Producto("audi", "auto super genial", ciudadGuardada2, categoriaGuardada2, imagenes, caracteristicas);

        //Testeando metodo guardar
        Producto productoPrueba1 = productoService.guardar(producto1);
        Producto productoPrueba2 = productoService.guardar(producto2);
        assertEquals(1, productoPrueba1.getId());
        assertEquals(2, productoPrueba2.getId());

        //Testeando metodo listar todos
        List<Producto> listaproducto = productoService.buscarTodos();
        assertEquals(2, listaproducto.size());

        //Testeamos metodo eliminar
        productoService.eliminar(1L);
        List<Producto> listaproducto2 = productoService.buscarTodos();
        assertEquals(1, listaproducto2.size());

        //Testeamos metodo actualizar
        Producto producto3 = new Producto(2L,"camaro", "auto super genial", ciudadGuardada2, categoriaGuardada2, imagenes, caracteristicas);
        productoService.actualizar(producto3);

        //Testeando metodo buscar
        Producto productoAct = productoService.buscar(2L);
        assertEquals("camaro", productoAct.getTitulo());
    }
}