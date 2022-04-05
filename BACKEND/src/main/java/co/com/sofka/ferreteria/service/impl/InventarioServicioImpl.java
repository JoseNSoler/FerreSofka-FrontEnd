package co.com.sofka.ferreteria.service.impl;

// import co.com.sofka.ferreteria.mapper.MapperInventario;

import co.com.sofka.ferreteria.models.Inventario;
import co.com.sofka.ferreteria.models.Producto;
import co.com.sofka.ferreteria.models.ProductosInventario;
import co.com.sofka.ferreteria.models.dto.DTOInventario;
import co.com.sofka.ferreteria.repository.interfaces.InterInventarioRepositorio;
import co.com.sofka.ferreteria.service.IinventarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class InventarioServicioImpl implements IinventarioServicio {
    @Autowired
    private InterInventarioRepositorio inventarioRepositorio;

    // MapperInventario mapperInventario = new MapperInventario();


    @Override
    public Mono<Inventario> guardarInventario(Inventario inventario) {
        return inventarioRepositorio.save(
                inventario);
    }

    @Override
    public Flux<Inventario> mostrarTodos() {
        return inventarioRepositorio.findAll();
    }

    @Override
    public Mono<Optional<ProductosInventario>> mostrarListaProductosPorReferencia(String idInventario, String referenciaNombre) {

        var valor1 = inventarioRepositorio.findById(idInventario).map(
                lista -> lista.getProductosInventario()
        ).map(lista -> lista.stream().filter(
                producto -> producto.getReferenciaNombre().equals(referenciaNombre)).findFirst());

        return valor1.single();

    }

    // ---------------------- AGREAGAR LISTA DE PRODUCTOS A INVENTARIO

    @Override
    public ResponseEntity agregarListaProductos(String id, ProductosInventario productosInventario) {
        var resultado = inventarioRepositorio.findById(id).map(inventario -> {
            inventario.getProductosInventario().add(productosInventario);
            return inventario;
        }).flatMap(inventario -> inventarioRepositorio.save(inventario));

        return new ResponseEntity(resultado, HttpStatus.ACCEPTED);
    }


    // ---------------------- MODIFICAR OBJECTO LISTA
    @Override
    public ResponseEntity modificarProductosHaciaListaPorRef(String idInventario, String referencia, List<Producto> productos) {


        var barry = inventarioRepositorio.findById(idInventario).map(
                inventario ->
                {
                    inventario.getProductosInventario().stream().map(
                            listaProd -> {
                                if (listaProd.getReferenciaNombre().equals(referencia)) {
                                    // modificar productos lista
                                    listaProd.setProductos(
                                            listaProd.getProductos().stream().map(
                                                            productoInv -> {
                                                                // Iterar sobre objetos nuevos a cambiar
                                                                productos.forEach(nuevoProdct -> {
                                                                    // En coincidencia, se modifican los atributos en base a lo requeridp
                                                                    if (nuevoProdct.getId().equals(productoInv.getId())) {
                                                                        productoInv.setReferencia(nuevoProdct.getReferencia());
                                                                        productoInv.setReferenciaID(nuevoProdct.getReferenciaID());
                                                                        productoInv.setProveedorNombre(nuevoProdct.getProveedorNombre());
                                                                        productoInv.setId(nuevoProdct.getId());
                                                                        productoInv.setValor(nuevoProdct.getValor());
                                                                        productoInv.setReferenciaPrincipal(nuevoProdct.getReferenciaPrincipal());
                                                                    }
                                                                });
                                                                return productoInv;
                                                            })
                                                    .collect(Collectors.toList())
                                    );
                                }
                                return listaProd;
                            }).collect(Collectors.toList());
                    return inventario;
                }).flatMap(inventario -> inventarioRepositorio.save(inventario));


        barry.subscribe(
                value -> System.out.println(value.getProductosInventario())
        );

        //.flatMap(inventario -> inventarioRepositorio.save(inventario))   new ResponseEntity(barry, HttpStatus.ACCEPTED)

        return new ResponseEntity(barry, HttpStatus.ACCEPTED);
    }


    // ---------------------- ELIMINAR OBJECTO LISTA
    @Override
    public ResponseEntity eliminarProductosDeListaPorRef(String idInventario, String referencia, List<Producto> producto) {


        var barry = inventarioRepositorio.findById(idInventario).map(
                inventario ->
                {
                    inventario.getProductosInventario().stream().map(
                            listaProd -> {
                                if (listaProd.getReferenciaNombre().equals(referencia)) {

                                    listaProd.setProductos(listaProd.getProductos().stream().filter(
                                            productoInv -> producto.stream().map(Producto::getId).allMatch(id -> (!id.equals(productoInv.getId()))
                                            )
                                    ).collect(Collectors.toList()));
                                }
                                return listaProd;
                            }).collect(Collectors.toList());
                    return inventario;
                }).flatMap(inventario -> inventarioRepositorio.save(inventario));


        barry.subscribe(
                value -> System.out.println(value.getProductosInventario())
        );

        //.flatMap(inventario -> inventarioRepositorio.save(inventario))   new ResponseEntity(barry, HttpStatus.ACCEPTED)

        return new ResponseEntity(barry, HttpStatus.ACCEPTED);
    }

    // ---------------------- AGREGAR OBJECTO LISTA
    @Override
    public ResponseEntity agregarProductosHaciaListaPorRef(String idInventario, String referencia, List<Producto> producto) {


        var barry = inventarioRepositorio.findById(idInventario).map(
                inventario ->
                {
                    inventario.getProductosInventario().stream().map(
                            listaProd -> {
                                if (listaProd.getReferenciaNombre().equals(referencia)) {

                                    List<Producto> eliminarPor2 = listaProd.getProductos();
                                    eliminarPor2.addAll(producto);
                                    listaProd.setProductos(eliminarPor2);

                                }
                                return listaProd;
                            }).collect(Collectors.toList());
                    return inventario;
                }).flatMap(inventario -> inventarioRepositorio.save(inventario));


        barry.subscribe(
                value -> System.out.println(value.getProductosInventario())
        );

        return new ResponseEntity(barry, HttpStatus.ACCEPTED);


/*
        var barry = inventarioRepositorio.findById(idInventario).map(
                inventario ->

                    inventario.getProductosInventario().stream().filter(
                            listaProd ->
                                    listaProd.getReferenciaNombre().equals(referencia)).findFirst().get().getProductos().stream().filter(
                                    productoInv -> producto.stream().map(Producto::getId).allMatch(id -> (!id.equals(productoInv.getId()))
                                )
                            ).collect(Collectors.toList())


                )
                ;

        barry.subscribe(
                value -> System.out.println(value)
        );

 */

/*
        List<Producto> eliminarPor = new ArrayList<>();

        var resultado = inventarioRepositorio.findById(idInventario).map(inventario ->
                {
                    inventario.getProductosInventario().stream().map(lista -> {
                                        if(lista.getReferenciaNombre().equals(referencia))
                                        {
                                            lista.getProductos().stream().filter(
                                                    productoInv -> producto.stream().map(Producto::getId).anyMatch(id -> id.equals(productoInv.getId())
                                            )).forEach(item -> eliminarPor.add(item));
                                            lista.setProductos(eliminarPor);
                                        }
                                        return lista;
                            });
        //producto.stream().map(Producto::getId).anyMatch(id -> !id.equals(productoInv.getId())
                    return inventario;
                }
        );
        */

        /*
        .getProductos().stream().filter(
                                    prod -> producto.stream().map(Producto::getId).anyMatch(id -> !id.equals(prod.getId()))
                            ).collect(Collectors.toList())



        resultado.subscribe(
                value -> System.out.println(value.getProductosInventario())
        );
        */



        /*
        var resultado = mostrarListaProductosPorReferencia(idInventario, referencia);


        resultado.subscribe(
                value -> System.out.println(value.get())
        );
         */
    }



    //.anyMatch(producto -> producto.getReferenciaNombre().equals(referenciaNombre))


}
