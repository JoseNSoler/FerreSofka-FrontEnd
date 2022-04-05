package co.com.sofka.ferreteria.controller;

import co.com.sofka.ferreteria.models.Usuario;
import co.com.sofka.ferreteria.service.impl.UsuarioServicioImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost"})
@RequestMapping("/usuarios")
public class UsuarioControlador {
    @Autowired
    private UsuarioServicioImpl usuarioServicio;

    @GetMapping("/mostrarUsuarios")
    public Flux<Usuario> mostrarUsuarios(){
        return usuarioServicio.mostrarUsuarios();
    }

    @PostMapping("/agregarUsuario")
    public ResponseEntity agregarUsuario(@RequestBody Usuario usuario){
        return usuarioServicio.guardarUsuario(usuario);
    }

    @PutMapping("/modificarUsuarioPorID/{idUser}")
    public ResponseEntity modificarUsuarioPorID(@PathVariable("idUser") String id, @RequestBody Usuario usuarioNuevo){
        return usuarioServicio.modificarUsuarioPorID(id, usuarioNuevo);
    }

    @GetMapping("/mostrarUsuarioPorID/{idUser}")
    public Mono<ResponseEntity<Usuario>> mostrarUsuarioPorID(@PathVariable("idUser") String id){
        return usuarioServicio.mostrarUsuarioPorID(id);
    }

    @DeleteMapping("/eliminarUsuarioPorID/{idUser}")
    public Mono<Object> eliminarUsuarioPorID(@PathVariable("idUser") String id) {
        return usuarioServicio.eliminarUsuarioPorID(id);
    }
}
