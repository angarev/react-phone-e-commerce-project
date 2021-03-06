import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../../context';
import Button from '../Button/Button';
import classes from './Product.module.css';
import PropTypes from 'prop-types';


export default class Product extends Component {

    render() {
        
        const {id, title, img, price, inCart} = this.props.product;

        return (
            <ProductConsumer>
                {(value) => (
                    <div className= "col-md-3 col-sm-6">
                        <div className={`${classes.cartStyle} card mb-5`}>
                            <div className={`${classes.imgContainer} py-5`} onClick={() => value.handleDetail(id)}>
                                <Link to="/details">
                                    <img src={img} className="card-img-top" alt={title}/>
                                </Link>
                            </div>
                            <div className="card-body text-center">
                                <h3 className="card-title mb-4 font-weight-bold">{title}</h3>
                                <p className="card-text text-muted mb-4">Starting from ${price}</p>
                                <Button 
                                    style={classes.BtnViewDetails} 
                                    disabled={inCart}
                                    click={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                        }}>
                                    {inCart ?(<span>In Cart</span>) : (<span>Add to Cart</span>)}
                                        </Button>
                            </div>
                        </div>
                    </div>
                    )
                }                        
            </ProductConsumer>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired
}