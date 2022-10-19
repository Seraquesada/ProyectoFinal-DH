package com.Grupo5.ProyectoIntegrador.Security;


import com.Grupo5.ProyectoIntegrador.entity.RolUsuario;
import com.Grupo5.ProyectoIntegrador.entity.Usuario;
import com.Grupo5.ProyectoIntegrador.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class CargaDatos implements ApplicationRunner {
    @Autowired
    UsuarioRepository usuarioRepository;
    @Override
    public void run(ApplicationArguments args) throws Exception {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = "digital";
        String passHash = passwordEncoder.encode(password);
        Usuario usuario = new Usuario();
        usuario.setNombre("Nicolas");
        usuario.setMail("nico.monterosabeli@gmail.com");
        usuario.setUserName("nico.monterosabeli@gmail.com");
        usuario.setPassword(passHash);
        usuario.setUsuarioRol(RolUsuario.ROLE_ADMIN);
        usuarioRepository.save(usuario);
    }
}
