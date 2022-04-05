package co.com.sofka.ferreteria.models;

import io.swagger.annotations.ApiModelProperty;

import java.util.List;

public class ProductosInventario {
    @ApiModelProperty(notes = "lista de productos por categoria **LA IDEA ES AGRUPAR LA LISTA DE OBJETOS EN BASE A SU REFERENCIA Y CONDICIONES DE ENTRADA O SALIDA"
            , example = "[PRODUCTO#1, PRODUCTO#2, PRODUCTO#3]", required = true)
    private List<Producto> productos;
    @ApiModelProperty(notes = "Nombre referencia de la lista de productos **ABSTENERSE DE GUARDAR OBJETOS CON DISTINTAS REFERENCIAS"
            , example = "Pinturas", required = true)
    private String referenciaNombre;


    @ApiModelProperty(notes = "Minima cantidad Requerido de productos en la lista **SE DEBE GUARDAR UN MINIMO SEGUN SE INDIQUE"
            , example = "2", required = true)
    private Integer minimoRequerido; // Cuando se crea una lista de productos, se debe crear bajo cierta cantidad de productos

    @ApiModelProperty(notes = "Maxima cantidad posible de productos en la lista **ABSTENERSE DE GUARDAR OBJETOS CON DISTINTAS REFERENCIAS"
            , example = "20", required = true)
    private Integer maximoPermitido; // Limita la cantidad maxima de productos permitidos

    @ApiModelProperty(notes = "Valor total de productos en la lista"
            , example = "10225", required = false)
    private Integer valorTotal;


    public ProductosInventario() {
    }

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        if(productos.size() < minimoRequerido || productos.size() > maximoPermitido)
            throw new IllegalArgumentException("Error, lista debe estar entre los tamaños" + minimoRequerido + "=" + maximoPermitido);
        this.productos = productos;
    }

    public String getReferenciaNombre() {
        return referenciaNombre;
    }

    public void setReferenciaNombre(String referenciaNombre) {
        this.referenciaNombre = referenciaNombre;
    }




    public Integer getMinimoRequerido() {
        return minimoRequerido;
    }

    public void setMinimoRequerido(Integer minimoRequerido) {
        this.minimoRequerido = minimoRequerido;
    }

    public Integer getMaximoPermitido() {
        return maximoPermitido;
    }

    public void setMaximoPermitido(Integer maximoPermitido) {
        this.maximoPermitido = maximoPermitido;
    }

    public Integer getValorTotal(){
        if(productos.size()>0) return productos.stream().mapToInt(value -> value.getValor()).sum();
        return 0;
    }

    @Override
    public String toString() {
        return "ProductosInventario{" +
                "productos=" + productos + "\n" +
                ", referenciaNombre='" + referenciaNombre + '\'' +
                ", minimoRequerido=" + minimoRequerido +
                ", maximoPermitido=" + maximoPermitido +
                ", valorTotal=" + valorTotal + "\n" +
                '}';
    }
}
