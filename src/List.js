import React from 'react';
import Card from './Card.js';

function List(props) {
    const neededCards = props.cardIds;
    
    const listCards = neededCards.map(object => 
        <Card
        key={object.id}
        id={object.id}
        title={object.title}
        content={object.content}
        />
        );
    return (
        <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div key={props.id} id={props.id} className="List-cards">
            {listCards}
        </div>
        </section>
    );
}

export default List;