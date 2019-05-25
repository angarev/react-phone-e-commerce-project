import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();

//Provider
class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct
    }

    componentDidMount() {
        this.setProducts();
    };

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const itemSingle = {...item};
            tempProducts = [...tempProducts, itemSingle ]
        });

        this.setState(() => {
            return {products: tempProducts}
        });
    };

    handleDetail = () => {
        console.log("hello from detail");
    };

    addToCart = () => {
        console.log("hello from add to cart");
    };

    render() {
        return (
            <ProductContext.Provider value={
                {
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart
                }
            }>
                {this.props.children}
            </ProductContext.Provider>
        )
    };
};

//Consumer
const ProductConsumer = ProductContext.Consumer;


export {ProductProvider, ProductConsumer};
