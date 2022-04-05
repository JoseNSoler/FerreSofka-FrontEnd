package co.com.sofka.ferreteria.repository;

import co.com.sofka.ferreteria.models.Inventario;
import co.com.sofka.ferreteria.models.Usuario;
import co.com.sofka.ferreteria.repository.interfaces.IRefDominioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import reactor.core.publisher.Mono;

public class RefDominioRepositorio implements IRefDominioRepositorio {
    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public Mono<Inventario> save(Mono<Inventario> inventario){
        return mongoTemplate.save(inventario);
    }

}
