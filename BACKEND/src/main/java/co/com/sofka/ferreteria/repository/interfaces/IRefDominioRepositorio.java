package co.com.sofka.ferreteria.repository.interfaces;

import co.com.sofka.ferreteria.models.Inventario;
import co.com.sofka.ferreteria.models.Usuario;
import co.com.sofka.ferreteria.models.dto.DTOUsuario;
import reactor.core.publisher.Mono;

public interface IRefDominioRepositorio {
    Mono<Inventario> save(Mono<Inventario> inventario);

}
