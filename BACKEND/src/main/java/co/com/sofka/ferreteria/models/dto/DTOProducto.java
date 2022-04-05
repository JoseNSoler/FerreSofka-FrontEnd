package co.com.sofka.ferreteria.models.dto;

public class DTOProducto {
    private String id;
    private String proveedorNombre;
    private String referenciaID;
    private Integer valor;


    public DTOProducto() {
    }

    public DTOProducto(String id, String proveedorNombre, String referenciaID, Integer valor) {
        this.id = id;
        this.proveedorNombre = proveedorNombre;
        this.referenciaID = referenciaID;
        this.valor = valor;
    }

    // ------------------------------------ SETTERS ----------------------------------------
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

    @Override
    public String toString() {
        return "Producto{" +
                "id='" + id + '\'' +
                ", proveedorNombre='" + proveedorNombre + '\'' +
                ", referenciaID='" + referenciaID + '\'' +
                ", valor='" + valor + '\'' +
                '}';
    }
}
