package com.Grupo5.ProyectoIntegrador.repository;

import com.Grupo5.ProyectoIntegrador.entity.PoliticasProducto;
import com.Grupo5.ProyectoIntegrador.entity.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {
}
