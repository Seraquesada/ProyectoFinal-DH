package com.Grupo5.ProyectoIntegrador.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String titulo;
    @Column
    private String descripcion;
    @ManyToOne
    @JoinColumn(name = "ciudad_id", nullable = false)
    private Ciudad ciudad;
    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "imagen_id")
    private Set<Imagen> imagenes;
    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "caracteristicas_auto",
            joinColumns = @JoinColumn(name = "id_producto"),
            inverseJoinColumns = @JoinColumn(name = "id_caracteristica")
    )
    private Set<Caracteristica> caracteristicas;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "politicasProducto_id" , referencedColumnName ="id")
    private PoliticasProducto politicasProducto;

    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    private Set<Reserva> reservas;

    public Producto(Long id, String titulo, String descripcion, Ciudad ciudad, Categoria categoria, Set<Imagen> imagenes, Set<Caracteristica> caracteristicas, PoliticasProducto politicasProducto, Set<Reserva> reservas) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
        this.politicasProducto = politicasProducto;
        this.reservas = reservas;
    }

    public Producto(String titulo, String descripcion, Ciudad ciudad, Categoria categoria, Set<Imagen> imagenes, Set<Caracteristica> caracteristicas, PoliticasProducto politicasProducto, Set<Reserva> reservas) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
        this.politicasProducto = politicasProducto;
        this.reservas = reservas;
    }

    public Producto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Ciudad getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Set<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(Set<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

    public Set<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(Set<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public PoliticasProducto getPoliticasProducto() {
        return politicasProducto;
    }

    public void setPoliticasProducto(PoliticasProducto politicasProducto) {
        this.politicasProducto = politicasProducto;
    }

    public Set<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(Set<Reserva> reservas) {
        this.reservas = reservas;
    }
}
