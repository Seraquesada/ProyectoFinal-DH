package com.Grupo5.ProyectoIntegrador.Security;


import com.Grupo5.ProyectoIntegrador.entity.*;
import com.Grupo5.ProyectoIntegrador.repository.UsuarioRepository;
import com.Grupo5.ProyectoIntegrador.service.CategoriaService;
import com.Grupo5.ProyectoIntegrador.service.CiudadService;
import com.Grupo5.ProyectoIntegrador.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CargaDatos implements ApplicationRunner {
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    CategoriaService categoriaService;
    @Autowired
    CiudadService ciudadService;
    @Autowired
    ProductoService productoService;
    @Override
    public void run(ApplicationArguments args) throws Exception {
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
        usuarioRepository.save(usuario);
        Categoria categoria1 = new Categoria("Sedan", "Vehiculo de cuatro puertas y baúl. Ideal para cuatro personas y dos valijas grandes.", "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
        Categoria categoria2 = new Categoria("Sport Utility Vehicle", "Los SUVs  son  para uso en caminos mantenidos, ya sean pavimentados, de grava o de tierra. Amplios y con baul integrado, ideales para aventureros!", "https://imageio.forbes.com/specials-images/imageserve/5d389da195e0230008f6724a/2020-Ford-Explorer/0x0.jpg?format=jpg&crop=4560,2565,x430,y658,safe&width=960");
        Categoria categoria3 = new Categoria("Hatchback", "Vechículos de tres o cinco puertas contando la puerta trasera que abre hacia arriba para brindar acceso a un área de carga. Son amplios, ideales para llevar todo tu equipaje!", "https://hagerty-media-prod.imgix.net/2021/12/2021-Toyota-Corolla-Hatchback-SE-Nightshade-3-scaled.jpg?auto=format%2Ccompress&ixlib=php-3.3.0");
        Categoria categoria4 = new Categoria("Coupe", "Los cupés logran un gran equilibrio entre estilo, sustancia y espacio. La mayoría tienen dos puertas y cuatro asientos, algunos tienen asientos traseros más prácticos que otros. El baul suele ser espacioso.", "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/BMW-4-Series_Coupe_2014.jpg");
        categoriaService.guardar(categoria1);
        categoriaService.guardar(categoria2);
        categoriaService.guardar(categoria3);
        categoriaService.guardar(categoria4);
        Ciudad ciudad1 = new Ciudad("Catamarca", -28.429150582935314, -65.78580975432385);
        Ciudad ciudad2 = new Ciudad("Cordoba",-30.776425257706205, -64.1885096801536);
        Ciudad ciudad3 = new Ciudad("Buenos Aires", -33.4332690719713, -58.25930123975371);
        Ciudad ciudad4 = new Ciudad("La Plata",-34.82769111860079, -57.95626284397974);
        Ciudad ciudad5 = new Ciudad("Comodoro Rivadavia", -45.81929975939069, -67.48423025055946);
        Ciudad ciudad6 = new Ciudad("Salta", -24.681875332528787, -65.40838584304728);
        Ciudad ciudad7 = new Ciudad("San Carlos de Bariloche", -41.035482618111146, -71.2996413834136);
        Ciudad ciudadGuardada1 = ciudadService.guardar(ciudad1);
        Ciudad ciudadGuardada2 = ciudadService.guardar(ciudad2);
        List<Imagen> imagenes=new ArrayList<>();
        List<Caracteristica> caracteristicas = new ArrayList<>();
        Producto producto1 = new Producto("bmw", "auto genial", ciudadGuardada1, categoria1, imagenes, caracteristicas);
        Producto producto2 = new Producto("audi", "auto super genial", ciudadGuardada2, categoria2, imagenes, caracteristicas);
        productoService.guardar(producto1);
        productoService.guardar(producto2);

    }
}
