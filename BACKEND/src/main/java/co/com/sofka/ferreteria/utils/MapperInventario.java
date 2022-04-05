/*

package co.com.sofka.ferreteria.mapper;

import co.com.sofka.ferreteria.models.Inventario;
import co.com.sofka.ferreteria.models.Producto;
import co.com.sofka.ferreteria.models.dto.DTOInventario;
import co.com.sofka.ferreteria.models.dto.DTOProducto;

import java.util.List;
import java.util.stream.Collectors;


public class MapperInventario {
    public DTOInventario convertirInventarioParaDTO(Inventario inventario){
        List<DTOProducto> productos = inventario.getProductos().stream()
                .map(producto -> convertirProductoParaDTO(producto))
                .collect(Collectors.toList());

        return new DTOInventario(
                inventario.getId(), productos
        );
    }



    public Inventario convertirInventarioDesdeDTO(DTOInventario dtoInventario){
        List<Producto> productos = dtoInventario.getProductos().stream()
                .map(producto -> convertirProductoDesdeDTO(producto))
                .collect(Collectors.toList());

        System.out.println(productos);
        Inventario inventario = new Inventario();
        inventario.setProductos(productos);
        inventario.setId(dtoInventario.getId());

        return inventario;
    }


    public DTOProducto convertirProductoParaDTO(Producto producto){
        return new DTOProducto(
                producto.getId(), producto.getProveedorNombre(), producto.getReferenciaID(), producto.getValor()
        );
    }

    public Producto convertirProductoDesdeDTO(DTOProducto dtoProducto){
        Producto producto = new Producto();
        producto.setId(dtoProducto.getId());
        producto.setProveedorNombre(dtoProducto.getProveedorNombre());
        producto.setReferenciaID(dtoProducto.getReferenciaID());
        producto.setValor(dtoProducto.getValor());

        return producto;
    }


}


 */
