package com.Grupo5.ProyectoIntegrador.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="ciudades")
public class Ciudad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String nombre;

    @OneToMany(mappedBy ="ciudad", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Producto> productos = new ArrayList<>();

    public Ciudad(Long id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public Ciudad(String nombre) {
        this.nombre = nombre;
    }

    public Ciudad() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }
}
