import React from 'react';

function Card(props) {
    return (
        <div key={props.id} id={props.id} className="Card">
            <button type="button" onClick={() => props.onDelete(props.list, props.id)}>delete</button>
            <h3>{props.title + props.id}</h3>
            <p>{props.content}</p>
        </div>
    );
}

export default Card;