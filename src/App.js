import React from 'react';
import List from './List.js';


function App(props) {
  console.log(props.store);
  const neededLists = props.store.lists;
  const allCards = props.store.allCards;

  console.log(neededLists.map(object => 
   
    {object.cardIds.map(letter => allCards[letter])}
    
    ));

  const appLists = neededLists.map(object => 
      <List
      key={object.id}
      id={object.id}
      header={object.header}
      cardIds={object.cardIds.map(letter => allCards[letter])}
      />
      );

  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {appLists}
    </div>
    </main>
  );
}

export default App;