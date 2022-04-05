package co.com.sofka.ferreteria.models;


import io.swagger.annotations.ApiModelProperty;

import java.util.Objects;

public class Producto {
    @ApiModelProperty(notes = "ID producto Unitario"
            , example = "_PRODUCTO#3121325", required = true)
    private String id;

    @ApiModelProperty(notes = "Referencia del producto"
            , example = "pintura polarizante especializada V2.0", required = true)
    private String referencia;

    @ApiModelProperty(notes = "referencia Principal del producto **ENTIENDASE POR LA CATEGORIA O BASE PRINCIPAL DEL PRODUCTO"
            , example = "pinturas", required = true)
    private String referenciaPrincipal;

    @ApiModelProperty(notes = "Nombre del proveedor a quien se realizo este producto en especifico **PUEDE VARIAR EN BASE A LA DB"
            , example = "Pintuco", required = true)
    private String proveedorNombre;

    @ApiModelProperty(notes = "Referencia unica del producto - Numero representado en codigo de barras como identificador de la empresa proveedora"
            , example = "#PintucoPared13254", required = true)
    private String referenciaID;

    @ApiModelProperty(notes = "Valor unitario del producto"
            , example = "1254678", required = true)
    private Integer valor;


    public Producto() {
    }


    // ------------------------------------ GETTERS ----------------------------------------
    public String getId() {
        return id;
    }

    public String getProveedorNombre() {
        return proveedorNombre;
    }

    public String getReferenciaID() {
        return referenciaID;
    }

    public Integer getValor() {
        return valor;
    }

    public String getReferencia() {
        return referencia;
    }

    public String getReferenciaPrincipal() {
        return referenciaPrincipal;
    }

    // ------------------------------------ SETTERS ----------------------------------------
    public void setId(String id) {
        this.id = id;
    }

    public void setProveedorNombre(String proveedorNombre) {
        this.proveedorNombre = proveedorNombre;
    }

    public void setReferenciaID(String referenciaID) {
        this.referenciaID = referenciaID;
    }

    public void setValor(Integer valor) {
        this.valor = valor;
    }

    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }

    public void setReferenciaPrincipal(String referenciaPrincipal) {
        this.referenciaPrincipal = referenciaPrincipal;
    }

    public static Producto of(Producto newProducto){
        Producto productoOld = new Producto();
        productoOld.setId(newProducto.getId());
        productoOld.setReferencia(newProducto.getReferencia());
        productoOld.setValor(newProducto.getValor());
        productoOld.setProveedorNombre(newProducto.getProveedorNombre());
        productoOld.setReferenciaID(newProducto.getReferenciaID());
        productoOld.setReferenciaPrincipal(newProducto.getReferenciaPrincipal());
        return productoOld;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Producto producto = (Producto) o;
        return Objects.equals(id, producto.id) && Objects.equals(referencia, producto.referencia) && Objects.equals(referenciaPrincipal, producto.referenciaPrincipal) && Objects.equals(proveedorNombre, producto.proveedorNombre) && Objects.equals(referenciaID, producto.referenciaID) && Objects.equals(valor, producto.valor);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, referencia, referenciaPrincipal, proveedorNombre, referenciaID, valor);
    }

    @Override
    public String toString() {
        return "\nProducto{" +
                "id='" + id + '\'' +
                ", referencia='" + referencia + '\'' +
                ", referenciaPrincipal='" + referenciaPrincipal + '\'' +
                ", proveedorNombre='" + proveedorNombre + '\'' +
                ", referenciaID='" + referenciaID + '\'' +
                ", valor=" + valor +
                '}';
    }
}
