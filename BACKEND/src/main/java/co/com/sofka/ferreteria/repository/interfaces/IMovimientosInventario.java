package co.com.sofka.ferreteria.repository.interfaces;

import co.com.sofka.ferreteria.models.MovimientoInventario;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface IMovimientosInventario extends ReactiveMongoRepository<MovimientoInventario, String>, IRefDominioRepositorio {

}
