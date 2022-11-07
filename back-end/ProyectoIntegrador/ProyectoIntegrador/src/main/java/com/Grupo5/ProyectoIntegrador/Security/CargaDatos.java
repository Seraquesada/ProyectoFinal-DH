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
    @Autowired
    ImagenService imagenService;
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

        List<Imagen> imagenes2=new ArrayList<>();
        Imagen imagen2a =  new Imagen("Exterior - delantero", "https://www.chevrolet.com.ar/bypass/gmccontenthub/chevrolet/gm-ar/colorizer_cruze_rs/images/colorizer-1.png");
        Imagen imagen2b =  new Imagen("Exterior - trasero", "https://www.chevrolet.com.ar/bypass/gmccontenthub/chevrolet/gm-ar/colorizer_cruze_rs/images/lateral-cruze-chili-red.png");
        Imagen imagen2c =  new Imagen("Interior - volante", "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/nuevo-cruze-rs/gallery/interna-cruze-rs-direcao.jpg?imwidth=1200");
        Imagen imagen2d =  new Imagen("Interior - vertical", "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/nuevo-cruze-rs/gallery/inter-cruze-rs-teto-solar.jpg?imwidth=1200");
        Imagen imagen2e =  new Imagen("Interior - trasero", "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/nuevo-cruze-rs/gallery/interna-cruze-rs-banco-trasero.jpg?imwidth=1200");
        imagenes2.add(imagen2a);
        imagenes2.add(imagen2b);
        imagenes2.add(imagen2c);
        imagenes2.add(imagen2d);
        imagenes2.add(imagen2e);


        List<Imagen> imagenes3=new ArrayList<>();
        Imagen imagen3a =  new Imagen("Exterior - delantero", "https://img.autotrader.co.za/5253834");
        Imagen imagen3b =  new Imagen("Exterior - delantero", "http://avatars.mds.yandex.net/get-verba/1030388/2a000001609d0944b2c4c3f718f5eb48773d/cattouch");
        Imagen imagen3c =  new Imagen("Interior - volante", "https://autotest.com.ar/wp-content/uploads/2019/12/haval-h2-interior.jpg");
        Imagen imagen3d =  new Imagen("Interior - lateral", "https://images.wapcar.my/file1/a885b51185724f48aabd9a791958b8e5_1072x604.jpg");
        Imagen imagen3e =  new Imagen("Interior - trasero", "https://images.wapcar.my/file1/a3adfb17e8864dfda977e92485e61b79_1072x604.jpg");
        imagenes3.add(imagen3a);
        imagenes3.add(imagen3b);
        imagenes3.add(imagen3c);
        imagenes3.add(imagen3d);
        imagenes3.add(imagen3e);

        List<Imagen> imagenes4=new ArrayList<>();
        Imagen imagen4a =  new Imagen("Exterior - lateral - izq", "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/10/mazda-cx-5-2022-2836135.jpg");
        Imagen imagen4b =  new Imagen("Exterior - lateral - der", "https://s1.eestatic.com/2022/04/27/motor/668194096_223891148_1024x576.jpg");
        Imagen imagen4c =  new Imagen("Interior - volante", "https://di-uploads-pod18.dealerinspire.com/woodhousemazdaofomaha/uploads/2021/01/2021-CX-5-interior-1.jpg");
        Imagen imagen4d =  new Imagen("Interior - lateral", "https://di-uploads-pod23.dealerinspire.com/faulknermazdaharrisburg/uploads/2021/03/2021-Mazda-CX-5-Cabin-Space.jpg");
        Imagen imagen4e =  new Imagen("Interior - lateral", "https://www.carbodydesign.com/media/2012/02/Mazda-CX-5-Interior-05.jpg");
        imagenes4.add(imagen4a);
        imagenes4.add(imagen4b);
        imagenes4.add(imagen4c);
        imagenes4.add(imagen4d);
        imagenes4.add(imagen4e);

        List<Imagen> imagenes5=new ArrayList<>();
        Imagen imagen5a =  new Imagen("Exterior - lateral - izq", "https://autotest.com.ar/wp-content/uploads/2020/10/VOLKSWAGEN-GOLF-GTI-CLUBSPORT.jpg");
        Imagen imagen5b =  new Imagen("Exterior - lateral - der", "https://thumbor.pijper.io/SFE-0oATFE3lniuHkxVNpWgjhC8=/1290x726/center/middle/https://cdn.pijper.io/2020/10/QFQz9mtVhWSCsl1602661129.jpeg");
        Imagen imagen5c =  new Imagen("Interior - volante", "https://editorial.pxcrush.net/carsales/general/editorial/new-golf-gti-6.jpg?width=1024&height=683");
        Imagen imagen5d =  new Imagen("Interior - volante2", "https://www.megautos.com/wp-content/uploads/2020/10/Volkswagen-Golf-GTI-8-Clubsport-interior.jpg");
        Imagen imagen5e =  new Imagen("Interior - trasero", "https://cdn.carbuzz.com/gallery-images/2022-volkswagen-golf-gti-back-seats-carbuzz-872440-1600.jpg");
        imagenes5.add(imagen5a);
        imagenes5.add(imagen5b);
        imagenes5.add(imagen5c);
        imagenes5.add(imagen5d);
        imagenes5.add(imagen5e);

        List<Imagen> imagenes6=new ArrayList<>();
        Imagen imagen6a =  new Imagen("Exterior - frente - der", "https://autotest.com.ar/wp-content/uploads/2020/11/TOYOTA-C-HR-SPORT-2.jpg");
        Imagen imagen6b =  new Imagen("Exterior - trasero - izq", "https://autotest.com.ar/wp-content/uploads/2020/11/TOYOTA-CH-R-SPORT-4.jpg");
        Imagen imagen6c =  new Imagen("Interior - volante", "https://ottoyota.sfo2.digitaloceanspaces.com/2022/C-HR/CHR_MY19_0025_V005.webp");
        Imagen imagen6d =  new Imagen("Interior - volante2", "https://www.megautos.com/wp-content/uploads/2019/10/Toyota-C-HR-GR-Sport-interior-1.jpg");
        Imagen imagen6e =  new Imagen("Interior - trasero", "https://m.atcdn.co.uk/vms/media/e62eb82b80cd4facb54b580e8a89f5bd.jpg");
        imagenes6.add(imagen6a);
        imagenes6.add(imagen6b);
        imagenes6.add(imagen6c);
        imagenes6.add(imagen6d);
        imagenes6.add(imagen6e);

        List<Imagen> imagenes7=new ArrayList<>();
        Imagen imagen7a =  new Imagen("Exterior - frontal", "https://es.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2022/collections/equipment/3-2/21_FRD_MST_wdmp_200510_01649a_32.jpg");
        Imagen imagen7b =  new Imagen("Exterior - trasero", "https://i.auto-bild.de/ir_img/2/5/8/5/3/7/9/Mit-487-PS-Ford-bringt-den-Mustang-Mach-1-zurueck-560x373-f00996d7594c6ecd.jpg?impolicy=leadteaser");
        Imagen imagen7c =  new Imagen("Exterior - lateral", "https://cdn.motor1.com/images/mgl/wOKNR/s3/2021-ford-mustang-mach-1.webp");
        Imagen imagen7d =  new Imagen("Interior - volante", "https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-17-1636734565.jpg");
        Imagen imagen7e =  new Imagen("Interior - trasero", "https://mediacloud.carbuyer.co.uk/image/private/s--WJEDFPJj--/v1635407853/autoexpress/2021/10/Ford%20Mustang%20Mach%201%20UK%202021-6.jpg");
        imagenes7.add(imagen7a);
        imagenes7.add(imagen7b);
        imagenes7.add(imagen7c);
        imagenes7.add(imagen7d);
        imagenes7.add(imagen7e);


        List<Caracteristica> caracteristicas1 = new ArrayList<>();
        List<Caracteristica> caracteristicas2 = new ArrayList<>();
        List<Caracteristica> caracteristicas3 = new ArrayList<>();
        List<Caracteristica> caracteristicas4 = new ArrayList<>();
        List<Caracteristica> caracteristicas5 = new ArrayList<>();
        List<Caracteristica> caracteristicas6 = new ArrayList<>();
        List<Caracteristica> caracteristicas7 = new ArrayList<>();

        PoliticasProducto politicas1 = new PoliticasProducto("normas1", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas2 = new PoliticasProducto("normas2", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas3 = new PoliticasProducto("normas3", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas4 = new PoliticasProducto("normas4", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas5 = new PoliticasProducto("normas5", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas6 = new PoliticasProducto("normas6", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");
        PoliticasProducto politicas7 = new PoliticasProducto("normas7", "portarse bien", "seguridad", "tener cuidado", "cancelacion", "te va a devolver el dinero su p*ta madre");

        Producto producto1 = new Producto("BMW 323i", "auto genial", ciudadGuardada1, categoria1, imagenes1, caracteristicas1, politicas1);
        Producto producto2 = new Producto("Chevrolet Cruze RS", "auto super genial", ciudadGuardada2, categoria3, imagenes2, caracteristicas2, politicas2);
        Producto producto3 = new Producto("Haval H2", "auto super genial", ciudadGuardada3, categoria2, imagenes3, caracteristicas3, politicas3);
        Producto producto4 = new Producto("Mazda CX 5", "auto super genial", ciudadGuardada4, categoria2, imagenes4, caracteristicas4, politicas4);
        Producto producto5 = new Producto("Volkswagen Golf GTI", "auto super genial", ciudadGuardada5, categoria3, imagenes5, caracteristicas5, politicas5);
        Producto producto6 = new Producto("Toyota C-HR", "auto super genial", ciudadGuardada6, categoria3, imagenes6, caracteristicas6, politicas6);
        Producto producto7 = new Producto("Ford Mustang Mach I", "auto super genial", ciudadGuardada7, categoria4, imagenes7, caracteristicas7, politicas7);

        productoService.guardar(producto1);
        productoService.guardar(producto2);
        productoService.guardar(producto3);
        productoService.guardar(producto4);
        productoService.guardar(producto5);
        productoService.guardar(producto6);
        productoService.guardar(producto7);

    }
}
