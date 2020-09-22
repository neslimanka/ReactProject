import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <h3>{this.props.info.baskabisey}</h3>
            </div>
        )
    }
}
