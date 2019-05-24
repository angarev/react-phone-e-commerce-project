import React, { Component } from 'react';
import Product from '../Product/Product';
import Title from '../Title/Title';

export default class ProductList extends Component {
    state = {
        products: []
    }

    render() {
        return (
            <React.Fragment>                
                <div className="container py-5">
                    <Title name="our" title="products"/>
                </div>
            </React.Fragment>
        )
    }
};
