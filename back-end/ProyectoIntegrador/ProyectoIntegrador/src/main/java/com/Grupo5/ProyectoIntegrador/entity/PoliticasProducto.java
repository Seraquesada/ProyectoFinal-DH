package com.Grupo5.ProyectoIntegrador.entity;

import javax.persistence.*;

@Entity
@Table(name="politicasProducto")
public class PoliticasProducto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String normasTitulo;
    @Column
    private String normasDescripcion;
    @Column
    private String seguridadTitulo;
    @Column
    private String seguridadDescripcion;
    @Column
    private String cancelacionTitulo;
    @Column
    private String cancelacionDescripcion;


    public PoliticasProducto(String normasTitulo, String normasDescripcion, String seguridadTitulo, String seguridadDescripcion, String cancelacionTitulo, String cancelacionDescripcion) {
        this.normasTitulo = normasTitulo;
        this.normasDescripcion = normasDescripcion;
        this.seguridadTitulo = seguridadTitulo;
        this.seguridadDescripcion = seguridadDescripcion;
        this.cancelacionTitulo = cancelacionTitulo;
        this.cancelacionDescripcion = cancelacionDescripcion;
    }

    public PoliticasProducto(Long id, String normasTitulo, String normasDescripcion, String seguridadTitulo, String seguridadDescripcion, String cancelacionTitulo, String cancelacionDescripcion) {
        this.id = id;
        this.normasTitulo = normasTitulo;
        this.normasDescripcion = normasDescripcion;
        this.seguridadTitulo = seguridadTitulo;
        this.seguridadDescripcion = seguridadDescripcion;
        this.cancelacionTitulo = cancelacionTitulo;
        this.cancelacionDescripcion = cancelacionDescripcion;
    }

    public PoliticasProducto() {
    }

    public String getNormasTitulo() {
        return normasTitulo;
    }

    public void setNormasTitulo(String normasTitulo) {
        this.normasTitulo = normasTitulo;
    }

    public String getNormasDescripcion() {
        return normasDescripcion;
    }

    public void setNormasDescripcion(String normasDescripcion) {
        this.normasDescripcion = normasDescripcion;
    }

    public String getSeguridadTitulo() {
        return seguridadTitulo;
    }

    public void setSeguridadTitulo(String seguridadTitulo) {
        this.seguridadTitulo = seguridadTitulo;
    }

    public String getSeguridadDescripcion() {
        return seguridadDescripcion;
    }

    public void setSeguridadDescripcion(String seguridadDescripcion) {
        this.seguridadDescripcion = seguridadDescripcion;
    }

    public String getCancelacionTitulo() {
        return cancelacionTitulo;
    }

    public void setCancelacionTitulo(String cancelacionTitulo) {
        this.cancelacionTitulo = cancelacionTitulo;
    }

    public String getCancelacionDescripcion() {
        return cancelacionDescripcion;
    }

    public void setCancelacionDescripcion(String cancelacionDescripcion) {
        this.cancelacionDescripcion = cancelacionDescripcion;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
