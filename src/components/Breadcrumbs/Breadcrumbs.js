import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Breadcrumbs.module.css';


const Breadcrumbs = (props) => {
    
    const {crumbs, title} = props;

    return (
        <div className={`${classes.wrapper}`}>
            <div className="container">
            <div className="row">
                <div className="col-6">{title ? <h1>{title}</h1> : null }</div>
                <div className="col-6">
                    <ul className={`${classes.crumb}`}>
                        { crumbs ?
                            crumbs.map((crumb, i) => 
                                { return (
                                    i===crumbs.length-1 ? 
                                    <li className={`ml-5 py-2`} key={ i } >{ crumb.title }</li> : 
                                    <li className={`ml-5 py-2`} key={ i } ><Link to={crumb.path}>{ crumb.title }</Link></li>  
                                )}
                            )
                           : null
                        } 
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Breadcrumbs;
