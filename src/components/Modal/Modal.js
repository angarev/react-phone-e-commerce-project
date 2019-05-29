import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import classes from './Modal.module.css';
import { ProductConsumer } from '../../context';
import Button from '../Button/Button';


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    
                    const {modalOpen, closeModal} = value
                    const {img, title, price} = value.modalProduct
                    
                    if(!modalOpen) {
                        return null;
                    } else {
                        return (
                        <div className="container">
                            <div className="row">
                                <div className={`${classes.modalWrapper}`} >
                                    <div id={`${classes.modal}`} className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h1 className="display-4 pt-5 py-1">item added to the cart</h1>
                                        <figure className="figure">
                                        <img className="figure-img img-fluid" src={img} alt={title} />
                                        <h3>{title}</h3>
                                        <h3 className="text-muted pb-5 pt-3">Price: ${price}</h3>
                                        <div className="mb-4">
                                            <Link to="/">
                                            <Button click={() => {
                                                    closeModal();
                                                }} style={`${classes.BtnGoToStore}`}>Store</Button>
                                            </Link>
                                        </div>
                                        <div className="mb-5">
                                            <Link to="/cart">
                                            <Button click={() => {
                                                    closeModal();
                                                }} style={`${classes.BtnGoToCart}`}>Go to the cart</Button>
                                            </Link>
                                        </div>
                                    </figure>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                }}
            </ProductConsumer>
        )
    }
}
