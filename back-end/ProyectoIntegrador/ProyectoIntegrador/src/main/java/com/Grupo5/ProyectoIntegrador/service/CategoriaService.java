package com.Grupo5.ProyectoIntegrador.service;

import com.Grupo5.ProyectoIntegrador.Exceptions.AlreadyExistException;
import com.Grupo5.ProyectoIntegrador.Exceptions.ResourceNotFoundException;
import com.Grupo5.ProyectoIntegrador.controller.CategoriaController;
import com.Grupo5.ProyectoIntegrador.entity.Categoria;
import com.Grupo5.ProyectoIntegrador.repository.CategoriaRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {
    private final CategoriaRepository categoriaRepository;
    private static final Logger logger = Logger.getLogger(CategoriaService.class);
    @Autowired
    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    public Categoria guardar(Categoria categoria) throws AlreadyExistException {
        List<Categoria> categorias=buscarTodos();
        for (Categoria cat:categorias) {
            if (cat.getTitulo() == categoria.getTitulo()){
                logger.error("La categoria ya existe");
                throw new AlreadyExistException("La categoria ya existe en la base de datos");
            }
        }
        return categoriaRepository.save(categoria);
    }
    public List<Categoria> buscarTodos() {
        return categoriaRepository.findAll();
    }

    public Categoria buscar(Long id) throws ResourceNotFoundException {
        Optional<Categoria> categoria = categoriaRepository.findById(id);
        if (!categoria.isPresent()){
            logger.error("No se pudo encontrar la categoria");
            throw new ResourceNotFoundException("No pudo encontrarse la categoria indicada");
        }
        return categoria.get();
    }

    public Categoria actualizar(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    public void eliminar(Long id) throws ResourceNotFoundException {
        Categoria categoriaAEliminar = buscar(id);
        if (categoriaAEliminar != null) {
            categoriaRepository.deleteById(id);
        } else {
            logger.error("No se pudo borrar la categoria");
            throw new ResourceNotFoundException("No existe el id de la categoria ingresada - id=" + id);
        }
    }
}
