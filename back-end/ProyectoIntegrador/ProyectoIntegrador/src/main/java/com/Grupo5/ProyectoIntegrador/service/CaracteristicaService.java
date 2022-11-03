package com.Grupo5.ProyectoIntegrador.service;

import com.Grupo5.ProyectoIntegrador.Exceptions.AlreadyExistException;
import com.Grupo5.ProyectoIntegrador.Exceptions.ResourceNotFoundException;
import com.Grupo5.ProyectoIntegrador.entity.Caracteristica;
import com.Grupo5.ProyectoIntegrador.repository.CaracteristicaRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CaracteristicaService {
    private final CaracteristicaRepository caracteristicaRepository;
    private static final Logger logger = Logger.getLogger(CaracteristicaService.class);
    @Autowired
    public CaracteristicaService(CaracteristicaRepository caracteristicaRepository) {
        this.caracteristicaRepository = caracteristicaRepository;
    }
    public Caracteristica guardar(Caracteristica caracteristica) throws AlreadyExistException {
        return caracteristicaRepository.save(caracteristica);
    }
    public List<Caracteristica> buscarTodos() {
        return caracteristicaRepository.findAll();
    }

    public Caracteristica buscar(Long id) throws ResourceNotFoundException {
        Optional<Caracteristica> caracteristica = caracteristicaRepository.findById(id);
        if (!caracteristica.isPresent()){
            logger.error("No se pudo encontrar la caracteristica");
            throw new ResourceNotFoundException("No pudo encontrarse la caracteristica indicada");
        }
        return caracteristica.get();
    }

    public Caracteristica actualizar(Caracteristica caracteristica) {
        return caracteristicaRepository.save(caracteristica);
    }

    public void eliminar(Long id) throws ResourceNotFoundException {
        Caracteristica caracteristicaAEliminar = buscar(id);
        if (caracteristicaAEliminar != null) {
            caracteristicaRepository.deleteById(id);
        } else {
            logger.error("No se pudo borrar la caracteristica");
            throw new ResourceNotFoundException("No existe el id de la caracteristica ingresada - id=" + id);
        }
    }
}
