import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import Product from "./Product";

export default class App extends Component {
state = {CurrentCategory: ""}

  changeCategory = (category) => {
    this.setState({ CurrentCategory: category.categoryName });
  }; //arrow function
  render() {
    let productInfo = { title: "ProductList", baskabisey: "baskabisey" };
    let categoryInfo = { title: "CategoryList" };

    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
              CurrentCategory={this.state.CurrentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Product  CurrentCategory={this.state.CurrentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
