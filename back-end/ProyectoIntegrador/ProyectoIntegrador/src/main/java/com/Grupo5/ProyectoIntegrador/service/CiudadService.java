package com.Grupo5.ProyectoIntegrador.service;

import com.Grupo5.ProyectoIntegrador.Exceptions.AlreadyExistException;
import com.Grupo5.ProyectoIntegrador.Exceptions.ResourceNotFoundException;
import com.Grupo5.ProyectoIntegrador.entity.Ciudad;
import com.Grupo5.ProyectoIntegrador.repository.CiudadRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CiudadService {
    private final CiudadRepository ciudadRepository;
    private static final Logger logger = Logger.getLogger(CiudadService.class);
    @Autowired
    public CiudadService(CiudadRepository ciudadRepository) {
        this.ciudadRepository = ciudadRepository;
    }

    public Ciudad guardar(Ciudad ciudad) throws AlreadyExistException {
        List<Ciudad> ciudades=buscarTodos();
        for (Ciudad ciu:ciudades) {
            if (ciu.getNombre() == ciudad.getNombre()){
                logger.error("La ciudad ya existe");
                throw new AlreadyExistException("La ciudad ya existe en la base de datos");
            }
        }
        return ciudadRepository.save(ciudad);
    }
    public List<Ciudad> buscarTodos() {
        return ciudadRepository.findAll();
    }

    public Ciudad buscar(Long id) throws ResourceNotFoundException {
        Optional<Ciudad> ciudad = ciudadRepository.findById(id);
        if (!ciudad.isPresent()){
            logger.error("No se pudo encontrar la Ciudad");
            throw new ResourceNotFoundException("No pudo encontrarse la Ciudad indicada");
        }
        return ciudad.get();
    }

    public Ciudad actualizar(Ciudad ciudad) {
        return ciudadRepository.save(ciudad);
    }

    public void eliminar(Long id) throws ResourceNotFoundException {
        Ciudad ciudadAEliminar = buscar(id);
        if (ciudadAEliminar != null) {
            ciudadRepository.deleteById(id);
        } else {
            logger.error("No se pudo borrar la Ciudad");
            throw new ResourceNotFoundException("No existe el id de la Ciudad ingresada - id=" + id);
        }
    }
}
