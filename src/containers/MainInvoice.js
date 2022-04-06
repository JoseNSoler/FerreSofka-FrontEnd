import React, { Component } from 'react'
import Result from '../components/Result'
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import PerNavbar from '../components/PerNavbar'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


import { createHashHistory } from 'history';

import Invoice from '../components/Invoice';


class MainInvoice extends Component {// component stateful
  render() {
    return (<>

          <Invoice/>
    </>)
  }
}

export default MainInvoice