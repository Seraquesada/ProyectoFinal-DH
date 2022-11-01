package com.Grupo5.ProyectoIntegrador.repository;

import com.Grupo5.ProyectoIntegrador.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByCategoriaAndCiudad(Long categoria, Long ciudad);
    List<Producto> findByCategoriaOrCiudad(Long categoria, Long ciudad);
    @Query(value = "SELECT * FROM Productos ORDER BY rand()", nativeQuery = true)
    List<Producto> buscarProductosRandom();
}
