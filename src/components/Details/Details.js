import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import Title from '../Title/Title';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import {Link} from 'react-router-dom';
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
                                    <div className="mx-auto col-md-6 my-3">
                                    <figure class="figure">
                                        <img className="figure-img img-fluid" src={img} alt={title} />
                                    </figure>
                                    </div>
                                    <div className="mx-auto col-md-6 my-3">
                                        <h4 className="text-muted mt-3 mb-2">This is made by <span className="text-uppercase">{company}</span></h4>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }}    
            </ProductConsumer>
        )
    }
}
