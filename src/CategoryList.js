import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
 
  state = {
    categories: []
  };


  componentDidMount() {
    this.getCategories();
  }

  getCategories = ()=> {
    fetch("https://localhost:3000/posts")
      .then(response => response.json())
      .then(data=> this.setState({ categories: data }));
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
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
