import { Container, Row, Col, Card, Button, Form, Stack } from "react-bootstrap"
import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {getAllCharacters, filterAlive, filterMany, page, characterInfo, loading } from '../actions'

import { Navigate, useNavigate  } from 'react-router-dom';

import  TableExample  from './mainTable/mainTable'


const Section = (props) => {

    let navigate = useNavigate();
    

    const [state, setState] = useState();

    const [resultList2, setResultList2] = useState(["uno", "aaasd", "fgdf", "rtert"]);

    const [resultList, setResultList] = useState([]);

    const [filterProvStr, setFilterProvStr] = useState();

    const [filterRefStr, setFilterRefStr] = useState();

    const [nextPage, setNextPage] = useState();

    const [prevPage, setPrevPage] = useState();


    const provClick = (e) => {
        e.preventDefault();
        setFilterProvStr(e.target.value)
    }

    const refClick = (e) => {
        e.preventDefault();
        setFilterRefStr(e.target.value)
    }

    //  ------------------------------------------------ filtros---------------------------------------------------
    const Filters = () => {
        return (
            <Row xs={1} md={2} lg={3} style={{margin: '1.5rem 0 1.5rem 0'}}>
                <Col>
                    <Form.Select aria-label="Proveedor" className="selectionProoveedor" defaultValue={filterProvStr}>
                        <option value="Sapolio" onClick={(e) => provClick(e)}>Sapolio</option>
                        <option value="GreenOne" onClick={(e) => provClick(e)} >GreenOne</option>
                        <option value="Metallica" onClick={(e) => provClick(e)} >Metallica</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select aria-label="Referencia" className="selectionReferencia" defaultValue={filterRefStr}>
                        <option value="Female" onClick={(e) => refClick(e)}>Female</option>
                        <option value="Male" onClick={(e) => refClick(e)} >Male</option>
                        <option value="Genderless" onClick={(e) => refClick(e)} >Genderless</option>
                        <option value="unknown" onClick={(e) => refClick(e)} >*unknown</option>
                    </Form.Select>

                </Col>
            </Row>

        )
    }

    useEffect(() => {
        console.log("sdad")
        console.log(props.data)
        props.dispatch(loading(setState))

    }, [filterRefStr, filterProvStr]);


    //  ------------------------------------------------ Resultados ---------------------------------------------------
    const sendCharacter = (e, item) => {
        
        e.preventDefault();
        console.log(item)
        
        props.dispatch(loading(item, props.data))

        navigate("/Front_RickAndMorty/character", { replace: true });
    }

/*
    const Results = () => {
        console.log(props)
        return (
            <Row xs={1} md={2} lg={3} xl={4}>
                {props.data.results ? props.data.results.map((item) => (
                    <Col key={item.id}>

                        <Card className="backCard" style={{ width: '18rem', height: '26rem', margin: '4% 0 4% 0' }}>
                            <div className="ContImgCard"> <Card.Img variant="top" src={item.image} className="imgCard" /> </div>
                            <Card.Body style={{padding: '1.1rem 2rem'}}>
                                <Card.Title style={{margin:'0 0 0.1rem 0',  fontWeight: 'bolder'}} >{item.name}</Card.Title>
                                <Card.Text style={{margin:'0 0 0.1rem 0'}}>
                                    {item.status} -
                                    {item.gender} -
                                    {item.species}
                                </Card.Text>
                                <Button style={{margin:'0 0 0 2.2rem'}} variant="primary" href="/Front_RickAndMorty/character" onClick={(e) => sendCharacter(e, item)} >Agregar Favorito</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                )) : "asdasd"}
            </Row>
        )
    }*/

    const pageClick = (e) => {
        setPrevPage("")
        setNextPage("")
        e.preventDefault();
        if (e.target.value === "PrevPag") setPrevPage(props.data.info.prev)
        if (e.target.value === "NextPag") setNextPage(props.data.info.next)
    }

    //  ------------------------------------------------ pages ---------------------------------------------------
    const ControlPages = () => {
        return (
            <Stack direction="horizontal" gap={2} className="NumberPages">
                <Button value="PrevPag"
                    variant="danger" className=" border" onClick={(e) => pageClick(e)} >Prev. Pagina</Button>

                <Button value="NextPag"
                    variant="danger" className=" border ms-auto" onClick={(e) => pageClick(e)} >Sig. Pagina</Button>
            </Stack>
        )
    }

    if(props.loading == true) {
        return (<h1>CARGANDO....</h1>)
    }
    else{
        return (
        
            <Container className="resultCont">
                <div style={{fontWeight: 'bolder'}}>
                    Manejo de inventarios y creacion de facturas
                </div>
    
                <Filters />
    
                <TableExample props={props.data}/>
            
    
            </Container>
        )
    }                          

    
}

//<Results />


const stateMapToPros = state => {
    return { data: state.allForOne.result, char: state.allForOne.character, loading: state.allForOne.loading }

}


export default connect(stateMapToPros)(Section)