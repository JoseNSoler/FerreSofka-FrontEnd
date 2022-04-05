package co.com.sofka.ferreteria;

// import co.com.sofka.ferreteria.mapper.MapperInventario;
import co.com.sofka.ferreteria.models.Inventario;
import co.com.sofka.ferreteria.models.Producto;
import co.com.sofka.ferreteria.models.ProductosInventario;
import co.com.sofka.ferreteria.service.impl.InventarioServicioImpl;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertThrows;
import static org.junit.Assert.assertTrue;

@WebFluxTest
@Import(Inventario.class)
@RunWith(SpringRunner.class)
class FerreteriaApplicationTests {
	@MockBean
	private InventarioServicioImpl inventarioServicio;

	//MapperInventario mapperInventario = new MapperInventario();


	// Se debe crear una lista de determinado producto, bajo cierto numero de productos segun especificaciones
	@Test
	void ERR_crearInventarioConMinimoProductosIncumplido() {
		Inventario inventario = new Inventario();

		inventario.setId("INVENTARIO1");


		Producto producto = new Producto();
		producto.setId("PRODUCT1544652");
		producto.setProveedorNombre("Pintucaritas");
		producto.setReferenciaID("##PINTU124454");
		producto.setValor(2145);


		ProductosInventario productosInventario = new ProductosInventario();
		productosInventario.setMinimoRequerido(2);
		productosInventario.setMaximoPermitido(10);

		List<Producto> productos = List.of(producto);


		Exception exception = assertThrows(IllegalArgumentException.class, () -> {
			productosInventario.setProductos(productos);
		});

		String expectedMessage = "Error, lista debe estar entre los tamaños2=10";
		String actualMessage = exception.getMessage();

		assertTrue(actualMessage.contains(expectedMessage));

	}


	@Test
	void crearInventarioConMinimoProductos() {
		Inventario inventario = new Inventario();

		inventario.setId("INVENTARIO1");


		Producto producto = new Producto();
		producto.setId("PRODUCT1544652");
		producto.setProveedorNombre("Pintucaritas");
		producto.setReferenciaID("##PINTU124454");
		producto.setValor(2145);

		Producto producto2 = new Producto();
		producto2.setId("PRODUCT1588888");
		producto2.setProveedorNombre("Modelia");
		producto2.setReferenciaID("##MODEL1122");
		producto2.setValor(9999);

		ProductosInventario productosInventario = new ProductosInventario();
		productosInventario.setMinimoRequerido(2);
		productosInventario.setMaximoPermitido(10);

		List<Producto> productos = List.of(producto, producto2);

		productosInventario.setProductos(productos);



		Assert.assertEquals(2, productosInventario.getProductos().size());

	}


	@Test
	void crearInventarioConVariasListasProductos() {

		// Inventario principal
		Inventario inventario = new Inventario();

		inventario.setId("INVENTARIO1");

		// Creacion productos individuales pinturas
		String pinturaSTR = "pintura pared";

		Producto producto = new Producto();
		producto.setReferencia(pinturaSTR);
		producto.setId("PRODUCT1544652");
		producto.setProveedorNombre("Pintucaritas");
		producto.setReferenciaID("##PINTU124454");
		producto.setValor(2145);

		Producto producto2 = new Producto();
		producto2.setReferencia(pinturaSTR);
		producto2.setId("PRODUCT1588888");
		producto2.setProveedorNombre("Modelia");
		producto2.setReferenciaID("##MODEL1122");
		producto2.setValor(9999);

		List<Producto> productosPintura = List.of(producto, producto2);

		// Se crea una lista y se añaden al objeto Producto inventarios, y se asigna un minimo y maximo permitido
		ProductosInventario pinturas = new ProductosInventario();
		pinturas.setMaximoPermitido(50);
		pinturas.setMinimoRequerido(2);
		pinturas.setReferenciaNombre(pinturaSTR);
		pinturas.setProductos(productosPintura);


		// Creacion productos individuales herramientas -------
		String herramientasSTR = "herramientas";

		Producto producto3 = new Producto();
		producto3.setReferencia(herramientasSTR);
		producto3.setId("PRODUCT2133215");
		producto3.setProveedorNombre("Homecenter");
		producto3.setReferenciaID("##HERR1211324");
		producto3.setValor(77777);

		Producto producto4 = new Producto();
		producto4.setReferencia(herramientasSTR);
		producto4.setId("PRODUCT99999");
		producto4.setProveedorNombre("Caterpillar");
		producto4.setReferenciaID("##Caterpill1424");
		producto4.setValor(8888);

		Producto producto5 = new Producto();
		producto5.setReferencia(herramientasSTR);
		producto5.setId("PRODUCT_HERRAMM");
		producto5.setProveedorNombre("Caterpillar");
		producto5.setReferenciaID("##Caterpill77777");
		producto5.setValor(1000000);

		List<Producto> productosHerramientas= List.of(producto3, producto4, producto5);

		// Se crea una lista y se añaden al objeto Producto inventarios, y se asigna un minimo y maximo permitido
		ProductosInventario herramientas = new ProductosInventario();
		herramientas.setMaximoPermitido(20);
		herramientas.setMinimoRequerido(1);
		herramientas.setReferenciaNombre(herramientasSTR);
		herramientas.setProductos(productosHerramientas);




		// Se añaden las dos listas de objetos agrupados List<ListProductos<Producto>>, donde ListProductos se compone de los
		// lineamientos necesarios para la mercancia minima


		inventario.setProductosInventario(List.of(herramientas, pinturas));

		System.out.println(inventario.getProductosInventario().get(0).getValorTotal());



		Assert.assertEquals(2, inventario.getProductosInventario().size());

		Assert.assertEquals(3, inventario.getProductosInventario().get(0).getProductos().size()); // herramientas posicion 0

	}


	@Test
	void ERR_crearInventarioConVariasListasMinimoProductosIncumplidos() {

		// Inventario principal
		Inventario inventario = new Inventario();

		inventario.setId("INVENTARIO1");

		// Creacion productos individuales pinturas
		String pinturaSTR = "pintura pared";

		Producto producto = new Producto();
		producto.setReferencia(pinturaSTR);
		producto.setId("PRODUCT1544652");
		producto.setProveedorNombre("Pintucaritas");
		producto.setReferenciaID("##PINTU124454");
		producto.setValor(2145);

		Producto producto2 = new Producto();
		producto2.setReferencia(pinturaSTR);
		producto2.setId("PRODUCT1588888");
		producto2.setProveedorNombre("Modelia");
		producto2.setReferenciaID("##MODEL1122");
		producto2.setValor(9999);

		List<Producto> productosPintura = List.of(producto, producto2);

		// Se crea una lista y se añaden al objeto Producto inventarios, y se asigna un minimo y maximo permitido
		ProductosInventario pinturas = new ProductosInventario();
		pinturas.setMaximoPermitido(50);
		pinturas.setMinimoRequerido(2);
		pinturas.setReferenciaNombre(pinturaSTR);
		pinturas.setProductos(productosPintura);


		// Creacion productos individuales herramientas -------
		String herramientasSTR = "herramientas";

		Producto producto3 = new Producto();
		producto.setReferencia(herramientasSTR);
		producto.setId("PRODUCT2133215");
		producto.setProveedorNombre("Homecenter");
		producto.setReferenciaID("##HERR1211324");
		producto.setValor(77777);

		Producto producto4 = new Producto();
		producto2.setReferencia(herramientasSTR);
		producto2.setId("PRODUCT99999");
		producto2.setProveedorNombre("Caterpillar");
		producto2.setReferenciaID("##Caterpill1424");
		producto2.setValor(8888);

		Producto producto5 = new Producto();
		producto2.setReferencia(herramientasSTR);
		producto2.setId("PRODUCT_HERRAMM");
		producto2.setProveedorNombre("Caterpillar");
		producto2.setReferenciaID("##Caterpill77777");
		producto2.setValor(1000000);

		List<Producto> productosHerramientas= List.of(producto3, producto4, producto5);

		// Se crea una lista y se añaden al objeto Producto inventarios, y se asigna un minimo y maximo permitido
		ProductosInventario herramientas = new ProductosInventario();
		herramientas.setMaximoPermitido(20);
		herramientas.setMinimoRequerido(5); // ERROR **--- , se agregan 3 productos pero se requieren 5
		herramientas.setReferenciaNombre(herramientasSTR);

		Exception exception = assertThrows(IllegalArgumentException.class, () -> {
			herramientas.setProductos(productosHerramientas);
		});





		// Se añaden las dos listas de objetos agrupados List<ListProductos<Producto>>, donde ListProductos se compone de los
		// lineamientos necesarios para la mercancia minima -- ERROR una no contiene el minimo esperado




		String expectedMessage = "Error, lista debe estar entre los tamaños5=20";
		String actualMessage = exception.getMessage();

		assertTrue(actualMessage.contains(expectedMessage));

	}





}
