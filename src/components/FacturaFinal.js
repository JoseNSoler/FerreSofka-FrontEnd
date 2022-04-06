import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

const Facturafinal = (props) => {
    console.log(props)
    return (
        <div>
            <Container>
            <Row xs={1} md={2} className="justify-content-md-center">
                <Col xs lg="2">
                    1 of 3
                </Col>
                <Col md="auto">Variable width content</Col>
                <Col xs lg="2">
                    3 of 3
                </Col>
            </Row>
            </Container> 
        </div>
    );
}

const stateMapToPros = state => {
    return { data: state.allForOne.result, char: state.allForOne.character,
        loading: state.allForOne.loading, id: state.allForOne.idInv, products: state.allForOne.orderProducts,
        productsInvoice: state.allForOne.finalProducts }

}


export default connect(stateMapToPros)(Facturafinal)
