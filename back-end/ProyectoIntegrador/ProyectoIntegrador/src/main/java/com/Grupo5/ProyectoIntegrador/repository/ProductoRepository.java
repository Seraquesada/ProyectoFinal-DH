package com.Grupo5.ProyectoIntegrador.repository;

import com.Grupo5.ProyectoIntegrador.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByCategoria_idAndCiudad_id(Long categoria, Long ciudad);
    List<Producto> findByCategoria_idOrCiudad_id(Long categoria, Long ciudad);
    @Query(value = "SELECT * FROM productos ORDER BY rand()", nativeQuery = true)
    List<Producto> buscarProductosRandom();

    @Query(value = "SELECT DISTINCT p FROM Producto p JOIN FETCH p.ciudad JOIN FETCH p.categoria JOIN FETCH p.imagenes JOIN FETCH p.politicasProducto JOIN FETCH p.caracteristicas")
    List<Producto> buscarProductos();
}
