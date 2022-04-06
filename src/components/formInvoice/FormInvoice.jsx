import React, { useState } from 'react';
import { Row, Form, Col, InputGroup, Button } from 'react-bootstrap';
import { modifyOrder } from '../../actions'


const formInvoice = (props) => {
  console.log(props)
  const [validated, setValidated] = useState(false);
  const [objects, setObjects] = useState(props.products)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const data = event.target.elements;

    const obj = {}

    obj["id"] = data["id"].value
    obj["referencia"] = data["referencia"].value
    obj["referenciaPrincipal"] = data["referenciaPrincipal"].value
    obj["proveedorNombre"] = data["proveedorNombre"].value
    obj["referenciaID"] = data["referenciaID"].value
    obj["valor"] = data["valor"].value

    console.log(event.target.elements);

    setObjects([
      obj
    ])

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

      console.log(obj)
      
    }


    props.dispatch(modifyOrder(objects))

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>ID Product</Form.Label>
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
          <Form.Label>Referencia</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="referencia"
            name="referencia"
            defaultValue=""
          />
          <Form.Control.Feedback>Bien</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Referencia Principal</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="referenciaPrincipal"
              name="referenciaPrincipal"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Referencia principal invalida
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

      </Row>

      <Row className="mb-3">

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Prooveedor Nombre</Form.Label>
          <Form.Control type="text" placeholder="proveedorNombre" required name="proveedorNombre" />
          <Form.Control.Feedback type="invalid">
            Nombre de proveedor debe ser valido
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Referencia ID</Form.Label>
          <Form.Control type="text" placeholder="referenciaID" required name="referenciaID" />
          <Form.Control.Feedback type="invalid">
            introduzca una referencia propia por parte del proveedor
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Valor</Form.Label>
          <Form.Control type="text" placeholder="valor" name="valor" required />
          <Form.Control.Feedback type="invalid">
            Producto debe tener un valor valido
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Desea agregar este producto a la lista de inventario? --
          Recuerde mirar la cantidad de productos permitida por lista"
          feedback="Debe de estar de acuerdo"
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default formInvoice;
