import React from 'react';
import './Tarjeta.css';

function Tarjeta(props) {
    return (
        <div className="tarjeta">
            <h2>{props.title}</h2>
            <div className="contenido">
                {props.items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
}

export default Tarjeta;
