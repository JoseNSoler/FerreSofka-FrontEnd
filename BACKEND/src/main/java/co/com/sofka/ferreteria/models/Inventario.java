package co.com.sofka.ferreteria.models;

import io.swagger.annotations.ApiModelProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "inventario")
public class Inventario {
    @Id
    @ApiModelProperty(notes = "Inventario ID", example = "_INVENTARIO#001", required = true)
    private String id;

    @ApiModelProperty(notes = "ProductosInventario dentro del inventario **REFERIRSE A DOCUMENTACION DONDE SE CREA ESTE OBJETO",
            example = "{[ProductosInventario#1, ProductosInventario#2, ProductosInventario#3]}"
            , required = false)
    private List<ProductosInventario> productosInventario;


    public Inventario() {

    }




    public List<ProductosInventario> getProductosInventario() {
        return productosInventario;
    }

    public void setProductosInventario(List<ProductosInventario> productosInventario) {
        this.productosInventario = productosInventario;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
