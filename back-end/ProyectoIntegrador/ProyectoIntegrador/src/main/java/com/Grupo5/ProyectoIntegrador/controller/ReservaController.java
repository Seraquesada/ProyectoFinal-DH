package com.Grupo5.ProyectoIntegrador.controller;

import com.Grupo5.ProyectoIntegrador.Exceptions.AlreadyExistException;
import com.Grupo5.ProyectoIntegrador.Exceptions.ResourceNotFoundException;
import com.Grupo5.ProyectoIntegrador.entity.Categoria;
import com.Grupo5.ProyectoIntegrador.entity.Reserva;
import com.Grupo5.ProyectoIntegrador.service.CategoriaService;
import com.Grupo5.ProyectoIntegrador.service.ReservaService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservas")
public class ReservaController {
    private final ReservaService reservaService;
    private static final Logger logger = Logger.getLogger(ReservaController.class);

    @Autowired
    public ReservaController(ReservaService reservaService) {

        this.reservaService = reservaService;
    }
    @PostMapping
    public ResponseEntity<Reserva> registrarReserva (@RequestBody Reserva reserva) throws AlreadyExistException {
        ResponseEntity<Reserva> respuesta;
        respuesta = ResponseEntity.ok(reservaService.guardar(reserva));
        logger.info("Se registro la reserva");
        return respuesta;
    }
    @GetMapping
    public ResponseEntity<List<Reserva>> buscarAllReserva(){
        ResponseEntity<List<Reserva>> respuesta;
        respuesta=ResponseEntity.ok(reservaService.buscarTodos());
        logger.info("Se busco todas las reservas");
        return respuesta;
    }
    @GetMapping("/{id}")
    public ResponseEntity<Reserva> buscarReserva(@PathVariable Long id) throws ResourceNotFoundException {
        ResponseEntity<Reserva> respuesta;
        Reserva reserva = reservaService.buscar(id);
        if (reserva.getId() == null){
            respuesta=ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            logger.error("No se encontro la reserva con el id: " + id);
        }
        else {
            respuesta=ResponseEntity.ok(reserva);
            logger.info("Se encontro la reserva");
        }
        return respuesta;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarReserva(@PathVariable Long id) throws ResourceNotFoundException {
        reservaService.eliminar(id);
        logger.info("Se elimino la reserva");
        return ResponseEntity.ok("Se eliminó la reserva con id="+id);
    }

    @PutMapping
    public ResponseEntity<Reserva> actualizarReserva(@RequestBody Reserva reserva) throws ResourceNotFoundException {
        ResponseEntity<Reserva> respuesta;
        if (reservaService.buscar(reserva.getId()) != null) {
            logger.info("La reserva se actualizo");
            respuesta = ResponseEntity.ok(reservaService.actualizar(reserva));
        }
        else {
            logger.error("La reserva no pudo actualizarse");
            respuesta = ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return respuesta;
    }
}
