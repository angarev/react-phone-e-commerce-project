import React from 'react';

const Title = (props) => {
    return (
        <div className="row">
            <div className="col align-self-center text-title text-center">
                <h1>{props.name} <strong className='text-blue'>{props.title}</strong></h1>
            </div>
        </div>
    );
};

export default Title;
