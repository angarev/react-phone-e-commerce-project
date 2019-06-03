import React from 'react';

export default function CartItem({item, value}) {
    
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;

    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img 
                src={img} 
                style={{width: '5rem', height: '5rem'}} 
                className="img-fluid" 
                alt={title}/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product: </span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price: </span>${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <button className={`btn btn-outline-info mx-1`} onClick={() => decrement(id)}>&#8722;</button>
                        <span className={`btn btn-outline-info mx-1`}>{count}</span>
                        <button className={`btn btn-outline-info mx-1`} onClick={() => increment(id)}>&#43;</button>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong><i class="fas fa-trash-alt"></i> </strong>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total: </strong> ${total}
            </div>
        </div>
    )
}
