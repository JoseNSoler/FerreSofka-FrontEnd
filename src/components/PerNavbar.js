import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';



const PerNavbar = (props) => {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container >
                <Navbar.Brand href="/Front_FerreteriaSofka/home">Ferreteria SOFKA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='perNavBar'>
                    <Nav className="me-auto">
                        <Nav.Link href="/Front_FerreteriaSofka/all">Inventario</Nav.Link>
                        <Nav.Link href="/Front_FerreteriaSofka/entradaProducto">Registro Entrada inventario</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="/Front_FerreteriaSofka/factura">
                            Factura
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const stateMapToPros = state => {

    return { data: state.allForOne.navbar }

}


export default connect(stateMapToPros)(PerNavbar)