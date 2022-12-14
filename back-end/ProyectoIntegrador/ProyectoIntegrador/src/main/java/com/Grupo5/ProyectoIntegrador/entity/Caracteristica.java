package com.Grupo5.ProyectoIntegrador.entity;

import javax.persistence.*;

@Entity
@Table(name="caracteristicas")
public class Caracteristica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String nombre;
    @Column
    private String valor;
    @Column
    private Integer icono;

    public Caracteristica(Long id, String nombre, String valor, Integer icono) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
        this.icono = icono;
    }

    public Caracteristica(String nombre, String valor, Integer icono) {
        this.nombre = nombre;
        this.valor = valor;
        this.icono = icono;
    }

    public Caracteristica() {
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

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }

    public Integer getIcono() {
        return icono;
    }

    public void setIcono(Integer icono) {
        this.icono = icono;
    }
}
