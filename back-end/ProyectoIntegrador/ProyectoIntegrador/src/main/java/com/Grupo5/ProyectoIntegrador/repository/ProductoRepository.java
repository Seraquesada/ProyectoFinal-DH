package com.Grupo5.ProyectoIntegrador.repository;

import com.Grupo5.ProyectoIntegrador.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByCategoriaAndCiudad(String categoria, String ciudad);
    List<Producto> findByCategoriaOrCiudad(String categoria, String ciudad);
    @Query(value = "SELECT * FROM Productos ORDER BY NEWID()", nativeQuery = true)
    List<Producto> buscarProductosRandom();
}
