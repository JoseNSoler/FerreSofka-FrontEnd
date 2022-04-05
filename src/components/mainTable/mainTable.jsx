import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { Row, Col } from 'react-bootstrap';

import '../../Sass/table.scss'

export default function TableExample(props) {
    var data = props.props; // traer inventario e id
    console.log(props)


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
                            <Col>Maximo = {element.maximoPermitido} -- Minimo = {element.minimoRequerido}</Col>
                        </Row>
                        <Table className='tableInventory'>
                            <Thead>
                                <Tr>

                                    <Th>Id</Th>
                                    <Th>Referencia completa</Th>
                                    <Th>Nombre Proveedor</Th>
                                    <Th>
                                        <div>
                                            ID referencia proveedor
                                        </div>
                                    </Th>
                                    <Th>valor</Th>

                                </Tr>
                            </Thead>

                            <Tbody>
                                {element.productos.map((product) => {
                                    return (
                                        <Tr className='productCategory'>
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