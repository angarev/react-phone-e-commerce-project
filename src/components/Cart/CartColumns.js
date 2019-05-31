import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center my-5">
            <div className="row">
                <div className="col">
                    <p className="text-uppercase">products</p>
                </div>
                <div className="col">
                    <p className="text-uppercase">name of products</p>
                </div>
                <div className="col">
                    <p className="text-uppercase">Price</p>
                </div>
                <div className="col">
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className="col">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col">
                    <p className="text-uppercase">total</p>
                </div>
            </div>
        </div>
    )
}
