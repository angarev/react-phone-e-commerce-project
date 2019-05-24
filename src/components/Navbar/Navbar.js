import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';
import Button from '../Button/Button';
import classes from './Navbar.module.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-sm px-sm-5 border-top border-bottom mt-3">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative Commons (Attribution 3.0 Unported);https://www.iconfinder.com/Makoto_msk */}                
                <Link to='/'>
                    <img src={logo} alt="Store" className="navbar-brand"/>
                </Link>
            
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ml-5">
                        <Link className={classes.NavigationLink} to="/">Home</Link>
                    </li>
                </ul>
                
                <Link to='/cart'>                            
                    <Button style={ classes.BtnCart}>
                        <i className="fas fa-cart-plus "><span className="ml-3">My Cart</span></i>
                    </Button>
                </Link>
            </nav>
        )
    }
};



