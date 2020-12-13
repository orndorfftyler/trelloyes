import React from 'react';
import List from './List.js';
import STORE from './store.js';



class App extends React.Component {

  state = {
    store: STORE
  
  }


  listsBuilder() {
    const neededLists = this.state.store.lists;
    const allCards = this.state.store.allCards;

    console.log('needed lists' + neededLists[0].cardIds);
    console.log('allCards ' + this.state.store.allCards);

    const appLists = neededLists.map(object => 
        <List
        key={object.id}
        id={object.id}
        header={object.header}
        cardIds={object.cardIds.map(letter => allCards[letter])}
        onDelete={this.handleDelete}
        random={this.handleRandom}
        />
        );
    return appLists;
  }

  handleDelete = (list,id) => {
    console.log('handleDelete');
    const listObj = this.state.store.lists.filter(item => 
      item.header === list
    );
    const newIdArr = listObj[0].cardIds.filter(cardId => 
      cardId !== id
    );
    const listPosition = this.state.store.lists.indexOf(listObj[0]);

    const allLists = this.state.store.lists;
    allLists[listPosition].cardIds = newIdArr;
    const stillAllCards = this.state.store.allCards;

    this.setState(
      {store:
        {lists: allLists,
        allCards: stillAllCards }
      })
  }

  handleRandom = () => {
    console.log('handleRandom');
  }


  render() {
    
    return (
      <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {this.listsBuilder()}
      </div>
      </main>
    );
    }
}

export default App;