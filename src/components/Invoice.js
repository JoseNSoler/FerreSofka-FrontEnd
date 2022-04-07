import React, { useState } from 'react';
import { Row, Form, Col, InputGroup, Button, Alert } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import FormInvoice from './formInvoice/FormInvoice';



const Invoice = (props) => {
    
    console.log(props)
    const typeClick = (e) => {
        console.log(e.target.value)
    }

    const [products, setProducts] = useState([<FormInvoice/>]);

    const options = () => {
        if(
            props.data
        && Object.keys(props.data).length !== 0
        && props.data.productosInventario
        ){
            return (
            
                <div>
                    <Row style={{ margin: '1.5rem 0 1.5rem 0' }}>
                        
                            {props.data.productosInventario.map((element) => {
                                return(
                                    <Col xs={6} md={4} >
                                    <div  key={element.id}>
                                        <Alert variant="success">
                                            <Alert.Heading>{element.referenciaNombre}</Alert.Heading>
                                            <p>Solo se pueden almacenar un maximo de {element.maximoPermitido} productos
                                            </p>
                                            <hr />
                                        </Alert>
                                    </div>
                                    </Col>
                                )
                            })}
                        
                    </Row>
                </div>
            )
        }
        else{
            return(
                <h3>
                Si no puede ver los filtros requeridos, porfavor de click en inventario y seguidamente en Registro de entrada inventario otravez
                </h3>
            )
        }
        
    }


    const addProduct = () => {
        setProducts(products.concat(<FormInvoice/>))
    }

    return (
        <div>
            {options()}

            {products}

            <hr></hr>
            <Button variant="warning" onClick={(e) => addProduct(e)} >Primary</Button>
            <Button variant="danger" onClick={(e) => addProduct(e)} >Primary</Button>

        </div>
    );
}

const stateMapToPros = state => {
    return { data: state.allForOne.result, char: state.allForOne.character,
        loading: state.allForOne.loading, id: state.allForOne.idInv, products: state.allForOne.orderProducts }

}


export default connect(stateMapToPros)(Invoice)


