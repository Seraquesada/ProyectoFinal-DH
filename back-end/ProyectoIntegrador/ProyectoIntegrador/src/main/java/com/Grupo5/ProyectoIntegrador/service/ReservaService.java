package com.Grupo5.ProyectoIntegrador.service;

import com.Grupo5.ProyectoIntegrador.Exceptions.ResourceNotFoundException;
import com.Grupo5.ProyectoIntegrador.entity.Reserva;
import com.Grupo5.ProyectoIntegrador.repository.ReservaRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {
    private final ReservaRepository reservaRepository;
    private static final Logger logger = Logger.getLogger(ProductoService.class);
    @Autowired
    public ReservaService(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    public Reserva guardar(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    public List<Reserva> buscarTodos() {
        return reservaRepository.findAll();
    }
    public List<Reserva> buscarReservasInvalidas(LocalDate fechaInicio, LocalDate fechaFinal) {
        return reservaRepository.buscarReservasInvalidas(fechaInicio, fechaFinal);
    }

    public Reserva buscar(Long id) throws ResourceNotFoundException {
        Optional<Reserva> reserva = reservaRepository.findById(id);
        if (!reserva.isPresent()){
            logger.error("No se pudo encontrar la reserva");
            throw new ResourceNotFoundException("No pudo encontrarse la reserva indicada");
        }
        return reserva.get();
    }

    public Reserva actualizar(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    public void eliminar(Long id) throws ResourceNotFoundException {
        Reserva reservaAEliminar = buscar(id);
        if (reservaAEliminar != null) {
            reservaRepository.deleteById(id);
        } else {
            logger.error("No se pudo borrar la reserva");
            throw new ResourceNotFoundException("No existe el id de la reserva ingresada - id=" + id);
        }
    }
}
