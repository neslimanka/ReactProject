import React, { Component } from "react";
import { Container, Row , Col} from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import Product from "./Product";

export default class App extends Component {
  render() {

     let productInfo={title: "ProductList",baskabisey:"baskabisey"}
     let categoryInfo={title: "CategoryList"}
     
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList info={categoryInfo}/>
            </Col>
            <Col xs="9">
              <Product info={productInfo}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
