import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { Row, Col, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

import '../../Sass/table.scss'
import '../../Sass/App.scss'
import { makeInvoice } from '../../actions';
import { connect } from 'react-redux';
import jsPDF from 'jspdf';

const TableExample = (props) => {


    let navigate = useNavigate();
    const [productsFinal, setproductsFinal] = useState([]);
    const [counter, setCounter] = useState(10);
    const [counterX, setCounterX] = useState(2);
    var data = props.props; // traer inventario e id


    console.log(props)
    console.log(productsFinal)



    const clickProduct = (e, product, minimo) => {
        console.log(minimo)
        if (!productsFinal.find(elem => elem === product)) {

            setproductsFinal([...productsFinal, product])
            console.log(data.id, productsFinal);

        }
        else {
            console.log("asdas");
            setproductsFinal(productsFinal.filter(item => item.id != product.id))
        }


    }


    const listaTable = () => {
        console.log(data)
        if (
            data.data
            && Object.keys(data.data).length !== 0
        ) {
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
                                                    <input type="checkbox" onClick={e => clickProduct(e, product, element.minimoRequerido)} />
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
                                                <input type="checkbox" onClick={e => clickProduct(e, element, data.data.minimoRequerido)} />
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

    const listObj = () => {
        return (
            <div>
                {productsFinal.map((element) => {
                    return (
                        <>
                            <div>
                                ID:
                                {element.id}
                            </div>
                            <div>
                                REFERENCIA PRINCIPAL
                                {element.referenciaPrincipal}
                            </div>
                            <div>
                                REFERENCIA nombre
                                {element.referencia}
                            </div>
                            <div>
                                REFERENCIA ID
                                {element.referenciaID}
                            </div>
                            <div>
                                REFERENCIA NOMBRE
                                {element.proveedorNombre}
                            </div>
                        </>
                    )
                })}
            </div>
        )
    }

    const sendFinal = (e) => {
        console.log(productsFinal);

        props.dispatch(makeInvoice(props, productsFinal));

        var doc2 = new jsPDF()
        /*
        doc.text(10, 10, "FACTURA TEXTO")
        productsFinal.map((element) => {
            doc.text((10 + counterX), (20 + counter), element.id)
            doc.text((50 + counterX), (50 + counter), element.referenciaPrincipal)
            doc.text((90 + counterX), (70 + counter), element.referencia)
            doc.text((130 + counterX), (90 + counter), element.referenciaID)
            doc.text((170 + counterX), (100 + counter), element.proveedorNombre)
            doc.text(20, (240 + counter), "----------------------------------")
            setCounter(counter + 20)
            setCounterX(counterX + 20)
        })*/

        const columns = [
            "SOW Creation Date",
            "SOW Start Date",
            "Project",
            "Last Updated",
            "SOW End Date"
        ];
        var opt = {
            margin: 0.5,
            filename: 'myfile.pdf',
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait', precision: '12' }
        };
        var rows = [
            [
                "Dec 13, 2017",
                "Jan 1, 2018",
                "ABC Connect - ABCXYZ",
                "Dec 13, 2017",
                "Dec 31, 2018"
            ]
        ];


        var doc = new jsPDF();
        var elementHandler = {
            '#ignorePDF': function (element, renderer) {
                return true;
            }
        };
        doc.html(
            <>sadsdf</>,
            15,
            15,
            {
                'width': 180, 'elementHandlers': elementHandler
            });

        doc.output("dataurlnewwindow");
        

        //navigate("/Front_FerreteriaSofka/factura", { replace: true });
    }

    if (data !== undefined) {
        return (data.hasOwnProperty('id')) ? (
            <div className='mainTable'>
                <h3>INVENTARIO ID: {(data.id) ? data.id : data.data.id}</h3>
                {listaTable()}
                <div> <hr />

                </div>
                <Button className='stickyFacture' variant="success" onClick={(e) => sendFinal(e)}>FACTURAR</Button>
            </div>
        ) : (
            <>void vodo</>
        )
    } else {
        return (<>void</>)
    }

}


const stateMapToPros = state => {
    return {
        data: state.allForOne.result, char: state.allForOne.character,
        loading: state.allForOne.loading, id: state.allForOne.idInv, products: state.allForOne.orderProducts,
        productsInvoice: state.allForOne.finalProducts
    }

}

export default connect(stateMapToPros)(TableExample)