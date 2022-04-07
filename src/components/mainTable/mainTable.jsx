import React, { useState, useRef, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { Row, Col, Button, Form, InputGroup, Alert } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

import '../../Sass/table.scss'
import '../../Sass/App.scss'
import { makeInvoice } from '../../actions';
import { connect } from 'react-redux';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const TableExample = (props) => {


    let navigate = useNavigate();
    const [productsFinal, setproductsFinal] = useState([]);
    const [counter, setCounter] = useState(10);
    const [counterX, setCounterX] = useState(2);
    const [counterTotal, setCounterTotal] = useState(0);
    var data = props.props; // traer inventario e id


    console.log(props.props.data.id)
    console.log(productsFinal)


    useEffect(() => {
        console.log("asasdasd")
        setCounterTotal(Object.keys(productsFinal).reduce((prev, key) => {
            console.log(prev + productsFinal[key].valor)
            return prev + productsFinal[key].valor;
        }, 0))
    }, [productsFinal, counterTotal]);

    const clickProduct = (e, product, minimo) => {
        console.log(minimo)
        if (!productsFinal.find(elem => elem === product)) {

            setproductsFinal([...productsFinal, product])
            
        }
        else {
            console.log("asdas");
            setproductsFinal(productsFinal.filter(item => item.id != product.id))
        }

        
        console.log(data.id, productsFinal, counterTotal);


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
                                    {element.productos.map((product, index) => {
                                        return (
                                            <Tr className='productCategory' key={index}>
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
        console.log(props)
        const [validated, setValidated] = useState(false);

        const refer = useRef()

        const handleSubmit = (event) => {
            const form = event.currentTarget;
            const data = event.target.elements;

            const obj = {}


            console.log(data["total"].value)


            obj["id"] = data["id"].value
            obj["productos"] = productsFinal
            obj["nombreBeneficiario"] = data["nombreBeneficiario"].value
            obj["identificacion"] = data["identificacion"].value
            obj["tipo"] = data["tipo"].value
            obj["total"] = data["total"].value

            //props.dispatch(modifyOrder(props, objects))

            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();

                refer.current.scrollIntoView({ behavior: 'smooth' })

                console.log(obj);
            }
            else {
                event.preventDefault();
                event.stopPropagation();
                handlePdf(refer);
                props.dispatch(makeInvoice(props, productsFinal, obj, props.props.data.id));
            }

            console.log(productsFinal)
            
            setValidated(true);
        }

        return (
            <Form style={{border: 'black', borderStyle : "dashed", padding : '2%'}}
                noValidate validated={validated} onSubmit={handleSubmit} ref={refer} id="facturaTest">
                <Row className="mb-3">

                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>ID Facturat</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="id"
                            defaultValue=""
                            name="id"
                        />
                        <Form.Control.Feedback>Bien</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="tipo"
                            name="tipo"
                            defaultValue=""
                        />
                        <Form.Control.Feedback>Bien</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Nombre Beneficiario</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                placeholder="nombreBeneficiario"
                                name="nombreBeneficiario"
                                aria-describedby="nombreBeneficiario"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Nombre Beneficiario invalido
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Identificacion Beneficiario</Form.Label>
                        <Form.Control type="text" placeholder="identificacion" required name="identificacion" />
                        <Form.Control.Feedback type="invalid">
                            Identificacion Beneficiario debe ser valido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Total</Form.Label>
                        <Form.Control type="text" placeholder="total" name="total" value={counterTotal} required />
                    </Form.Group>
                </Row>
                <Row  xs={1} md={2} lg={4}>
                    {(Object.keys(productsFinal).length !== 0) ? productsFinal.map(
                        (element) => {
                            return (

                                <div className='invoiceObjects'>
                                    <Col>
                                    <div>
                                        <Alert variant="success">
                                            <Alert.Heading>{element.referenciaPrincipal}</Alert.Heading>
                                            <p>
                                                Nombre: {element.referencia} <br></br>ID : {element.id} 
                                            </p>
                                            <p>
                                                Referencia ID: {element.referenciaID} <br></br> Proveedor Nombre: {element.proveedorNombre}
                                            </p>
                                            <p>
                                                valor Unitario: {element.valor} <br></br>
                                            </p>
                                            <hr />
                                        </Alert>
                                    </div>
                                    </Col>
                                
                                </div>
                            )
                        }
                    ) : <>no hay productos</>}
                </Row>

                <Button type="submit" variant="success" className='stickyFacture'>FACTURAR</Button>
            </Form>
        );
        /*
        return (
            <div id="elements">
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
        )*/
    }

    const handlePdf = (refer) => {

        console.log(document.getElementById('button'))

        let input = document.getElementById('facturaTest');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                let pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 15, 15);
                pdf.save("download.pdf");
            })
            ;

    }

    const sendFinal = (e) => {
        console.log(productsFinal);

        //navigate("/Front_FerreteriaSofka/factura", { replace: true });
    }

    var myTextInput;
    if (data !== undefined) {
        return (data.hasOwnProperty('id')) ? (
            <div className='mainTable' id="mainTable">
                <h3>INVENTARIO ID: {(data.id) ? data.id : data.data.id}</h3>
                {listaTable()}
                {listObj()}
                <div> <hr />

                </div>
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