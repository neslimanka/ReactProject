import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.info.title}-{this.props.CurrentCategory}</h3>
                
            </div>
        )
    }
}
