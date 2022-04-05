package co.com.sofka.ferreteria.service;

import co.com.sofka.ferreteria.models.MovimientoInventario;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IMovimientoServicio {
    Mono<MovimientoInventario> crearMovimientoPorIDInventario(String idInventario, MovimientoInventario movimiento);
    Flux<MovimientoInventario> mostrarMovimientos();
}
