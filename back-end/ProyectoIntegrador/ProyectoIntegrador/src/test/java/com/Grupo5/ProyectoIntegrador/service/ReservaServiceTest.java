package com.Grupo5.ProyectoIntegrador.service;

import com.Grupo5.ProyectoIntegrador.entity.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.sql.Time;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class ReservaServiceTest {
    @Autowired
    UsuarioService usuarioService;
    @Autowired
    ProductoService productoService;
    @Autowired
    CiudadService ciudadService;
    @Autowired
    CategoriaService categoriaService;
    @Autowired
    ReservaService reservaService;

    @Test
    public void ReservaTest() throws Exception{
        Categoria categoria1 = new Categoria("Sedan", "Vehiculo de cuatro puertas y baúl. Ideal para cuatro personas y dos valijas grandes.", "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
        Categoria categoria2 = new Categoria("Sport Utility Vehicle", "Los SUVs  son  para uso en caminos mantenidos, ya sean pavimentados, de grava o de tierra. Amplios y con baul integrado, ideales para aventureros!", "https://imageio.forbes.com/specials-images/imageserve/5d389da195e0230008f6724a/2020-Ford-Explorer/0x0.jpg?format=jpg&crop=4560,2565,x430,y658,safe&width=960");
        Categoria categoriaGuardada1 = categoriaService.guardar(categoria1);
        Categoria categoriaGuardada2 = categoriaService.guardar(categoria2);
        Ciudad ciudad1 = new Ciudad("Catamarca", -28.429150582935314, -65.78580975432385);
        Ciudad ciudad2 = new Ciudad("Cordoba",-30.776425257706205, -64.1885096801536);
        Ciudad ciudadGuardada1 = ciudadService.guardar(ciudad1);
        Ciudad ciudadGuardada2 = ciudadService.guardar(ciudad2);
        Set<Imagen> imagenes=new HashSet<>();
        Set<Caracteristica> caracteristicas = new HashSet<>();
        Set<Reserva> reservas=new HashSet<>();
        PoliticasProducto politicas1 = new PoliticasProducto("normas", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas2 = new PoliticasProducto("normas1", "portarse bien1", "seguridad1", "tener cuidado1", "cancelacion1", "te va a devolver el dinero su p*ta madre1");
        Producto producto1 = new Producto("bmw", "auto genial", "hola", ciudadGuardada1, categoriaGuardada1, imagenes, caracteristicas, politicas1, reservas);
        Producto producto2 = new Producto("audi", "auto super genial", "chau", ciudadGuardada2, categoriaGuardada2, imagenes, caracteristicas, politicas2, reservas);
        Producto productoPrueba1 = productoService.guardar(producto1);
        Producto productoPrueba2 = productoService.guardar(producto2);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = "digital";
        String passHash = passwordEncoder.encode(password);
        Usuario usuario = new Usuario();
        usuario.setNombre("Nicolas");
        usuario.setApellido("Montero");
        usuario.setMail("nico.monterosabeli@gmail.com");
        usuario.setUserName("nico.monterosabeli@gmail.com");
        usuario.setPassword(passHash);
        usuario.setUsuarioRol(RolUsuario.ROLE_ADMIN);
        Usuario usuario1 = usuarioService.guardar(usuario);

        Time time1 = new Time(20, 50, 20);
        LocalDate fecha = LocalDate.now();
        LocalDate fecha2 = LocalDate.of(2022, 12, 20);
        Reserva reserva1 = new Reserva(time1, fecha, fecha2, productoPrueba1, usuario1);
        Reserva reserva2 = new Reserva(time1, fecha, fecha2, productoPrueba2, usuario1);

        //Testeando metodo guardar
        Reserva reservaPrueba1 = reservaService.guardar(reserva1);
        Reserva reservaPrueba2 = reservaService.guardar(reserva2);
        assertEquals(1, reservaPrueba1.getId());
        assertEquals(2,reservaPrueba2.getId());

        //Testeando metodo listar todos
        List<Reserva> listareserva = reservaService.buscarTodos();
        assertEquals(2, listareserva.size());

        //Testeamos metodo eliminar
        reservaService.eliminar(1L);
        List<Reserva> listareserva2 = reservaService.buscarTodos();
        assertEquals(1, listareserva2.size());

        //Testeamos metodo actualizar
        Time time2 = new Time(21, 50, 20);
        Reserva reserva3 = new Reserva(2L,time2, fecha, fecha2, productoPrueba2, usuario1);
        reservaService.actualizar(reserva3);

        //Testeando metodo buscar
        Reserva reservaAct = reservaService.buscar(2L);
        assertEquals(time2, reservaAct.getHoraInicio());
    }
}