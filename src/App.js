import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import CategoryList from './CategoryList'
import Navi from './Navi'
import Product from './Product'

export default class App extends Component {
    render() {
        return (
            <div>
                <Container>
                   <Row>
                   <CategoryList></CategoryList>
                   </Row>
                   <Row>
                       <Navi></Navi>
                   </Row>
                   <Product></Product>


                </Container>
                
                <h3>Hello from React!</h3>
            </div>
        )
    }
}
