package co.com.sofka.ferreteria.controller;

import co.com.sofka.ferreteria.models.MovimientoInventario;
import co.com.sofka.ferreteria.service.impl.MovimientoServicioImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost"})
@RequestMapping("/movimientosInventario")
public class MovimientoControlador {
    @Autowired
    private MovimientoServicioImpl movimientoServicio;

    //@GetMapping("/saberMovimientosPorID/{idInventario}")

    @GetMapping("/mostrarMovimientos")
    private Flux<MovimientoInventario> mostrarMovimientos(){
        return movimientoServicio.mostrarMovimientos();
    }


    @PostMapping("/crearMovimientoPorID/{idInventario}")
    private Mono<MovimientoInventario> crearMovimiento(@PathVariable("idInventario") String idInventario, @RequestBody MovimientoInventario movimiento){
        return movimientoServicio.crearMovimientoPorIDInventario(idInventario, movimiento);
    }
}
