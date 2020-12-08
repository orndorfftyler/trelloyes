import React from 'react';
import List from './List.js';


function App(props) {
  console.log(props.store);
  const neededLists = props.store.lists;
  const allCards = props.store.allCards;
  const appLists = neededLists.map(object => 
      <List
      id={object.id}
      header={object.header}
      cardIds={object.cardIds.map(letter => allCards[letter])}
      />
      );

  return (
    <main class="App">
    <header class="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div class="App-list">
      {appLists}
    </div>
    </main>
  );
}

export default App;