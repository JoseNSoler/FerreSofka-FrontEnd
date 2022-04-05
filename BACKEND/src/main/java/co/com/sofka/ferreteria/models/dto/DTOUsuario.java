package co.com.sofka.ferreteria.models.dto;

public class DTOUsuario {

    private String id;
    private String identificacion;
    // Tipos de usuario: Empleado, Cliente, Proveedor
    private String tipo;
    private String nombre;

    //Manejo casos numeros internacionales +57
    private String numeroContacto;



    public DTOUsuario() {
    }

    public DTOUsuario(String id, String identificacion, String tipo, String nombre, String numeroContacto) {
        this.id = id;
        this.identificacion = identificacion;
        this.tipo = tipo;
        this.nombre = nombre;
        this.numeroContacto = numeroContacto;
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
}
