import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {

  it('renders without crashing', () => {
    let cardIds = [{id:"l",title:"Twelfth card",content:"lorem ipsum"},{id:"m",title:"Thirteenth card",content:"lorem ipsum"}];
    const div = document.createElement('div');
    ReactDOM.render(<List key='4' id='4' header='Fourth list' cardIds={cardIds} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it ('renders the UI as expected', () => {
    let cardIds = [{id:"l",title:"Twelfth card",content:"lorem ipsum"},{id:"m",title:"Thirteenth card",content:"lorem ipsum"}];
    const tree = renderer
      .create(<List key='4' id='4' header='Fourth list' cardIds={cardIds} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
