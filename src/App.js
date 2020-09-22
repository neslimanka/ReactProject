import React, { Component } from "react";
import { Container, Row , Col} from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import Product from "./Product";

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList />
            </Col>
            <Col xs="9">
              <Product />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
