package co.com.sofka.ferreteria.service;

import co.com.sofka.ferreteria.models.Inventario;
import co.com.sofka.ferreteria.models.Producto;
import co.com.sofka.ferreteria.models.ProductosInventario;
import org.springframework.http.ResponseEntity;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Optional;

public interface IinventarioServicio {
    Mono<Inventario> guardarInventario(Inventario inventario);
    Flux<Inventario> mostrarTodos();
    Mono<Optional<ProductosInventario>> mostrarListaProductosPorReferencia(String idInventario ,String referenciaNombre);

    ResponseEntity agregarListaProductos(String id, ProductosInventario productosInventario);

    ResponseEntity eliminarProductosDeListaPorRef(String idInventario, String referencia, List<Producto> producto);

    ResponseEntity agregarProductosHaciaListaPorRef(String idInventario, String referencia, List<Producto> producto);

    ResponseEntity modificarProductosHaciaListaPorRef(String idInventario, String referencia, List<Producto> producto);




}
