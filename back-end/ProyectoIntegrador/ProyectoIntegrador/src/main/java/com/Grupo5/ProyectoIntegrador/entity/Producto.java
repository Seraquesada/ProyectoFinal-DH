package com.Grupo5.ProyectoIntegrador.entity;

import javax.persistence.*;
import java.util.List;

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
    private List<Imagen> imagenes;
    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "caracteristicas_auto",
            joinColumns = @JoinColumn(name = "id_producto"),
            inverseJoinColumns = @JoinColumn(name = "id_caracteristica")
    )
    private List<Caracteristica> caracteristicas;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "politicasProducto_id" , referencedColumnName ="id")
    private PoliticasProducto politicasProducto;

    public Producto(Long id, String titulo, String descripcion, Ciudad ciudad, Categoria categoria, List<Imagen> imagenes, List<Caracteristica> caracteristicas, PoliticasProducto politicasProducto) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
        this.politicasProducto = politicasProducto;
    }

    public Producto(String titulo, String descripcion, Ciudad ciudad, Categoria categoria, List<Imagen> imagenes, List<Caracteristica> caracteristicas, PoliticasProducto politicasProducto) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
        this.politicasProducto = politicasProducto;
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

    public List<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(List<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

    public List<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(List<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public PoliticasProducto getPoliticasProducto() {
        return politicasProducto;
    }

    public void setPoliticasProducto(PoliticasProducto politicasProducto) {
        this.politicasProducto = politicasProducto;
    }
}
