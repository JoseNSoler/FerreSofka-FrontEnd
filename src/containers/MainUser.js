import React, { Component } from 'react'
import Result from '../components/Result'
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import PerNavbar from '../components/PerNavbar'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


import { createHashHistory } from 'history';

import Invoice from '../components/Invoice';
import Users from '../components/Users';


class MainUser extends Component {// component stateful
  render() {
    return (<>
          <Users/>
    </>)
  }
}

export default MainUser