import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import Title from '../Title/Title';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import {Link} from 'react-router-dom';
import classes from './Details.module.css';
import Button from '../Button/Button';

export default class Details extends Component {
    render() {

        const crumbs = [
            {title: 'Home', path: '/'}, 
            {title: 'Shop', path: '/'}, 
            {title: "Single product"}
        ];

        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <React.Fragment>
                            <Breadcrumbs crumbs = {crumbs} title = {title}/>
                            <div className="container py-5">                            
                                <Title title={title}/>
                                <div className="row">
                                    <div className="mx-auto col-md-4 my-3">
                                    <figure className="figure">
                                        <img className="figure-img img-fluid" src={img} alt={title} />
                                    </figure>
                                    </div>
                                    <div className="mx-auto col-md-8 my-3">
                                        <p className="h2 d-block font-weight-bold py-3">${price}</p>
                                        <p className="text-muted mt-3 mb-2 lead">{info}</p>
                                        <p className="mt-3 mb-2 text-medium h4">Manufacturer: <span className="text-uppercase text-blue">{company}</span></p>
                                        <Link to="/">
                                            <Button style={`${classes.BtnViewDetails} my-5 mr-4`}> Back to store</Button>
                                        </Link>
                                        <Button 
                                            style={`${classes.BtnAddToCart} my-5`}
                                            disabled={inCart}
                                            click={() => {
                                                value.addToCart(id);
                                            }}>
                                            {inCart ?(<span>In Cart</span>) : (<span>Add to Cart</span>)}
                                        </Button>
                                        
                                    </div>
                                </div>

                                <div className="row">

                                </div>
                            </div>
                        </React.Fragment>
                    )
                }}    
            </ProductConsumer>
        )
    }
}
