package com.Grupo5.ProyectoIntegrador.repository;

import com.Grupo5.ProyectoIntegrador.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findUsuarioByMail (String mail);
}
