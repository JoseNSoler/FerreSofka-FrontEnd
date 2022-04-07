import React, { useEffect, useState } from 'react';
import { Container, Row, Form, Col, InputGroup, Button, Alert } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

import { getUsers, createUser } from '../actions'
import '../Sass/Users.scss'


const Users = (props) => {

    console.log(props.users)
    useEffect(() => {
        props.dispatch(getUsers(props));
    }, [])

    const mapUsers = () => {
        return(
        props.users.map((user) => {
            return(
                <div className='user'>
                    <p>{user.id}</p>
                    <p>{user.descripcionUsuario}</p>
                    <p>{user.identificacion}</p>
                    <p>{user.numeroContacto}</p>
                    <p>{user.tipo}</p>
                    <hr></hr>
                </div>
                
            )
        })
        )
    }

    const mapCreateUser = () => {
        console.log()
  const [validated, setValidated] = useState(false);
  const [objects, setObjects] = useState([])


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const data = event.target.elements;

    const obj = {}

    obj["id"] = data["id"].value
    obj["nombre"] = data["nombre"].value
    obj["descripcionUsuario"] = data["descripcionUsuario"].value
    obj["identificacion"] = data["identificacion"].value
    obj["numeroContacto"] = data["numeroContacto"].value
    obj["tipo"] = data["tipo"].value



    event.preventDefault();
    event.stopPropagation();

    console.log(obj)   



    props.dispatch(createUser(props, obj))



    
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3"  xs={1}>

        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>ID Usuario</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="id"
            defaultValue=""
            name="id"
          />
          <Form.Control.Feedback>Bien</Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>Descripcion Usuario</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="descripcionUsuario"
            name="descripcionUsuario"
            defaultValue=""
          />
          <Form.Control.Feedback>Bien</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}  controlId="validationCustomUsername">
          <Form.Label>Identificacion de Usuario -- Aplica tarjetas profesionales para proveedores</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="identificacion"
              name="identificacion"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
            Identificacion de Usuario principal invalida
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

      </Row>

      <Row className="mb-3" xs={1}>

      <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Nombre Contacto</Form.Label>
          <Form.Control type="text" placeholder="nombre" required name="nombre" />
          <Form.Control.Feedback type="invalid">
            Nombre Contacto debe ser valido
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Numero Contacto</Form.Label>
          <Form.Control type="text" placeholder="numeroContacto" required name="numeroContacto" />
          <Form.Control.Feedback type="invalid">
             Numero Contacto debe ser valido
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}  controlId="validationCustom04">
          <Form.Label>Tipo de Usuario = ADMIN, EMPLEADO, CLIENTE, PROVEEDOR</Form.Label>
          <Form.Control type="text" placeholder="tipo" required name="tipo" />
          <Form.Control.Feedback type="invalid">
            Tipo de Usuario ADMIN, EMPLEADO, CLIENTE, PROVEEDOR solo 
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
        );
    }


    return (
        <div>
            <h2>Creacion usuarios en base de datos -- REFRESCAR PAGINA</h2>
            <Container className='mainUsers'>
            <Row xs={1} md={2}>
                <Col className='actualUsers'>{mapUsers()}</Col>
                <Col className='newUsers'>{mapCreateUser()}</Col>
            </Row>
            </Container>
        </div>
    );
}


const stateMapToPros = state => {
    return { users: state.allForOne.users }

}


export default connect(stateMapToPros)(Users)