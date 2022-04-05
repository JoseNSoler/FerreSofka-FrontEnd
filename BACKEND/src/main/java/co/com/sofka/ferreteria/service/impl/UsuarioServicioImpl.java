package co.com.sofka.ferreteria.service.impl;

import co.com.sofka.ferreteria.models.Usuario;
import co.com.sofka.ferreteria.repository.interfaces.IUsuarioRepositorio;
import co.com.sofka.ferreteria.service.IUsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.security.auth.login.AccountNotFoundException;

@Service
public class UsuarioServicioImpl implements IUsuarioServicio {
    @Autowired
    private IUsuarioRepositorio usuarioRepositorio;

    @Override
    public ResponseEntity guardarUsuario(Usuario usuario) {
        return new ResponseEntity(usuarioRepositorio.save(usuario), HttpStatus.ACCEPTED);
    }

    @Override
    public Flux<Usuario> mostrarUsuarios() {
        return usuarioRepositorio.findAll();
    }


    // ---------------------- MODIFICAR Usuario

    @Override
    public ResponseEntity modificarUsuarioPorID(String id, Usuario usuarioNuevo) {

        var Barry = usuarioRepositorio.findById(id)
                .map(
                        usuario -> {
                            if (!usuario.getTipo().equals("ADMIN")) {
                                usuario.setIdentificacion(usuarioNuevo.getIdentificacion());
                                usuario.setTipo(usuarioNuevo.getTipo());
                                usuario.setNombre(usuarioNuevo.getNombre());
                                usuario.setNumeroContacto(usuarioNuevo.getNumeroContacto());
                                usuario.setDescripcionUsuario(usuarioNuevo.getDescripcionUsuario());
                            }
                            return usuario;

                        })
                .flatMap(usuario ->
                        usuarioRepositorio.save(usuario)
                );

        return new ResponseEntity(Barry, HttpStatus.ACCEPTED);


        //.defaultIfEmpty(new ResponseEntity(
        //      "__ERROR: Usuario cond id " + id + " no encontrado",HttpStatus.BAD_REQUEST))
    }


    @Override
    public Mono<ResponseEntity<Usuario>> mostrarUsuarioPorID(String id) {

        return usuarioRepositorio.findById(id)
                .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                .defaultIfEmpty(new ResponseEntity(
                        "__ERROR: Usuario cond id " + id + " no encontrado", HttpStatus.BAD_REQUEST));

    }

    @Override
    public Mono<Object> eliminarUsuarioPorID(String id) {
        return usuarioRepositorio.findById(id)
                .map(usuario -> {
                    if (usuario.getTipo().equals("ADMIN")) {
                        usuario.setDescripcionUsuario("NO SE PUEDE ELIMINAR USUARIO");
                        usuario.setId("----------------");
                    }
                    return usuario;
                }).flatMap(usuario -> {
                    usuarioRepositorio.delete(usuario).subscribe();
                    return Mono.justOrEmpty(usuario);
                });
    }


}
