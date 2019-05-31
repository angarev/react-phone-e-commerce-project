import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import Title from '../Title/Title';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';

export default class Cart extends Component {

    render() {

        const crumbs = [
            {title: 'Home', path: '/'}, 
            {title: 'Shop', path: '/'}, 
            {title: "Cart"}
        ];

        return (
            <section>
                <Breadcrumbs crumbs = {crumbs} title = "Cart"/>
                <ProductConsumer>
                    {(value) => {
                        const {cart} = value;
                        if(cart.length > 0) {
                            return (
                                <div className="container py-5"> 
                                    <Title name="your "title="cart"/>
                                    <CartColumns/>
                                    <CartList value = {value}/>
                                </div>
                            )
                        } else {
                            return (
                                <EmptyCart/>
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
