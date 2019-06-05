import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid d-none d-lg-block">
            <div className="row text-center my-5 h5">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">name of products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2 text-right">
                    <p className="text-uppercase mr-3">total</p>
                </div>
            </div>
        </div>
    )
}
