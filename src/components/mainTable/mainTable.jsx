import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { Row, Col, Button } from 'react-bootstrap';

import '../../Sass/table.scss'
import '../../Sass/App.scss'

export default function TableExample(props) {
    const [productsFinal, setproductsFinal] = useState([]);
    var data = props.props; // traer inventario e id


    console.log(props)
    console.log(productsFinal)



    const clickProduct = (e, product) => {

        if (!productsFinal.find(elem => elem === product)) {
            setproductsFinal([...productsFinal, product])
            console.log(data.id, productsFinal)

        }
        else {
            console.log("asdas")
            setproductsFinal(productsFinal.filter(item => item.id != product.id))
        }


    }
    

    const listaTable = () => {
        console.log(data)
        if(
            data.data
        && Object.keys(data.data).length !== 0
        ){
            return (data.data.productosInventario) ? (
                data.data.productosInventario.map((element) => {
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
                            <Table striped bordered hover className='table  table-bordered table-striped tableInventory' >
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
                                                    <input type="checkbox" onClick={e => clickProduct(e, product)} />
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
            ) : (
                <div>
                    <Row xs={1} md={2} className='headInventory'>
                        <Col md={6}>
                            Referencia : {data.data.referenciaNombre}
                        </Col>
                        <Col className='standards' variant="success">
                            <Button className='maximus'>
                                Maximo = {data.data.maximoPermitido}
                            </Button>
                            <Button className='minimus' variant="danger">
                                Minimo = {data.data.minimoRequerido}
                            </Button>
                        </Col>
                    </Row>
                    <Table striped bordered hover className='table  table-bordered table-striped tableInventory' >
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
                            {data.data.productos.map((element) => {
                                return (
                                    <>
                                        <Tr className='productCategory'>
                                            <Td className='product check'>
                                                <input type="checkbox" onClick={e => clickProduct(e, element)} />
                                            </Td>
                                            <Td className='product'>
                                                {element.id}
                                            </Td>
                                            <Td className='product'>{element.referencia}</Td>
                                            <Td className='product'>{element.proveedorNombre}</Td>
                                            <Td className='product'>{element.referenciaID}</Td>
                                            <Td className='product'>{element.valor}</Td>
                                        </Tr>
                                    </>)
                            })}
                        </Tbody>
    
                    </Table>
                </div>
            )
        }
        
    }

    if (data !== undefined) {
        return (data.hasOwnProperty('id')) ? (
            <div className='mainTable'>
                <h3>INVENTARIO ID: {(data.id) ? data.id : data.data.id}</h3>
                {listaTable()}
                <div> <hr />

                </div>
                <Button className='stickyFacture' variant="success">FACTURAR</Button>
            </div>
        ) : (
            <>void vodo</>
        )
    } else {
        return (<>void</>)
    }

}