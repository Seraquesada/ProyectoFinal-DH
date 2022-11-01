package com.Grupo5.ProyectoIntegrador.service;

import com.Grupo5.ProyectoIntegrador.Exceptions.AlreadyExistException;
import com.Grupo5.ProyectoIntegrador.Exceptions.ResourceNotFoundException;
import com.Grupo5.ProyectoIntegrador.entity.Imagen;
import com.Grupo5.ProyectoIntegrador.repository.ImagenRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImagenService {
    private final ImagenRepository imagenRepository;
    private static final Logger logger = Logger.getLogger(CaracteristicaService.class);
    @Autowired
    public ImagenService(ImagenRepository imagenRepository) {
        this.imagenRepository = imagenRepository;
    }
    public Imagen guardar(Imagen imagen) throws AlreadyExistException {
        List<Imagen> imagenes=buscarTodos();
        for (Imagen img:imagenes) {
            if (img.getUrl() == imagen.getUrl()){
                logger.error("La Imagen ya existe");
                throw new AlreadyExistException("La Imagen ya existe en la base de datos");
            }
        }
        return imagenRepository.save(imagen);
    }
    public List<Imagen> buscarTodos() {
        return imagenRepository.findAll();
    }

    public Imagen buscar(Long id) throws ResourceNotFoundException {
        Optional<Imagen> imagen = imagenRepository.findById(id);
        if (!imagen.isPresent()){
            logger.error("No se pudo encontrar la Imagen");
            throw new ResourceNotFoundException("No pudo encontrarse la Imagen indicada");
        }
        return imagen.get();
    }

    public Imagen actualizar(Imagen imagen) {
        return imagenRepository.save(imagen);
    }

    public void eliminar(Long id) throws ResourceNotFoundException {
        Imagen imagenAEliminar = buscar(id);
        if (imagenAEliminar != null) {
            imagenRepository.deleteById(id);
        } else {
            logger.error("No se pudo borrar la Imagen");
            throw new ResourceNotFoundException("No existe el id de la Imagen ingresada - id=" + id);
        }
    }
}
