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
        Categoria categoria1 = new Categoria("Sedan", "Vehículo de cuatro puertas y baúl. Ideal para cuatro personas y dos valijas grandes.", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/categorias/sedan.avif");
        Categoria categoria2 = new Categoria("Sport Utility Vehicle", "Los SUVs  son  para uso en caminos mantenidos, ya sean pavimentados, de grava o de tierra. Amplios y con baul integrado, ideales para aventureros!", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/categorias/suv.jpg");
        Categoria categoria3 = new Categoria("Hatchback", "Vehículos de tres o cinco puertas contando la puerta trasera que abre hacia arriba para brindar acceso a un área de carga. Son amplios, ideales para llevar todo tu equipaje!", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/categorias/hatckback.avif");
        Categoria categoria4 = new Categoria("Coupe", "Los cupés logran un gran equilibrio entre estilo, sustancia y espacio. La mayoría tienen dos puertas y cuatro asientos, algunos tienen asientos traseros más prácticos que otros. El baul suele ser espacioso.", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/categorias/coupe.jpg");
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

        List<Imagen> imagenes1= new ArrayList<>();
        Imagen imagen1a =  new Imagen("Exterior - delantero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/bmw_323i/front.jpg");
        Imagen imagen1b =  new Imagen("Exterior - trasero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/bmw_323i/back.jpg");
        Imagen imagen1c =  new Imagen("Exterior - lateral", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/bmw_323i/frontII.avif");
        Imagen imagen1d =  new Imagen("Interior - delantero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/bmw_323i/interior.jpg");
        Imagen imagen1e =  new Imagen("Interior - trasero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/bmw_323i/interior_rear.jpg");
        imagenes1.add(imagen1a);
        imagenes1.add(imagen1b);
        imagenes1.add(imagen1c);
        imagenes1.add(imagen1d);
        imagenes1.add(imagen1e);

        List<Imagen> imagenes2=new ArrayList<>();
        Imagen imagen2a =  new Imagen("Exterior - delantero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/chervolet_cruze_rs/front.webp");
        Imagen imagen2b =  new Imagen("Exterior - trasero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/chervolet_cruze_rs/side.webp");
        Imagen imagen2c =  new Imagen("Interior - volante", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/chervolet_cruze_rs/interior.webp");
        Imagen imagen2d =  new Imagen("Interior - vertical", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/chervolet_cruze_rs/interior_top.webp");
        Imagen imagen2e =  new Imagen("Interior - trasero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/chervolet_cruze_rs/interior_rear.webp");
        imagenes2.add(imagen2a);
        imagenes2.add(imagen2b);
        imagenes2.add(imagen2c);
        imagenes2.add(imagen2d);
        imagenes2.add(imagen2e);


        List<Imagen> imagenes3=new ArrayList<>();
        Imagen imagen3a =  new Imagen("Exterior - delantero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/haval_h2/front.jpg");
        Imagen imagen3b =  new Imagen("Exterior - delantero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/haval_h2/frontII.jpg");
        Imagen imagen3c =  new Imagen("Interior - volante", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/haval_h2/interior.webp");
        Imagen imagen3d =  new Imagen("Interior - lateral", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/haval_h2/interior_side.jpg");
        Imagen imagen3e =  new Imagen("Interior - trasero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/haval_h2/interior_top.jpg");
        imagenes3.add(imagen3a);
        imagenes3.add(imagen3b);
        imagenes3.add(imagen3c);
        imagenes3.add(imagen3d);
        imagenes3.add(imagen3e);

        List<Imagen> imagenes4=new ArrayList<>();
        Imagen imagen4a =  new Imagen("Exterior - lateral - izq", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/mazda_cx_5/front.webp");
        Imagen imagen4b =  new Imagen("Exterior - lateral - der", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/mazda_cx_5/frontII.webp");
        Imagen imagen4c =  new Imagen("Interior - volante", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/mazda_cx_5/interior.jpg");
        Imagen imagen4d =  new Imagen("Interior - lateral", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/mazda_cx_5/interior_side.jpg");
        Imagen imagen4e =  new Imagen("Interior - vertical", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/mazda_cx_5/interior_top.jpg");
        imagenes4.add(imagen4a);
        imagenes4.add(imagen4b);
        imagenes4.add(imagen4c);
        imagenes4.add(imagen4d);
        imagenes4.add(imagen4e);

        List<Imagen> imagenes5=new ArrayList<>();
        Imagen imagen5a =  new Imagen("Exterior - delantero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/volkswagen_golf_gti/front.webp");
        Imagen imagen5b =  new Imagen("Exterior - trasero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/volkswagen_golf_gti/back.jpeg");
        Imagen imagen5c =  new Imagen("Interior - volante", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/volkswagen_golf_gti/interior.jpg");
        Imagen imagen5d =  new Imagen("Interior - volante2", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/volkswagen_golf_gti/interiorII.jpg");
        Imagen imagen5e =  new Imagen("Interior - trasero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/volkswagen_golf_gti/interior_rear.jpg");
        imagenes5.add(imagen5a);
        imagenes5.add(imagen5b);
        imagenes5.add(imagen5c);
        imagenes5.add(imagen5d);
        imagenes5.add(imagen5e);

        List<Imagen> imagenes6=new ArrayList<>();
        Imagen imagen6a =  new Imagen("Exterior - delantero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/toyota_chr/front.webp");
        Imagen imagen6b =  new Imagen("Exterior - trasero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/toyota_chr/rear.webp");
        Imagen imagen6c =  new Imagen("Interior - volante", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/toyota_chr/interior.webp");
        Imagen imagen6d =  new Imagen("Interior - lateral", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/toyota_chr/interior_side.jpg");
        Imagen imagen6e =  new Imagen("Interior - trasero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/toyota_chr/Interior_rear.jpg");
        imagenes6.add(imagen6a);
        imagenes6.add(imagen6b);
        imagenes6.add(imagen6c);
        imagenes6.add(imagen6d);
        imagenes6.add(imagen6e);

        List<Imagen> imagenes7=new ArrayList<>();
        Imagen imagen7a =  new Imagen("Exterior - frontal", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/ford_mustang/front.jpg");
        Imagen imagen7b =  new Imagen("Exterior - trasero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/ford_mustang/rear.jpg");
        Imagen imagen7c =  new Imagen("Exterior - lateral", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/ford_mustang/side.webp");
        Imagen imagen7d =  new Imagen("Interior - volante", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/ford_mustang/interior.jpg");
        Imagen imagen7e =  new Imagen("Interior - trasero", "https://grupo5imagenes.s3.us-east-2.amazonaws.com/ford_mustang/interior_rear.jpg");
        imagenes7.add(imagen7a);
        imagenes7.add(imagen7b);
        imagenes7.add(imagen7c);
        imagenes7.add(imagen7d);
        imagenes7.add(imagen7e);


        List<Caracteristica> caracteristicas1 = new ArrayList<>();
        Caracteristica caracteristica1a =  new Caracteristica("Capacidad Máxima: ", "5 adultos");
        Caracteristica caracteristica1b =  new Caracteristica("Equipaje Recomendado: ", "Hasta 3 valijas grandes");
        Caracteristica caracteristica1c =  new Caracteristica("Transmisión: ", "Automática");
        Caracteristica caracteristica1d =  new Caracteristica("Cantidad de Airbags en cabina: ", "7");
        Caracteristica caracteristica1e =  new Caracteristica("Velocidad máxima: ", "228 km/h");
        Caracteristica caracteristica1f =  new Caracteristica("Combustible: ","Nafta Premium");
        caracteristicas1.add(caracteristica1a);
        caracteristicas1.add(caracteristica1b);
        caracteristicas1.add(caracteristica1c);
        caracteristicas1.add(caracteristica1d);
        caracteristicas1.add(caracteristica1e);
        caracteristicas1.add(caracteristica1f);

        List<Caracteristica> caracteristicas2 = new ArrayList<>();
        Caracteristica caracteristica2a =  new Caracteristica("Capacidad Máxima: ", "5 adultos");
        Caracteristica caracteristica2b =  new Caracteristica("Equipaje Recomendado: ", "Hasta 3 valijas");
        Caracteristica caracteristica2c =  new Caracteristica("Transmisión: ", "Automática");
        Caracteristica caracteristica2d =  new Caracteristica("Cantidad de Airbags en cabina: ", "7");
        Caracteristica caracteristica2e =  new Caracteristica("Velocidad máxima: ", "215 km/h");
        Caracteristica caracteristica2f =  new Caracteristica("Combustible: ","Nafta Premium");
        caracteristicas2.add(caracteristica2a);
        caracteristicas2.add(caracteristica2b);
        caracteristicas2.add(caracteristica2c);
        caracteristicas2.add(caracteristica2d);
        caracteristicas2.add(caracteristica2e);
        caracteristicas2.add(caracteristica2f);

        List<Caracteristica> caracteristicas3 = new ArrayList<>();
        Caracteristica caracteristica3a =  new Caracteristica("Capacidad Máxima: ", "5 adultos");
        Caracteristica caracteristica3b =  new Caracteristica("Equipaje Recomendado: ", "Hasta 5 valijas");
        Caracteristica caracteristica3c =  new Caracteristica("Transmisión: ", "Automática");
        Caracteristica caracteristica3d =  new Caracteristica("Cantidad de Airbags en cabina: ", "8");
        Caracteristica caracteristica3e =  new Caracteristica("Velocidad máxima: ", "190 km/h");
        Caracteristica caracteristica3f =  new Caracteristica("Combustible: ","Nafta Premium");
        caracteristicas3.add(caracteristica3a);
        caracteristicas3.add(caracteristica3b);
        caracteristicas3.add(caracteristica3c);
        caracteristicas3.add(caracteristica3d);
        caracteristicas3.add(caracteristica3e);
        caracteristicas3.add(caracteristica3f);

        List<Caracteristica> caracteristicas4 = new ArrayList<>();
        Caracteristica caracteristica4a =  new Caracteristica("Capacidad Máxima: ", "5 adultos");
        Caracteristica caracteristica4b =  new Caracteristica("Equipaje Recomendado: ", "Hasta 5 valijas");
        Caracteristica caracteristica4c =  new Caracteristica("Transmisión: ", "Automática");
        Caracteristica caracteristica4d =  new Caracteristica("Cantidad de Airbags en cabina: ", "8");
        Caracteristica caracteristica4e =  new Caracteristica("Velocidad máxima: ", "210 km/h");
        Caracteristica caracteristica4f =  new Caracteristica("Combustible: ","Nafta Premium");
        caracteristicas4.add(caracteristica4a);
        caracteristicas4.add(caracteristica4b);
        caracteristicas4.add(caracteristica4c);
        caracteristicas4.add(caracteristica4d);
        caracteristicas4.add(caracteristica4e);
        caracteristicas4.add(caracteristica4f);

        List<Caracteristica> caracteristicas5 = new ArrayList<>();
        Caracteristica caracteristica5a =  new Caracteristica("Capacidad Máxima: ", "5 adultos");
        Caracteristica caracteristica5b =  new Caracteristica("Equipaje Recomendado: ", "Hasta 3 valijas");
        Caracteristica caracteristica5c =  new Caracteristica("Transmisión: ", "Automática");
        Caracteristica caracteristica5d =  new Caracteristica("Cantidad de Airbags en cabina: ", "5");
        Caracteristica caracteristica5e =  new Caracteristica("Velocidad máxima: ", "245 km/h");
        Caracteristica caracteristica5f =  new Caracteristica("Combustible: ","Nafta Premium");
        caracteristicas5.add(caracteristica5a);
        caracteristicas5.add(caracteristica5b);
        caracteristicas5.add(caracteristica5c);
        caracteristicas5.add(caracteristica5d);
        caracteristicas5.add(caracteristica5e);
        caracteristicas5.add(caracteristica5f);

        List<Caracteristica> caracteristicas6 = new ArrayList<>();
        Caracteristica caracteristica6a =  new Caracteristica("Capacidad Máxima: ", "5 adultos");
        Caracteristica caracteristica6b =  new Caracteristica("Equipaje Recomendado: ", "Hasta 4 valijas");
        Caracteristica caracteristica6c =  new Caracteristica("Transmisión: ", "Automática");
        Caracteristica caracteristica6d =  new Caracteristica("Cantidad de Airbags en cabina: ", "5");
        Caracteristica caracteristica6e =  new Caracteristica("Velocidad máxima: ", "180 km/h");
        Caracteristica caracteristica6f =  new Caracteristica("Combustible: ","Híbrido (Nafta Premium y Electricidad)");
        caracteristicas6.add(caracteristica6a);
        caracteristicas6.add(caracteristica6b);
        caracteristicas6.add(caracteristica6c);
        caracteristicas6.add(caracteristica6d);
        caracteristicas6.add(caracteristica6e);
        caracteristicas6.add(caracteristica6f);

        List<Caracteristica> caracteristicas7 = new ArrayList<>();
        Caracteristica caracteristica7a =  new Caracteristica("Capacidad Máxima: ", "4 adultos");
        Caracteristica caracteristica7b =  new Caracteristica("Equipaje Recomendado: ", "Hasta 2 valijas");
        Caracteristica caracteristica7c =  new Caracteristica("Transmisión: ", "Automática");
        Caracteristica caracteristica7d =  new Caracteristica("Cantidad de Airbags en cabina: ", "5");
        Caracteristica caracteristica7e =  new Caracteristica("Velocidad máxima: ", "270 km/h");
        Caracteristica caracteristica7f =  new Caracteristica("Combustible: ","Nafta Premium");
        caracteristicas7.add(caracteristica7a);
        caracteristicas7.add(caracteristica7b);
        caracteristicas7.add(caracteristica7c);
        caracteristicas7.add(caracteristica7d);
        caracteristicas7.add(caracteristica7e);
        caracteristicas7.add(caracteristica7f);

        PoliticasProducto politicas1 = new PoliticasProducto("Normas", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Seguridad", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Cancelacion", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!");

        PoliticasProducto politicas2 = new PoliticasProducto("Normas", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Seguridad", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Cancelacion", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!");

        PoliticasProducto politicas3 = new PoliticasProducto("Normas", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Seguridad", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Cancelacion", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!");

        PoliticasProducto politicas4 = new PoliticasProducto("Normas", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Seguridad", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Cancelacion", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!");

        PoliticasProducto politicas5 = new PoliticasProducto("Normas", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Seguridad", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Cancelacion", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!");

        PoliticasProducto politicas6 = new PoliticasProducto("Normas", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Seguridad", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Cancelacion", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!");

        PoliticasProducto politicas7 = new PoliticasProducto("Normas", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Seguridad", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", "Cancelacion", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!");

        List<Reserva> reservas=new ArrayList<>();

        Producto producto1 = new Producto("BMW 323i", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", ciudadGuardada1, categoria1, imagenes1, caracteristicas1, politicas1, reservas);
        Producto producto2 = new Producto("Chevrolet Cruze RS", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", ciudadGuardada2, categoria3, imagenes2, caracteristicas2, politicas2, reservas);
        Producto producto3 = new Producto("Haval H2", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", ciudadGuardada3, categoria2, imagenes3, caracteristicas3, politicas3, reservas);
        Producto producto4 = new Producto("Mazda CX 5", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", ciudadGuardada4, categoria2, imagenes4, caracteristicas4, politicas4, reservas);
        Producto producto5 = new Producto("Volkswagen Golf GTI", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", ciudadGuardada5, categoria3, imagenes5, caracteristicas5, politicas5, reservas);
        Producto producto6 = new Producto("Toyota C-HR", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", ciudadGuardada6, categoria3, imagenes6, caracteristicas6, politicas6, reservas);
        Producto producto7 = new Producto("Ford Mustang Mach I", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", ciudadGuardada7, categoria4, imagenes7, caracteristicas7, politicas7, reservas);

        productoService.guardar(producto1);
        productoService.guardar(producto2);
        productoService.guardar(producto3);
        productoService.guardar(producto4);
        productoService.guardar(producto5);
        productoService.guardar(producto6);
        productoService.guardar(producto7);

        /*Categoria categoria1 = new Categoria("Sedan", "Vehiculo de cuatro puertas y baúl. Ideal para cuatro personas y dos valijas grandes.", "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
        Categoria categoria2 = new Categoria("Sport Utility Vehicle", "Los SUVs  son  para uso en caminos mantenidos, ya sean pavimentados, de grava o de tierra. Amplios y con baul integrado, ideales para aventureros!", "https://imageio.forbes.com/specials-images/imageserve/5d389da195e0230008f6724a/2020-Ford-Explorer/0x0.jpg?format=jpg&crop=4560,2565,x430,y658,safe&width=960");
        Categoria categoriaGuardada1 = categoriaService.guardar(categoria1);
        Categoria categoriaGuardada2 = categoriaService.guardar(categoria2);
        Ciudad ciudad1 = new Ciudad("Catamarca", -28.429150582935314, -65.78580975432385);
        Ciudad ciudad2 = new Ciudad("Cordoba",-30.776425257706205, -64.1885096801536);
        Ciudad ciudadGuardada1 = ciudadService.guardar(ciudad1);
        Ciudad ciudadGuardada2 = ciudadService.guardar(ciudad2);
        List<Imagen> imagenes=new ArrayList<>();
        List<Caracteristica> caracteristicas = new ArrayList<>();
        List<Reserva> reservas=new ArrayList<>();
        PoliticasProducto politicas1 = new PoliticasProducto("normas", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas2 = new PoliticasProducto("normas1", "portarse bien1", "seguridad1", "tener cuidado1", "cancelacion1", "te va a devolver el dinero su p*ta madre1");
        Producto producto1 = new Producto("bmw", "auto genial", ciudadGuardada1, categoriaGuardada1, imagenes, caracteristicas, politicas1, reservas);
        Producto producto2 = new Producto("audi", "auto super genial", ciudadGuardada2, categoriaGuardada2, imagenes, caracteristicas, politicas2, reservas);
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
        usuario.setReservas(reservas);
        Usuario usuario1 = usuarioRepository.save(usuario);*/

    }
}
