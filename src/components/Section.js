import { Container, Row, Col, Card, Button, Form, Stack, Spinner } from "react-bootstrap"
import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { filterRef, loading } from '../actions'




import { Navigate, useNavigate  } from 'react-router-dom';

import  TableExample  from './mainTable/mainTable'


const Section = (props) => {
    var numID = (props.data.id) ? props.data.id : props.id
    console.log(props.id)

    let navigate = useNavigate();
    

    const [state, setState] = useState();

    const [resultList2, setResultList2] = useState(["uno", "aaasd", "fgdf", "rtert"]);

    const [resultList, setResultList] = useState();

    const [filterProvStr, setFilterProvStr] = useState();

    const [filterRefStr, setFilterRefStr] = useState();

    const [nextPage, setNextPage] = useState();

    const [prevPage, setPrevPage] = useState();


    const provClick = (e) => {
        e.preventDefault();
        setFilterProvStr(e.target.value)
    }

    const referenceClick = (e) => {
        e.preventDefault();
        console.log("sadasasdasdsd")
        setFilterRefStr(e.target.value)
    
        
    }

    //  ------------------------------------------------ filtros---------------------------------------------------
    const Filters = () => {
        return (
            <Row xs={1} md={2} lg={3} style={{margin: '1.5rem 0 1.5rem 0'}}>
                <Col>
                    <Form.Select aria-label="Referencia" className="selectionReferencia" defaultValue={filterRefStr}
                    onChange={(e) => {
                        if (typeof(e.target.value) != 'undefined') referenceClick(e)
                    }}>
                        <option value="soldadores">soldadores</option>
                        <option value="metales" >metales</option>
                        <option value="protectores">protectores</option>
                        <option value="pinturas">pinturas</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select aria-label="Proveedor" className="selectionProoveedor" defaultValue={filterProvStr}>
                        <option value="Female" onClick={(e) => refClick(e)}>Female</option>
                        <option value="Male" onClick={(e) => refClick(e)} >Male</option>
                        <option value="Genderless" onClick={(e) => refClick(e)} >Genderless</option>
                        <option value="unknown" onClick={(e) => refClick(e)} >*unknown</option>
                    </Form.Select>

                </Col>
            </Row>

        )
    }
    //props.dispatch(filterRef(filterRefStr))

    useEffect(() => {

        (filterRefStr) ? props.dispatch(filterRef(setState ,numID , filterRefStr )) :
        props.dispatch(loading(setState))

        console.log(resultList)

    }, [filterRefStr, filterProvStr, resultList]);


    //  ------------------------------------------------ Resultados ---------------------------------------------------
    const sendCharacter = (e, item) => {
        
        e.preventDefault();
        console.log(item)
        
        props.dispatch(loading(item, props.data))

        navigate("/Front_RickAndMorty/character", { replace: true });
    }


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

    return (props.loading == true) ? (<Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span>
  </Spinner>) : (
        
        <Container>
            <div style={{fontWeight: 'bolder'}}>
                Manejo de inventarios y creacion de facturas
            </div>

            <Filters />
            {props ? <TableExample props={props}></TableExample> : <>""</>}


        </Container>
    )
    
}
// 
//<Results />
// <TableExample props={props.data}/>

const stateMapToPros = state => {
    return { data: state.allForOne.result, char: state.allForOne.character,
        loading: state.allForOne.loading, id: state.allForOne.idInv }

}


export default connect(stateMapToPros)(Section)