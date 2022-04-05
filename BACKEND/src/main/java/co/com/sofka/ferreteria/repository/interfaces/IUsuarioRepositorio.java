package co.com.sofka.ferreteria.repository.interfaces;

import co.com.sofka.ferreteria.models.Inventario;
import co.com.sofka.ferreteria.models.Usuario;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Mono;

public interface IUsuarioRepositorio extends ReactiveMongoRepository<Usuario, String>, IRefDominioRepositorio{

}
