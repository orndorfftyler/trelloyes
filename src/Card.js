import React from 'react';

function Card(props) {
    return (
        <div key={props.id} id={props.id} className="Card">
            <button type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

export default Card;