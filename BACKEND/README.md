# FERRESOFKA creacion 


Deploy HEROKU: **en progreso
Video en youtube: Link youtube

metodos desde /inventario
Docuimentacion swagger disponible en http://localhost:8080/swagger-ui.html

La estructura del inventario, se basa en un objeto inventario principal, con una lista de `ProductosInventarios`, este objeto contiene una lista de los `Productos` con
sus minimos y maximos permitidos (se configura para poder recibir solo cierta cantidad, al mismo tiempo de limitar las cantidades disponibles)

# INVENTARIO
```json
[
    {
        "id": "6245c0edb72508108e4bfffb",
        "productosInventario": [
            {
                "productos": [
                    {
                        "id": "PRODUCT1544652",
                        "referencia": "pintucarita 20 unidades",
                        "proveedorNombre": "Pintucaritas",
                        "referenciaID": "##PINTU124454",
                        "valor": 154654
                    },
                    {
                        "id": "PRODUCT15354",
                        "referencia": "pintucarita 20 unidades",
                        "proveedorNombre": "pintores",
                        "referenciaID": "##PIfssdNTU124454",
                        "valor": 200000
                    }
                ],
                "referenciaNombre": "pinturas",
                "minimoRequerido": 2,
                "maximoPermitido": 5,
                "valorTotal": 354654
            },
            {
                "productos": [
                    {
                        "id": "PRODUCT777777",
                        "referencia": "homecenter ultra 2020",
                        "proveedorNombre": "Homecenter",
                        "referenciaID": "##PINTU124454",
                        "valor": 154654
                    },
                    {
                        "id": "PRODUCT88888",
                        "referencia": "catrer ultra 2020",
                        "proveedorNombre": "Caterpillar",
                        "referenciaID": "##Caterpill1424",
                        "valor": 200000
                    },
                    {
                        "id": "PRODUCT8546",
                        "referencia": "caterpillar 2021",
                        "proveedorNombre": "Caterpillar",
                        "referenciaID": "##Caterpill1477777",
                        "valor": 200000524
                    }
                ],
                "referenciaNombre": "herramientas",
                "minimoRequerido": 2,
                "maximoPermitido": 5,
                "valorTotal": 200355178
            }
        ]
    }
]

```


/mostrarTodos : mostrar todos los inventarios

agregarListaProductos/{id}: agregar lista de productos
