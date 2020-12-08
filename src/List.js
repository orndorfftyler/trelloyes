import React from 'react';
import Card from './Card.js';

function List(props) {
    const neededCards = props.cardIds;
    
    const listCards = neededCards.map(object => 
        <Card
        id={object.id}
        title={object.title}
        content={object.content}
        />
        );
    return (
        <section class="List">
        <header class="List-header">
          <h2>{props.header}</h2>
        </header>
        <div id={props.id} class="List-cards">
            {listCards}
        </div>
        </section>
    );
}

export default List;