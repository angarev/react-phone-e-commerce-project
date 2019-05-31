import React from 'react';
import Title from '../Title/Title';

export default function EmptyCart() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col align-self-center text-center">
                    <Title name="your cart is"title="empty"/>
                </div>
            </div>
        </div>
    )
}
