package com.Grupo5.ProyectoIntegrador.Security;


import com.Grupo5.ProyectoIntegrador.entity.*;
import com.Grupo5.ProyectoIntegrador.repository.UsuarioRepository;
import com.Grupo5.ProyectoIntegrador.service.CategoriaService;
import com.Grupo5.ProyectoIntegrador.service.CiudadService;
import com.Grupo5.ProyectoIntegrador.service.ImagenService;
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
    ImagenService imagenService;
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
        Ciudad ciudadGuardada3 = ciudadService.guardar(ciudad3);
        Ciudad ciudadGuardada4 = ciudadService.guardar(ciudad4);
        Ciudad ciudadGuardada5 = ciudadService.guardar(ciudad5);
        Ciudad ciudadGuardada6 = ciudadService.guardar(ciudad6);
        Ciudad ciudadGuardada7 = ciudadService.guardar(ciudad7);
        List<Imagen> imagenes=new ArrayList<>();
        List<Imagen> imagenes1= new ArrayList<>();
        Imagen imagen1a =  new Imagen("Exterior - delantero", "https://i.ytimg.com/vi/nx9PvLVssms/maxresdefault.jpg");
        Imagen imagen1b =  new Imagen("Exterior - trasero", "https://f87.bimmerpost.com/forums/e90garageimg/1713/bmw_323i_2.jpg");
        Imagen imagen1c =  new Imagen("Exterior - lateral", "https://images.drive.com.au/caradvice/image/private/c_fill,f_auto,g_auto,h_674,q_auto:eco,w_1200/e3f44ef594fd69816dbe633290d6cbcb");
        Imagen imagen1d =  new Imagen("Interior - volante", "https://g05.bimmerpost.com/forums//picture.php?albumid=2828&pictureid=23445");
        Imagen imagen1e =  new Imagen("Interior - trasero", "https://api.exportfrom.jp/en/files/view/bmw-323i-interior-rear-2.jpg");
        imagenes1.add(imagen1a);
        imagenes1.add(imagen1b);
        imagenes1.add(imagen1c);
        imagenes1.add(imagen1d);
        imagenes1.add(imagen1e);
        System.out.println(imagenes1);
        List<Caracteristica> caracteristicas = new ArrayList<>();
        PoliticasProducto politicas1 = new PoliticasProducto("normas", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas2 = new PoliticasProducto("normas", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas3 = new PoliticasProducto("normas", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas4 = new PoliticasProducto("normas", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas5 = new PoliticasProducto("normas", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas6 = new PoliticasProducto("normas", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas7 = new PoliticasProducto("normas", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        Producto producto1 = new Producto("bmw", "auto genial", ciudadGuardada1, categoria1, imagenes1, caracteristicas, politicas1);
        Producto producto2 = new Producto("audi", "auto super genial", ciudadGuardada2, categoria2, imagenes, caracteristicas, politicas2);
        Producto producto3 = new Producto("audi", "auto super genial", ciudadGuardada3, categoria3, imagenes, caracteristicas, politicas3);
        Producto producto4 = new Producto("audi", "auto super genial", ciudadGuardada4, categoria4, imagenes, caracteristicas, politicas4);
        Producto producto5 = new Producto("audi", "auto super genial", ciudadGuardada5, categoria1, imagenes, caracteristicas, politicas5);
        Producto producto6 = new Producto("audi", "auto super genial", ciudadGuardada6, categoria2, imagenes, caracteristicas, politicas6);
        Producto producto7 = new Producto("audi", "auto super genial", ciudadGuardada7, categoria3, imagenes, caracteristicas, politicas7);
        productoService.guardar(producto1);
        productoService.guardar(producto2);
        productoService.guardar(producto3);
        productoService.guardar(producto4);
        productoService.guardar(producto5);
        productoService.guardar(producto6);
        productoService.guardar(producto7);

    }
}
