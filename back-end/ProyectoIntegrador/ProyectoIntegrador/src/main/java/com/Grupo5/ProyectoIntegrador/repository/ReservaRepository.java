package com.Grupo5.ProyectoIntegrador.repository;

import com.Grupo5.ProyectoIntegrador.entity.PoliticasProducto;
import com.Grupo5.ProyectoIntegrador.entity.Producto;
import com.Grupo5.ProyectoIntegrador.entity.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    @Query(value = "SELECT r FROM Reserva r WHERE (r.fechaInicio > :fechaInicio AND r.fechaInicio < :fechaFinal) OR (r.fechaFinalizacion > :fechaInicio AND r.fechaFinalizacion < :fechaFinal) OR (r.fechaInicio < :fechaInicio AND r.fechaFinalizacion > :fechaFinal)")
    List<Reserva> buscarReservasInvalidas(@Param("fechaInicio") LocalDate fechaInicio, @Param("fechaFinal")LocalDate fechaFinal);

    @Query(value = "SELECT r FROM Reserva r INNER JOIN r.producto p WHERE p.id = :idProducto")
    List<Reserva> buscarPorIdProducto(@Param("idProducto") Long idProducto);
}
