package co.com.sofka.ferreteria.models.dto;

import co.com.sofka.ferreteria.models.Producto;

import java.util.List;

public class DTOInventario {
    private String id;
    private List<DTOProducto> productos;


    public DTOInventario() {

    }

    public DTOInventario(String id) {
        this.id = id;
    }

    public DTOInventario(String id ,List<DTOProducto> productos) {
        this.id = id;
        this.productos = productos;
    }



    public List<DTOProducto> getProductos() {
        return productos;
    }

    public void setProductos(List<DTOProducto> productos) {
        this.productos = productos;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
