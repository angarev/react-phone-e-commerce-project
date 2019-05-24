import React, { Component } from 'react';
import Product from '../Product/Product';
import Title from '../Title/Title';
import { ProductConsumer } from '../../context';

export default class ProductList extends Component {
    render() {
       
        return (
            <React.Fragment>                
                <div className="container py-5">
                    <Title name="our" title="products"/>
                </div>
                <div className="container">
                    <div className="row">
                    <ProductConsumer>
                        {(value) => {
                            return value.products.map( (product) => {
                                return <Product 
                                key={product.id} 
                                product = {product}
                                />
                            })
                        }}
                    </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};
