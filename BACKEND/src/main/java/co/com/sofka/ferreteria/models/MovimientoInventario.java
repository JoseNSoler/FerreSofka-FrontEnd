package co.com.sofka.ferreteria.models;

import io.swagger.annotations.ApiModelProperty;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


@Document(collection = "movimientosInventario")
public class MovimientoInventario {
    @Id
    @ApiModelProperty(notes = "ID personalizado para movimientos internos de la empresa **FACTURA#123234 -- ENTRADA#321547"
            , example = "FACTURA#123234", required = true)
    private String id;


    @ApiModelProperty(notes = "Fecha de registro del movimiento mencionado"
            , example = "2022-04-04 02:49:25", required = false)
    private String fechaCreacion = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());

    @ApiModelProperty(notes = "Lista de productos involucrados en el movimiento **PARA ENTRADAS, EL PRODUCTO DEBE ESTAR EN LA BASE DE DATOS"
            , example = "[PRODUCTO#1, PRODUCTO#2, PRODUCTO#3]", required = true)
    private List<Producto> productos;

    // Dos tipos de movimiento: FACTURA - resta productos de inventario -- ENTRADA: entrada inventario por parte de un proveedor
    @ApiModelProperty(notes = "Tipo de movimiento efectuado en el inventario **FACTURA -o- ENTRADA"
            , example = "FACTURA", required = true)
    private String tipo;

    // Nombre del proveedor para entradas, o nombre del cliente para facturas
    @ApiModelProperty(notes = "Beneficioario del movimiento - nombre del cliente para facturas - nombre proveedor para entradas"
            , example = "John Doe Comprador", required = true)
    private String nombreBeneficiario;

    @ApiModelProperty(notes = "Identificacion del beneficiario"
            , example = "NIT2325456+64", required = true)
    private String identificacion;

    // Total a pagar a los proveedores o total a pagar por parte del cliente
    @ApiModelProperty(notes = "Identificacion del beneficiario"
            , example = "25456+64", required = false)
    private Integer total;

    public MovimientoInventario() {

    }

    public MovimientoInventario(String id, String fechaCreacion, List<Producto> productos, String tipo, String nombreBeneficiario, String identificacion, Integer total) {
        this.id = id;
        this.fechaCreacion = fechaCreacion;
        this.productos = productos;
        this.tipo = tipo;
        this.nombreBeneficiario = nombreBeneficiario;
        this.identificacion = identificacion;
        this.total = total;
    }



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(String fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getNombreBeneficiario() {
        return nombreBeneficiario;
    }

    public void setNombreBeneficiario(String nombreBeneficiario) {
        this.nombreBeneficiario = nombreBeneficiario;
    }

    public String getIdentificacion() {
        return identificacion;
    }

    public void setIdentificacion(String identificacion) {
        this.identificacion = identificacion;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }


    @Override
    public String toString() {
        return "\n MovimientoInventario{" +
                "id='" + id + '\'' +
                ", fechaCreacion=" + fechaCreacion +
                ",\n,productos=" + productos +
                ",\ntipo='" + tipo + '\'' +
                ", nombreBeneficiario='" + nombreBeneficiario + '\'' +
                ", identificacion='" + identificacion + '\'' +
                ", total=" + total +
                "\n}";
    }
}
