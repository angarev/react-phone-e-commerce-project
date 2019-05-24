import React from 'react'

export default function Title({name, title}) {
    return (
        <div className="row">
            <div className="col align-self-center text-title text-center">
                <h1>{name} <strong className='text-blue'>{title}</strong></h1>
            </div>
        </div>
    )
}
