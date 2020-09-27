import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  //constructor(props) {
  // super(props); //extend edilen component.
  //this.state = {
  state = {
    catagories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" },
    ]
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.state.counter}</h3>
        <ListGroup>
          {this.state.catagories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroupItem> //key kavramı=her bir elemanı diğerinden ayıracak ve eşşiz olacak bir ıd ver.
          ))}
        </ListGroup>
        <h4>{this.props.CurrentCategory}</h4>
      </div>
    );
  }
}
