package com.Grupo5.ProyectoIntegrador.repository;

import com.Grupo5.ProyectoIntegrador.entity.Imagen;
import com.Grupo5.ProyectoIntegrador.entity.PoliticasProducto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PoliticasProductoRepository extends JpaRepository<PoliticasProducto, Long> {
}
