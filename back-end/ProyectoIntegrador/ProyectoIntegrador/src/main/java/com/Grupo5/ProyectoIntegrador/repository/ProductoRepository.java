package com.Grupo5.ProyectoIntegrador.repository;

import com.Grupo5.ProyectoIntegrador.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
}
