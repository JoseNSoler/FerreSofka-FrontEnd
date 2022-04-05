package co.com.sofka.ferreteria.service;

import co.com.sofka.ferreteria.models.Usuario;
import org.springframework.http.ResponseEntity;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IUsuarioServicio {
    ResponseEntity guardarUsuario(Usuario usuario);

    Flux<Usuario> mostrarUsuarios();

    ResponseEntity modificarUsuarioPorID(String id, Usuario usuarioNuevo);

    Mono<ResponseEntity<Usuario>> mostrarUsuarioPorID(String id);

    Mono<Object> eliminarUsuarioPorID(String id);
}
