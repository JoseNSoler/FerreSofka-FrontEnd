import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { Row, Col, Button } from 'react-bootstrap';

import '../../Sass/table.scss'
import '../../Sass/App.scss'

export default function TableExample(props) {
    var data = props.props; // traer inventario e id
    console.log(props)

    const [ productsFinal, setproductsFinal ] = useState([""]);

    const clickProduct = (e, product) => {
        var index = productsFinal.includes(product)
        (index !== false) ? setproductsFinal(productsFinal.filter(item => item !== product))
        : setproductsFinal([...productsFinal, product])
    }


    const listaTable = () => {
        return (
            data.productosInventario.map((element) => {
                console.log(element)
                return (
                    <div className='listInventory'>
                        <Row xs={1} md={2} className='headInventory'>
                            <Col md={6}>
                                Referencia : {element.referenciaNombre}
                            </Col>
                            <Col className='standards' variant="success">
                                <Button className='maximus'>
                                    Maximo = {element.maximoPermitido}
                                </Button>
                                <Button className='minimus' variant="danger"> 
                                    Minimo = {element.minimoRequerido}
                                </Button>
                            </Col>
                        </Row>
                        <Table className='table-bordered tableInventory'>
                            <Thead className='tableHead'>
                                <Tr className='tableHeadInfo'>
                                    <Th>Check</Th>
                                    <Th>Id</Th>
                                    <Th>Referencia completa</Th>
                                    <Th>Nombre Proveedor</Th>
                                    <Th>
                                        <div>
                                            IDProveedor Ref.
                                        </div>
                                    </Th>
                                    <Th>valor</Th>

                                </Tr>
                            </Thead>

                            <Tbody>
                                {element.productos.map((product) => {
                                    return (
                                        <Tr className='productCategory'>
                                            <Td className='product check'>
                                                <input type="checkbox" onClick={e => clickProduct(e, product)}/>
                                            </Td>
                                            <Td className='product'>
                                                {product.id}
                                            </Td>
                                            <Td className='product'>{product.referencia}</Td>
                                            <Td className='product'>{product.proveedorNombre}</Td>
                                            <Td className='product'>{product.referenciaID}</Td>
                                            <Td className='product'>{product.valor}</Td>
                                        </Tr>
                                    )
                                })}

                            </Tbody>
                        </Table>
                    </div>
                )
            })

        )
    }

    return (
        <div className='mainTable'>
            <h3>INVENTARIO ID: {data.id}</h3>
            {listaTable()}
        </div>

    );
}