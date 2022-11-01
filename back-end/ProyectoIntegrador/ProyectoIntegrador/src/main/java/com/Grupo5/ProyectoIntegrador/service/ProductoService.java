package com.Grupo5.ProyectoIntegrador.service;

import com.Grupo5.ProyectoIntegrador.Exceptions.ResourceNotFoundException;
import com.Grupo5.ProyectoIntegrador.entity.Producto;
import com.Grupo5.ProyectoIntegrador.repository.ProductoRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    private final ProductoRepository productoRepository;
    private static final Logger logger = Logger.getLogger(ProductoService.class);
    @Autowired
    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }
    public Producto guardar(Producto producto) {
        return productoRepository.save(producto);
    }

    public List<Producto> buscarTodos() {
        return productoRepository.findAll();
    }
    public List<Producto> buscarProductosRandom() {
        return productoRepository.buscarProductosRandom();
    }

    public List<Producto> buscarPorCategoriaYCiudad(Long categoria,Long ciudad){
        return productoRepository.findByCategoriaAndCiudad(categoria, ciudad);
    }

    public List<Producto> buscarPorCategoriaOCiudad(Long categoria,Long ciudad){
        return productoRepository.findByCategoriaOrCiudad(categoria, ciudad);
    }

    public Producto buscar(Long id) throws ResourceNotFoundException {
        Optional<Producto> producto = productoRepository.findById(id);
        if (!producto.isPresent()){
            logger.error("No se pudo encontrar el producto");
            throw new ResourceNotFoundException("No pudo encontrarse el producto indicado");
        }
        return producto.get();
    }

    public Producto actualizar(Producto producto) {
        return productoRepository.save(producto);
    }

    public void eliminar(Long id) throws ResourceNotFoundException {
        Producto productoAEliminar = buscar(id);
        if (productoAEliminar != null) {
            productoRepository.deleteById(id);
        } else {
            logger.error("No se pudo borrar el producto");
            throw new ResourceNotFoundException("No existe el id del producto ingresado - id=" + id);
        }
    }
}
