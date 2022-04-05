package co.com.sofka.ferreteria.service.impl;

import co.com.sofka.ferreteria.controller.InventarioControlador;
import co.com.sofka.ferreteria.models.MovimientoInventario;
import co.com.sofka.ferreteria.models.Producto;
import co.com.sofka.ferreteria.models.ProductosInventario;
import co.com.sofka.ferreteria.repository.interfaces.IMovimientosInventario;
import co.com.sofka.ferreteria.repository.interfaces.IUsuarioRepositorio;
import co.com.sofka.ferreteria.repository.interfaces.InterInventarioRepositorio;
import co.com.sofka.ferreteria.service.IMovimientoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.management.AttributeNotFoundException;
import javax.security.auth.login.AccountNotFoundException;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class MovimientoServicioImpl implements IMovimientoServicio {
    @Autowired
    private InterInventarioRepositorio inventarioRepositorio;

    @Autowired
    private IMovimientosInventario movimientosInventario;


    @Override
    public Flux<MovimientoInventario> mostrarMovimientos(){
        return movimientosInventario.findAll();
    }

    @Override
    public Mono<MovimientoInventario> crearMovimientoPorIDInventario(String idInventario, MovimientoInventario movimiento) {

        try {
            Objects.requireNonNull(movimiento.getId(), "ID no puede ser null");

            System.out.println("asdasdsa");
            var barry = inventarioRepositorio.findById(idInventario).map(
                    inventario ->
                    {
                        inventario.getProductosInventario().stream().map(
                                listaProd -> {

                                    movimiento.getProductos().stream().map(productoNuevo -> {
                                        if (listaProd.getReferenciaNombre().equals(productoNuevo.getReferenciaPrincipal())) {
                                            // Si coincide el elemento en base al nuevo objeto, se realizara la accion
                                            List<Producto> movimientoLista = listaProd.getProductos();
                                            if (movimiento.getTipo().equals("FACTURA")) {
                                                System.out.println("sdasasdasdasdasdsdaasdsdaasd" + productoNuevo);
                                                if (movimientoLista.indexOf(productoNuevo) != -1) {
                                                    movimientoLista.remove(productoNuevo);
                                                }

                                            }


                                            if (movimiento.getTipo().equals("ENTRADA"))
                                                if (!(productoNuevo.getProveedorNombre().isEmpty()))
                                                    movimientoLista.add(productoNuevo);

                                            listaProd.setProductos(movimientoLista);
                                        }
                                        return productoNuevo;
                                    }).collect(Collectors.toSet());
                                    return listaProd;
                                }).collect(Collectors.toList());
                        return inventario;

                    }).flatMap(inventario -> inventarioRepositorio.save(inventario));

            barry.subscribe(
                    value -> System.out.println(value)
            );

            return movimientosInventario.save(movimiento);
        } catch (IllegalArgumentException e) {
            var error = new MovimientoInventario();
            error.setId(e.toString());
            return Mono.just(error);
        }


    }
}
