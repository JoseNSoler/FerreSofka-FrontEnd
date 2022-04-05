package co.com.sofka.ferreteria.models;


import io.swagger.annotations.ApiModelProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Usuarios")
public class Usuario {
    @Id
    @ApiModelProperty(notes = "ID Usuario"
            , example = "_USUARIO#123456", required = true)
    private String id;

    @ApiModelProperty(notes = "Identificacion publica del usuario // Tarjeta profesional para proveedores o Numero Documento identidad para empleados y clientes"
            , example = "_USUARIO#123456", required = true)
    private String identificacion;

    // Tipos de usuario: Empleado, Cliente, Proveedor
    @ApiModelProperty(notes = "Tipo de usuario ** SOLO SE PERMITEN: ADMIN, EMPLEADO, CLIENTE, PROVEEDOR"
            , example = "EMPLEADO", required = true)
    private String tipo;

    @ApiModelProperty(notes = "Nombre del usuario"
            , example = "John Doe", required = true)
    private String nombre;

    //Manejo casos numeros internacionales +57
    @ApiModelProperty(notes = "Telefono de contacto"
            , example = "+57 213 245672", required = true)
    private String numeroContacto;

    @ApiModelProperty(notes = "Descripcion del usuario"
            , example = "Empleado sucursal ubicada en la direccion Av.", required = true)
    private String descripcionUsuario;




    public Usuario() {
    }

    public Usuario(String id, String identificacion, String tipo, String nombre, String numeroContacto, String descripcionUsuario) {
        this.id = id;
        this.identificacion = identificacion;
        this.tipo = tipo;
        this.nombre = nombre;
        this.numeroContacto = numeroContacto;
        this.descripcionUsuario = descripcionUsuario;
    }

    public static Usuario of(Usuario usuario){
        return new Usuario(
                usuario.getId(), usuario.getIdentificacion(), usuario.getTipo(), usuario.getNombre(), usuario.getNumeroContacto(),
                usuario.getDescripcionUsuario()
        );
    }


    // ------------------------------------ GETTERS ----------------------------------------
    public String getId() {
        return id;
    }

    public String getIdentificacion() {
        return identificacion;
    }

    public String getTipo() {
        return tipo;
    }

    public String getNombre() {
        return nombre;
    }

    public String getNumeroContacto() {
        return numeroContacto;
    }

    public String getDescripcionUsuario() {
        return descripcionUsuario;
    }

    // ------------------------------------ SETTERS ----------------------------------------


    public void setId(String id) {
        this.id = id;
    }

    public void setIdentificacion(String identificacion) {
        this.identificacion = identificacion;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setNumeroContacto(String numeroContacto) {
        this.numeroContacto = numeroContacto;
    }

    public void setDescripcionUsuario(String descripcionUsuario) {
        this.descripcionUsuario = descripcionUsuario;
    }
}
