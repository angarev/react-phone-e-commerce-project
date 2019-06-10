import React, { Component } from 'react';
import Title from '../Title/Title';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';



export default class PageNotFound extends Component {
    render() {

        const crumbs = [
            {title: 'Home', path: '/'}, 
            {title: 'Shop', path: '/'},
            {title: 'Page not found'}
        ];

        return (
            <React.Fragment>
                <Breadcrumbs crumbs = {crumbs} title = ""/>
                <div className="container my-5">
                    <div className="row">
                        <div className="col align-self-center text-center">
                            <Title  title="404"/>
                            <h1 className="py-3">Error</h1>
                            <h2 className="py-3">Page not found</h2>
                            <h3 className="py-3">The requested URL <span className="text-danger">{this.props.location.pathname}</span>{" "} was not found </h3>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
